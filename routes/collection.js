const express = require('express');
const Collection = require('../models/collection');
const User = require('../models/user');
const router = express.Router()
const upload = require('../middlewares/multer2')
const mongoose = require('mongoose');
const link = require('../models/link');
const { isLoggedIn, notLoggedIn, isAuthor } = require('../middlewares/auth');
var cuid = require('cuid');
const { timeSince, isValidURL } = require('../helpers/utility');
const fs = require('fs')
const shortid = require('shortid');

router.post('/', isLoggedIn, upload.single('profile-file'), async (req, res, next) => {
  try {
    await Collection.create({
      id: cuid(),
      title: req.body.title,
      thumbnail: (req.file && req.file.path) ? req.file.path : (Math.random() > 0.5 ? 'public/uploads/default_thumbnail.png' : 'public/uploads/default_thumbnail2.svg'),
      description: req.body.description || '',
      isPrivate: req.body.isPrivate || false,
      user_id: req.user.id,
      shortUrl: shortid.generate()

    })
    return res.redirect('/user/dashboard')
  } catch (err) {
    console.error(err)
    res.status(500).send({
      message: 'Internal server error!',
      success: false,
      data: []
    })
  }
})

router.get('/do-bookmark/:id', isLoggedIn, async (req, res, next) => {
  try {
    const collection = await Collection.findOne({ id: req.params.id })
    const isCurrAuthor = isAuthor(req.user, collection)
    if (!isCurrAuthor) {
      req.flash('err', 'do not have enough permission!')
      return res.redirect('/user/dashboard')
    }

    const result = req.user.favs.filter(elt => elt == req.params.id)
    if (!result.length) {
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      await User.findOneAndUpdate({
        email: req.user.email
      }, {
        $addToSet: { favs: req.params.id }
      })
      return res.redirect('/user/bookmarks')
    } else {
      console.log('bbbbbbbbbbbbbbbbbb', req.params.id)
      await User.findOneAndUpdate({
        id: req.params.id
      }, {
        $pullAll: { favs: [req.params.id] }
      })
      return res.redirect('/user/dashboard')
    }
  } catch (err) {
    console.error(err)
    res.redirect('/')
  }
})
router.get('/add', isLoggedIn, async (req, res, next) => {
  const messages = req.flash('error');
  res.render('pages/addCollection', {
    messages: messages,
    title: 'add-collection',
    hasErrors: messages.length > 0
  })
})

router.post('/link/edit', isLoggedIn, async (req, res, next) => {
  try {
    await link.findOneAndUpdate({ id: req.body.link_id }, { value: req.body.link })
    return res.redirect(`/collection/${req.body.collection_id}`)
  } catch (err) {
    console.error(err)
    // todo flash error message
    return res.redirect(`/collection/${req.body.collection_id}`)
  }
})


router.post('/link', isLoggedIn, async (req, res, next) => {
  try {

    await link.create({
      id: cuid(),
      value: req.body.link,
      source: 'google.com',
      collection_id: req.body.collection_id
    })
    return res.redirect(`/collection/${req.body.collection_id}`)
  } catch (err) {
    console.error(err)
    // todo flash error message
    return res.redirect(`/collection/${req.body.collection_id}`)
  }
})

router.get('/:id', async (req, res, next) => {
  const messages = req.flash('error');
  let collection = await Collection.findOne({
    id: req.params.id,
    deletedAt: null
  })
  const isCurrAuthor = isAuthor(req.user, collection)
  console.log('asasasa', isCurrAuthor)

  let newShortUrl;
  if (!collection.shortUrl) {
    newShortUrl = shortid.generate()
    await Collection.findOneAndUpdate({ id: req.params.id }, { shortUrl: newShortUrl })
  }
  if (req.user) {
    await Collection.findOneAndUpdate({ id: req.params.id }, { $addToSet: { views: req.user.id } })
  }

  collection = collection.toObject();
  let url;
  if (!collection.shortUrl) {
    url = process.env.NODE_ENV == 'TEST' ? `http://localhost:${process.env.PORT}/share/${newShortUrl}` : `https://production.com/share/${newShortUrl}`
  } else {
    url = process.env.NODE_ENV == 'TEST' ? `http://localhost:${process.env.PORT}/share/${collection['shortUrl']}` : `https://production.com/share/${collection['shortUrl']}`
  }
  collection['shortUrl'] = url
  console.log(';assasa', collection)
  if (collection) {
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
      title: 'collection-detail',
      hasErrors: messages.length > 0,
      isPrivate: collection.isPrivate,
      isCurrAuthor
    })

  }
})

//user can do its own collections only
router.post('/delete/:id', async (req, res) => {
  try {
    const result = await Collection.findOne({
      id: req.params.id,
      deletedAt: null

    })
    if (result.user_id !== req.user.id) {
      req.flash('error', ['You do not have permission to delete this collection!'])
      return res.redirect(`/user/dashboard`)
    }
    if (!result) {
      req.flash('error', ['Collection do not exists!'])
      return res.redirect(`/user/dashboard`)
    }
    await Collection.findOneAndUpdate({ id: req.params.id }, { deletedAt: new Date() })
    req.flash('error', [`Collection : ${result.title} is successfully deleted!`])
    return res.redirect(`/user/dashboard`)
  } catch (err) {
    console.error(err)
    req.flash('error', [`something went wrong`])
    return res.redirect(`/user/dashboard`)
  }
})

//user can do its own collections only
router.post('/edit/:id', async (req, res) => {
  try {
    const result = await Collection.findOne({
      id: req.params.id,
      deletedAt: null

    })
    if (result.user_id !== req.user.id) {
      req.flash('error', ['You do not have permission to delete this collection!'])
      return res.redirect(`/user/dashboard`)
    }
    if (!result) {
      req.flash('error', ['Collection do not exists!'])
      return res.redirect(`/user/dashboard`)
    }
    await Collection.findOneAndUpdate({ id: req.params.id }, { title: req.body.title, description: req.body.description, isPrivate: req.body.isPrivate == 'true' ? true : false })
    req.flash('error', [`Collection : ${result.title} is successfully edited!`])
    return res.redirect(`/user/dashboard`)
  } catch (err) {
    console.error(err)
    req.flash('error', [`something went wrong`])
    return res.redirect(`/user/dashboard`)
  }
})

// https://stackoverflow.com/questions/29721225/staying-authenticated-after-the-page-is-refreshed-using-passportjs
//delete collection,edit,read(all or single)
//create, delete link,edit,read(all or single)
//check public /private in case accessing someone else's link


//lets see can I go faster and defeat him

//pricing page
//login/registyer page
//contact us
//forgot password
//remind me feature
//search
//faq
//saved collection
//upgrade account->logic and pay functinalities
//edit profile
//like feature
//view count increase feature
//shareable links and option to share at twitter,facebook,reddit,instagram,quora
//paginated view for infinite collections
//on hover show info about links & collection

module.exports = router;