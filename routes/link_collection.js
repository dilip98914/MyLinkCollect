const express = require('express');
const Collection = require('../models/collection');
const router = express.Router()
const upload = require('../middlewares/multer')
const mongoose = require('mongoose')
router.post('/', upload.single('image_upload'), async (req, res, next) => {
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
    } else {
      const collection = await Collection.create({
        title,
        description: description || '',
        isPrivate: isPrivate,
        user_id: req.user.id
      })
      res.redirect('/user/dashboard')
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

router.get('/', async (req, res, next) => {
  const messages = req.flash('error');
  res.render('pages/addCollection', {
    messages: messages,
    title: 'add-collection',
    hasErrors: messages.length > 0
  })
})



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