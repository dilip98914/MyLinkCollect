const express = require('express');
const router = express.Router()
const passport = require('passport')
var csrf = require('csurf');
const link = require('../models/link');

const { isLoggedIn, notLoggedIn } = require('../middlewares/auth');
const Collection = require('../models/collection');
const user = require('../models/user');

const csrfProtection = csrf();
router.use(csrfProtection);

router.get('/dashboard', isLoggedIn, async (req, res, next) => {
  let collections = await Collection.find({
    user_id: req.user.id,
    deletedAt: null
  })
  collections = collections.map(elt => elt.toObject())

  for (let i = 0; i < collections.length; i++) {
    const links = await link.find({
      collection_id: collections[i].id
    })
    const imagePath = collections[i].thumbnail.replace('public', '')

    const userFound = await user.findOne({ id: collections[i].user_id })
    collections[i].by = userFound.email
    collections[i].links = links.map(elt => elt.toObject());
    collections[i].thumbnail = imagePath
  }
  const messages = req.flash('error');
  res.render('pages/dashboard', {
    title: 'dashboard',
    collections,
    messages
  })
})

router.get('/logout', isLoggedIn, async function (req, res, next) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});


router.use('/', notLoggedIn, (req, res, next) => {
  next()
})

router.post('/register', passport.authenticate('local.signup', {
  failureRedirect: '/user/register',
  failureFlash: true
}), (req, res, next) => {
  try {
    res.redirect('/user/dashboard')
  } catch (e) {
    console.error(e)
  }
})

router.get('/register', async (req, res, next) => {
  const messages = req.flash('error');
  res.render('pages/register', {
    csrfToken: req.csrfToken(),
    messages: messages,
    title: 'register',
    hasErrors: messages.length > 0
  })
})


router.post('/login', passport.authenticate('local.signin', {
  failureRedirect: '/user/login',
  failureFlash: true
}), async function (req, res, next) {
  if (req.session.oldUrl) {
    var oldUrl = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldUrl);
  } else {

    const loginObject = {
      lastLogin: new Date(),
      device: req.device.type,
    }
    await user.findOneAndUpdate({
      id: req.user.id
    }, {
      $push: {
        logins: loginObject
      }
    })
    res.redirect('/user/dashboard');
  }
});

router.get('/login', async (req, res, next) => {
  const messages = req.flash('error');
  res.render('pages/login', {
    csrfToken: req.csrfToken(),
    messages,
    title: 'login',
  })
})


module.exports = router;