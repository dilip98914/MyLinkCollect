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

router.get('/bench-detail', async (req, res, next) => {
  const styles = [
    'global',
    'bench-detail',
    'loader',
    'bootstrap',
  ]
  const context = {
    styles
  }
  res.render('pages/benchResource2', context)
})

router.get('/blog/:id', async (req, res, next) => {
  const styles = [
    'global',
    'blogview',
    'bootstrap',
  ]
  const context = {
    styles
  }
  res.render('pages/blogDetail', context)
})

router.get('/blog', async (req, res, next) => {
  const styles = [
    'global',
    'bootstrap',
    'blog'
  ]
  const context = {
    styles
  }
  res.render('pages/blogList', context)
})

router.get('/pricing-table', async (req, res, next) => {
  const styles = [
    'global',
    'bootstrap',
    'tableb6f5'
  ]
  const context = {
    styles
  }
  res.render('pages/pricingTable', context)
})


router.get('/contact-us', async (req, res, next) => {
  const styles = [
    'global',
    'contact',
    'toaster',
    'bootstrap',
  ]
  const context = {
    styles
  }
  res.render('pages/contact', context)
})

router.get('/contract-jobs', async (req, res, next) => {
  const styles = [
    'global',
    'contract-jobs',
    'bootstrap',
    'toaster',
  ]
  const context = {
    styles
  }
  res.render('pages/contractJobs', context)

})

router.get('/hire-bench', async (req, res, next) => {
  const styles = [
    'global',
    'contract-jobs',
    'bootstrap',
    'toaster',
  ]
  const context = {
    styles
  }
  res.render('pages/contractJobs', context)

})


router.get('/deploy-bench', async (req, res, next) => {
  const styles = [
    'global',
    'deploy-bench',
    'bootstrap',
  ]
  const context = {
    styles
  }
  res.render('pages/deployBench', context)
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


router.get('/about', async (req, res, next) => {
  const styles = [
    'global',
    'bootstrap',
  ]
  const context = {
    styles
  }
  res.render('pages/about', context)
})

router.get('/register', async (req, res, next) => {
  const styles = [
    'global',
    'bootstrap',
    'register'
  ]
  const context = {
    styles
  }
  res.render('pages/register', context)
})

router.get('/freelancer-register', async (req, res, next) => {
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