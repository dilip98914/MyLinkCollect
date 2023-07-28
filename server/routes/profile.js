const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Joi = require('joi');
const upload = require('../middlewares/multer')
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;
const dbConfig = require("../config/key");
const { authenticateSession } = require('../middlewares/auth')
const { sendMail } = require('../services/email')
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
    return res.status(200).send({
      message: 'Updated Profile Successfully!',
      data: result
    })
  }).catch(err => {
    console.error(err)
    res.status(500).send({ message: "Something went wrong!" })
  })
})


//it is accessble for logged in user only
router.get('/', async (req, res, next) => {
  console.log('rrrr', req.user)
  User.findOne({ id: req.user.userId }).then(result => {
    if (result.isBanned || result.deletedAt != null) {
      return res.status(401).send({ message: "It seems you are temporarily blocked or your account is deleted!" })
    }
    const { email, fullName, username, address, password, profilePic,
      resume, city, state, country, dob, isVerified, rating,
      shortSummary, title, accountNumber, ifscCode, upi_ids } = result;

    return res.status(200).send({
      message: 'Profile fetched Successfully!',
      data: {
        email: 'dg@gmail.com',
        fullName: 'dilip gupta',
        username: 'dgbouncer',
        address: '555/5 ward no-3 mehrauli, New Delhi-110030',
        // password:'',//todo change password should be different and via email
        profilePic: 'mat.jpg',
        // resume, todo
        city: 'delhi',
        state: 'delhi',
        country: 'india',
        dob: '12/10/1997',
        isVerified: false,
        rating: 3,
        shortSumm: `
        Experienced Backend Engineer with a demonstrated history of working in the information technology and services industry.
        Skilled in node.js, postgreSQL, ArangoDB, mongodb, rabbitmq and Nginx.
        Worked on various fintech products like galaxycard(currently working) Kashware(fintech), Hoppy(vehicle service booking application) etc. 
       Strong engineering professional with a Bachelor of Technology - BTech focused in computer science and engineering from Maharaja Surajmal Institute Of Technology. 
        `,
        title: 'Backend developer',
        accountNumber: '8989095634',
        ifscCode: 'IDIBM089',
        upi_ids: ['dilip9891@ybl', '89789@paytm']
      }
    })
  }).catch(err => {
    console.error(err)
    return res.status(500).send({ message: "Something went wrong!" })
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
      return res.status(200).send({
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

router.get('/verify/request', async (req, res, next) => {
  try {

    const found = await verifyRequest.findOne({
      request_user_id: req.user.userId
    })

    if (!found) {
      // await verifyRequest.create({
      //   request_user_id: req.user.userId,
      //   status: 'pending'
      // })
      //send admin 
      await sendMail({
        email: process.env.admin_mail,
        subject: 'A New verify Request is Raised!',
        html: `
          A New verify Request is Raised!
          By : ${req.user.userEmail}
          Regards
          <strong>GigsChad</strong>
        `
      })
      return res.status(200).send({ message: 'Verification Request is successfully raised!', data: { new: true } })
    }
    return res.status(200).send({ message: 'Verification Request is already raised!', data: { new: false } })
  } catch (err) {
    console.error(err)
    return res.status(500).send({ message: 'Something went wrong!' })
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
      return res.status(200).send({
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
const { getRandomChoice } = require('../helpers/utility');
const verifyRequest = require('../models/verifyRequest');

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