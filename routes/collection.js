const express = require('express');
const Collection = require('../models/collection');
const router = express.Router()
const uploadToDisk = require('../middlewares/multer')
const mongoose = require('mongoose');
const link = require('../models/link');
const { isLoggedIn, notLoggedIn } = require('../middlewares/auth');
var cuid = require('cuid');
const { timeSince } = require('../helpers/utility');

router.post('/', isLoggedIn, uploadToDisk.single('image'), async (req, res, next) => {
  try {
    console.log('rrrr', req.file, req.body)
    let { title, description, isPrivate } = req.body;
    if (!isPrivate) isPrivate = false;
    console.log('rrrr', req.file)
    res.send('ok')
    /*
    https://medium.com/@kavitanambissan/uploading-and-retrieving-a-file-from-gridfs-using-multer-958dfc9255e8

    const imageCollection = mongoose.connection.db.collection('images.files');
    const imageCollectionChunk = mongoose.connection.db.collection('images.chunks');

    const imageFound = await imageCollection.findOne({ filename: req.file.filename })
    const imageChunks = await imageCollectionChunk.find({
      files_id: imageFound._id
    }).sort({ n: 1 })
    const chunks = await imageChunks.toArray()
    console.log('aaaaaaaaa----->', imageFound)

    let fileData = [];
    for (let i = 0; i < chunks.length; i++) {
      fileData.push(chunks[i].data.toString('base64'));
    }

    //Display the chunks using the data URI format          
    let finalFile = 'data:' + imageFound.contentType + ';base64,'
      + fileData.join('');
    var fs = require('fs');
    var some_file = fs.createWriteStream(__dirname + imageFound.filename, { flags: 'w' });
    return res.send(finalFile);
    console.log('ssssss', imageCollection)
    return res.send('ok')
    */
    if (req.file) {
      //later
      console.log('rrrr', req.file)
      return res.send('file upload not implemented!')
      await Collection.create({
        title,
        description: description || '',
        isPrivate: isPrivate,
        user_id: req.user.id,
      })

    } else {
      await Collection.create({
        id: cuid(),
        title,
        description: description || '',
        isPrivate: isPrivate,
        user_id: req.user.id
      })
      return res.redirect('/user/dashboard')
      // res.status(200).send({
      //   message: 'Successfully added collection!',
      //   success: true,
      //   data: [collection]
      // })
    }
  } catch (err) {
    console.error("eeeeeeeeeeeeeeeeee", err)
    res.status(500).send({
      message: 'Internal server error!',
      success: false,
      data: []
    })
  }
})

async function test() {

}

test()

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
  console.log('xxxxxxxxxxxxxx->>>>>>>>>>', linksAssociated.map(elt => elt.toObject()))
  res.render('pages/collectionDetail', {
    messages: messages,
    collection: { ...collection.toObject(), links },
    title: 'collection-detail',
    hasErrors: messages.length > 0
  })
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