const express = require('express');
const Collection = require('../models/collection');
const router = express.Router()
const upload = require('../middlewares/multer2')
const mongoose = require('mongoose');
const link = require('../models/link');
const { isLoggedIn, notLoggedIn } = require('../middlewares/auth');
var cuid = require('cuid');
const { timeSince, isValidURL } = require('../helpers/utility');
const fs = require('fs')
const shortid = require('shortid');

router.get('/view-image', (req, res) => {
  // const stat = fs.statSync(req.file.path);
  // res.writeHead(200, {
  //   "Content-Type": "image/png",
  //   'Content-Length': stat.size

  // });

  // fs.createReadStream(req.file.path).pipe(res);

  // alternate
  return res.send(`
    <img src='/uploads/google.png'>
  `)
})


router.get('/share/:id', async (req, res) => {
  const urlId = shortid.generate();
  const baseUrl = `http://localhost:8080` //process.env.baseUrl
  // const shortUrl = `${baseUrl}/${urlId}`;
  const collection = await Collection.findOne({
    id: req.params.id
  })
  if (!collection.shortUrl) {
    const coll = await Collection.findOneAndUpdate({
      id: req.params.id
    }, {
      shortUrl: urlId
    }, {
      new: true
    })
    const linksAssociated = await link.find({
      collection_id: coll.id
    })
    const links = linksAssociated.map(elt => {
      elt = elt.toObject()
      return {
        ...elt,
        source: elt.value.replace(/.+\/\/|www.|\..+/g, ''),
        timeAgo: timeSince(new Date(elt.createdAt))
      }
    })
    const messages = req.flash('error');
    return res.redirect(`/collection/${req.query.id}`)
    // res.render('pages/collectionDetail', {
    //   messages: messages,
    //   collection: { ...coll.toObject(), links },
    //   title: 'collection-detail',
    //   hasErrors: messages.length > 0,
    //   openModal: true
    // })

  }
  // req.session.
  // const collection=await Collection.findOne({
  //   id:req.params.id
  // })
  // return res.redirect(`/collection/${id}`)

})


router.post('/', isLoggedIn, upload.single('profile-file'), async (req, res, next) => {
  try {
    // console.log('asssssss', req.file.path)
    await Collection.create({
      id: cuid(),
      title: req.body.title,
      thumbnail: (req.file && req.file.path) ? req.file.path : (Math.random() > 0.5 ? 'public/uploads/default_thumbnail.png' : 'public/uploads/default_thumbnail2.svg'),
      description: req.body.description || '',
      isPrivate: req.body.isPrivate || false,
      user_id: req.user.id
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
  const collection = await Collection.findOne({
    id: req.params.id
  })
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
      collection: { ...collection.toObject(), links },
      title: 'collection-detail',
      hasErrors: messages.length > 0,
      openModal: false
    })

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