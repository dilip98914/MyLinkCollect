const express = require('express')
const Collection = require('../models/collection')
const link = require('../models/link')
const user = require('../models/user')
const { timeSince } = require('../helpers/utility')
const router = express.Router()

router.get('/', async (req, res, next) => {
  res.locals.currentPage = 'homepage'
  // console.log(res.locals)
  res.render('pages/homepage', {
    title: 'homepage',
    isCurrentPage: res.locals.currentPage == 'homepage' ? 'active' : ''
  })
})

router.get('/support', async (req, res, next) => {
  res.locals.currentPage = 'support'
  // console.log(res.locals)
  res.render('pages/support', {
    title: 'support',
    isCurrentPage: res.locals.currentPage == 'support' ? 'active' : ''
  })
})

router.get('/explore', async (req, res, next) => {
  let collections = await Collection.find({ deletedAt: null }).limit(20).sort({
    createdAt: -1
  })
  collections = collections.map(elt => elt.toObject())
  for (let i = 0; i < collections.length; i++) {
    const links = await link.find({
      collection_id: collections[i].id
    })
    const userFound = await user.findOne({ id: collections[i].user_id })
    collections[i].by = userFound.email
    collections[i].links = links.map(elt => elt.toObject());
    collections[i].timeAgo = timeSince(new Date(collections[i].createdAt))
  }
  const messages = req.flash('error');
  res.locals.currentPage = 'explore'
  res.render('pages/explore', {
    title: 'explore',
    isCurrentPage: res.locals.currentPage == 'explore' ? 'active' : '',
    collections,
    messages
  })
})

router.get('/share/:id', async (req, res) => {
  try {
    const messages = req.flash('error');
    let collection = await Collection.findOne({
      shortUrl: req.params.id,
      deletedAt: null
    })
    console.log('aaaaaaaaa', req.params)
    if (!collection) return res.send('not found!')
    collection = collection.toObject();
    const linksAssociated = await link.find({
      collection_id: collection.id
    })
    const links = linksAssociated.map(elt => {
      elt = elt.toObject()
      return {
        ...elt,
        source: elt.value.replace(/.+\/\/|www.|\..+/g, ''),
        timeAgo: timeSince(new Date(elt.createdAt))
      }
    })
    res.render('pages/collectionDetail', {
      messages: messages,
      collection: { ...collection, links },
      title: 'short-url',
      hasErrors: messages.length > 0,
      isPublic: true
    })
  } catch (err) {
    console.error(err);
  }
})

module.exports = router;