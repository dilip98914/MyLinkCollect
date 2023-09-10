const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.render('pages/homepage', {})
})
router.get('/dashboard', async (req, res, next) => {
  res.render('pages/dashboard', {})
})

module.exports = router;