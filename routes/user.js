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
  const messages = req.flash('error');
  const data = await getDashboardData(req.url, messages, req.user)
  console.log('sasasas', data)
  res.render('pages/dashboard', data)
})

router.get('/bookmarks', isLoggedIn, async (req, res, next) => {
  const messages = req.flash('error');
  const data = await getDashboardData(req.url, messages, req.user)
  res.render('pages/dashboard', data)
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

async function getDashboardData(url, messages, userFound) {
  try {
    const isBookmarks = url.includes('bookmark');
    console.log("hiiiiiiiiiiii", messages)
    let collections;
    if (isBookmarks) {
      collections = await Collection.find({
        user_id: userFound.id,
        deletedAt: null,
        id: { $in: userFound.favs }
      })
    } else {
      collections = await Collection.find({
        user_id: userFound.id,
        deletedAt: null,
      })
    }

    if (!collections.length) {
      return {
        title: url,
        isBookmarks,
        collections: [],
        messages
      }
    }

    for (let i = 0; i < collections.length; i++) {
      collections[i] = collections[i].toObject()
      const imagePath = collections[i].thumbnail.replace('public', '')

      const [links] = await Promise.all([
        link.find({
          collection_id: collections[i].id
        }),
      ])

      collections[i].by = userFound.email
      collections[i].links = links.map(elt => elt.toObject());
      collections[i].thumbnail = imagePath
    }
    return {
      title: url,
      collections,
      messages,
      isBookmarks,
    }
  } catch (err) {
    console.error(err)
    return { error: true }
  }
}

module.exports = router;