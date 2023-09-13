const express = require('express');
const Collection = require('../models/collection');
const router = express.Router()
const upload = require('../middlewares/multer')
const mongoose = require('mongoose');
const link = require('../models/link');
const { isLoggedIn, notLoggedIn } = require('../middlewares/auth');
var cuid = require('cuid');

router.post('/', isLoggedIn, upload.single('image_upload'), async (req, res, next) => {
  try {
    let { title, description, isPrivate } = req.body;
    if (!isPrivate) isPrivate = false;
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
  // await link.create({
  //   value: 'https://www.youtube.com/watch?v=NSXK3fBDD0c&list=RDGMEM2j3yRsqu_nuzRLnHd2bMVA&start_radio=1&rv=a3B2glol4IU',
  //   source: 'youtube.com',
  //   collection_id: collection.id
  // })
  // await link.create({
  //   value: 'https://askubuntu.com/questions/787023/bluetooth-not-working-on-ubuntu-16-04-lts',
  //   source: 'https://askubuntu.com',
  //   collection_id: collection.id
  // })

  const linksAssociated = await link.find({
    collection_id: collection.id
  })
  console.log('xxxxxxxxxxxxxx->>>>>>>>>>', linksAssociated.map(elt => elt.toObject()))
  res.render('pages/collectionDetail', {
    messages: messages,
    collection: { ...collection.toObject(), links: linksAssociated.map(elt => elt.toObject()) },
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