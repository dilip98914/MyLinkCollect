const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Joi = require('joi');
const upload = require('../middlewares/multer')
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;
const dbConfig = require("../config/key");
const { authenticateSession } = require('../middlewares/auth')

router.put('/', async (req, res, next) => {
  // const schema = Joi.object({
  //   username: Joi.string()
  //     .alphanum()
  //     .min(3)
  //     .max(30)
  //     .required(),

  //   password: Joi.string()
  //     .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

  //   repeat_password: Joi.ref('password'),

  //   access_token: [
  //     Joi.string(),
  //     Joi.number()
  //   ],

  //   birth_year: Joi.number()
  //     .integer()
  //     .min(1900)
  //     .max(2013),

  //   email: Joi.string()
  //     .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  // })
  // schema.validate(req.body)
  User.findOneAndUpdate({ id: req.user.id }, req.body.updatePayload).then(result => {
    return res.send(200).send({
      message: 'Updated Profile Successfully!',
      data: result
    })
  }).catch(err => {
    console.error(err)
    res.status(500).send({ message: "Something went wrong!" })
  })
})

router.delete('/', async (req, res, next) => {
  await User.findOneAndUpdate({
    id: req.user.id
  }, {
    deletedAt: new Date()
  })
})

router.post('/resume', async (req, res, next) => {
  if (["pdf", "doc", "docx"].includes(req.file.mimetype.split('/')[1])) {
    //we essentially override resume if uploaded again!
    //todo set limit and minimum time span 
    User.findOneAndUpdate({ id: req.user.id }, { resume: req.file.filename }).then(result => {
      return res.send(200).send({
        message: 'resume uploaded successfully'
      })
    }).catch(e => {
      console.error(e)
      return res.status(500).send({ message: 'Something went wrong!' })
    })
  } else {
    return res.status(400).send({
      message: 'invalid file type!'
    })
  }
})


//admin apis
router.post('/verify', async (req, res, next) => {
  try {
    const { user_id } = req.body;
    await User.findOneAndUpdate({ id: user_id }, { isVerified: true })
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Something went wrong!' })
  }
})

router.post('/unverify', async (req, res, next) => {
  try {
    const { user_id } = req.body;
    await User.findOneAndUpdate({ id: user_id }, { isVerified: false })
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Something went wrong!' })
  }
})

router.post('/ban', async (req, res, next) => {
  try {
    const { user_id } = req.body;
    await User.findOneAndUpdate({ id: user_id }, { isBanned: false })
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Something went wrong!' })
  }
})

router.post('/unban', async (req, res, next) => {
  try {
    const { user_id } = req.body;
    await User.findOneAndUpdate({ id: user_id }, { isBanned: false })
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Something went wrong!' })
  }
})
//

router.post('/pic', upload.single("fileToUpload"), async (req, res, next) => {
  if (req.file.mimetype == 'image/png' || req.file.mimetype == 'image/jpeg') {
    //we essentially override profile pic if uploaded again! 
    User.findOneAndUpdate({ id: req.user.id }, { profilePic: req.file.filename }).then(result => {
      return res.send(200).send({
        message: 'profile pic uploaded successfully'
      })
    }).catch(e => {
      console.error(e)
      return res.status(500).send({ message: 'Something went wrong!' })
    })
  } else {
    return res.status(400).send({
      message: 'invalid image type!'
    })
  }
})

//download image
router.get('/pic/:name', async (req, res, next) => {
  try {
    const url = dbConfig.url;
    const mongoClient = new MongoClient(url);
    await mongoClient.connect();

    const database = mongoClient.db(dbConfig.db);
    const bucket = new GridFSBucket(database, {
      bucketName: dbConfig.bucket,
    });

    let downloadStream = bucket.openDownloadStreamByName(req.params.name);

    downloadStream.on("data", function (data) {
      return res.status(200).write(data);
    });

    downloadStream.on("error", function (err) {
      return res.status(404).send({ message: "Cannot download the Image!" });
    });

    downloadStream.on("end", () => {
      return res.end();
    });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
})
const { getRandomChoice } = require('../helpers/utility')

router.get('/developer', async (req, res, next) => {
  try {
    // todo
    //filter of rating, city,langugae preference,

    const devs = await User.find({
      type: 'developer',
      isVerified: true,
      isBanned: false,
      deletedAt: null
    })
    //todo:pagination
    const repsonseData = devs.map(elt => {
      const { username, profilePic, resume, city, state, country, shortSummary, title, projectsWorked, projectsDelivered } = elt;
      return {
        username, profilePic, resume, city, state, country, shortSummary, title, projectsWorked, projectsDelivered
      }
    })

    const profilePics = ['profile-dummy.png', 'girl2.jpg', 'female.jpg', 'mat.jpg']
    const usernames = ['dilip98914', 'tony_s', 'peggy118', 'kate', 'mat_murdock']
    const cities = ['delhi', 'florida', 'mumabi', 'japan', 'germany']
    const countries = ['india', 'us', 'japan', 'uk']
    const states = ['delhi', 'florida', 'mumabi', 'japan', 'germany']
    const shortSummaries = ['I am a web developer', 'I am a designer', 'I am a indie dev', 'I am a hitman', 'I am a superhero', 'I am a model']
    const titles = ['web developer', 'designer', 'indie dev', 'hitman', 'superhero', 'model']
    const delivered = ['23', '34', '89', '90', '10', '1', '0']

    const dummtData = [], dummyLength = 10;
    for (let i = 0; i < dummyLength; i++) {
      dummtData.push({
        username: getRandomChoice(usernames),
        profilePic: getRandomChoice(profilePics),
        state: getRandomChoice(states),
        country: getRandomChoice(countries),
        shortSummary: getRandomChoice(shortSummaries),
        title: getRandomChoice(titles),
        projectsDelivered: getRandomChoice(delivered)
      })
    }


    return res.status(200).send({
      data: dummtData,//repsonseData,
      message: 'developers fetched successfully!'
    })
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Something went wrong!' })
  }
})


module.exports = router;