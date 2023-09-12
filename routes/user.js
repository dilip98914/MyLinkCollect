const express = require('express');
const router = express.Router()
const passport = require('passport')
var csrf = require('csurf');

const { isLoggedIn, notLoggedIn } = require('../middlewares/auth')

const csrfProtection = csrf();
router.use(csrfProtection);

router.get('/dashboard', isLoggedIn, async (req, res, next) => {
  res.render('pages/dashboard', {
    title: 'dashboard'
  })
})

router.get('/logout', isLoggedIn, function (req, res, next) {
  req.logout();
  res.redirect('/');
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
  // console.log('xxxxxxxxxxxxxxxx', req.session)
  // if (req.session.oldUrl) {
  //   const oldUrl = req.session.oldUrl;
  //   req.session.oldUrl = null;
  //   res.redirect(oldUrl)
  // } else {
  // res.redirect('/user/dashboard')
  // }
})

router.get('/register', async (req, res, next) => {
  const messages = req.flash('error');
  // console.log('aaaaaaaaaaa', req.csrfToken())
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
}), function (req, res, next) {
  if (req.session.oldUrl) {
    var oldUrl = req.session.oldUrl;
    req.session.oldUrl = null;
    res.redirect(oldUrl);
  } else {
    res.redirect('/user/dashboard');
  }
});

router.get('/login', async (req, res, next) => {
  const messages = req.flash('error');

  res.render('pages/login', {
    csrfToken: req.csrfToken(),
    messages: messages,
    title: 'login',
    hasErrors: messages.length > 0
  })
})


module.exports = router;