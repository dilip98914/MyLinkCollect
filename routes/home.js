const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
  const styles = [
    'bootstrap',
    'global',
    'owl',
    'owl-theme',
    'home'
  ]
  const context = {
    styles
  }
  res.render('pages/homepage', context)
})

router.get('/contact-us', async (req, res, next) => {
  const styles = [
    'global',
    'contact',
    'toaster',
    'bootstrap',
    // 'styles'
  ]
  const context = {
    styles
  }
  res.render('pages/contact', context)
})

router.get('/faq', async (req, res, next) => {
  const styles = [
    'global',
    'faq',
    'bootstrap',
  ]
  const context = {
    styles
  }
  res.render('pages/faq', context)
})


router.get('/about-us', async (req, res, next) => {
  const styles = []
  const context = {
    styles
  }
  res.render('pages/about', context)
})

router.get('/register', async (req, res, next) => {
  const styles = [
  ]
  const context = {
    styles
  }
  res.render('pages/register', context)
})

router.get('/register-freelancer', async (req, res, next) => {
  const styles = [
    'bootstrap',
    'global',
    'freelancer-register',
    'testimonials',
    'toaster'
  ]
  const context = {
    styles
  }
  res.render('pages/freelancerRegister', context)
})

router.get('/login', async (req, res, next) => {
  const styles = [
    'bootstrap',
    'global',
    'login',
    'toaster'
  ]
  const context = {
    styles
  }
  res.render('pages/login', context)
})

router.get('/forgot-password', async (req, res, next) => {
  const styles = [
    'bootstrap',
    'global',
    'toaster',
    'forgot'
  ]
  const context = {
    styles
  }
  res.render('pages/forgotPassword', context)
})


module.exports = router;