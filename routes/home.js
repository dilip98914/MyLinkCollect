const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.render('pages/homepage', {
    title: 'homepage'
  })
})

module.exports = router;