const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Project = require('../models/project')
const Joi = require('joi');
const upload = require('../middlewares/multer')
const MongoClient = require("mongodb").MongoClient;
const GridFSBucket = require("mongodb").GridFSBucket;
const dbConfig = require("../config/key");
const ProjectRequest = require('../models/projectRequest');

router.post('/', async (req, res, next) => {
  const { title, delete_on, image, budget, deadline } = req.body;
  const uploader_user_id = req.user.id
  //todo: fetch client_company_id
  //todo: handle image later,also image is not necessary
  Project.create({
    title, budget, deadline,
    delete_on, uploader_user_id
  }).then(async r => {
    const uploader = await User.findOne({
      id: r.uploader_user_id
    })

    //send notification to project uploader 
    await sendMail({
      email: uploader.email,
      subject: 'A New Project Created!',
      html: `
            described as:-
              Title: <span>${title}</span>
              Budget: <span>${budget}</span>
              Deadline: <span>${deadline}</span>
              Will Delete on: <span>${delete_on}</span>
            Regards
            <strong>GigsChad</strong>
            `})


    return res.status(200).send({
      message: 'project created successfully!',
      data: r
    })
  }).catch(err => {
    console.error(err)
    return INTERNAL_SERVER_ERROR()
  })
})

router.get('/', async (req, res, next) => {
  //todo : only send required columns
  const { project_id } = req.query;
  if (project_id) {
    Project.findOne({
      id: project_id
    }).then(r => {
      return res.status(200).send({
        message: 'project fetched successfully!',
        data: r
      })
    }).catch(err => {
      console.error(err)
      return INTERNAL_SERVER_ERROR()
    })

  } else {
    Project.find({}).then(r => {
      return res.status(200).send({
        message: 'project fetched successfully!',
        data: r
      })
    }).catch(err => {
      console.error(err)
      return INTERNAL_SERVER_ERROR()
    })
  }
})

router.post('/request', async (req, res, next) => {
  //todo : only send required columns
  const { project_id, amountProposed, type, deadline } = req.query;
  ProjectRequest.create({
    user_id: req.user.id,
    project_id, amountProposed, type, deadline
  }).then(async r => {

    const project = await Project.findOne({ id: project_id })
    const uploader = await User.findOne({
      id: project.uploader_user_id
    })
    const requestRaisedBy = await User.findOne({
      id: r.user_id
    })

    //send notification to project uploader
    await sendMail({
      email: uploader.email,
      subject: 'A New Bid Request Raised!',
      html: `
        A New Bid Request Raised!
        By : ${requestRaisedBy.username}
        for the amount: ${amountProposed}
        Regards
        <strong>GigsChad</strong>
      `
    })

    return res.status(200).send({
      message: 'project request created successfully!',
      data: r
    })
  }).catch(err => {
    console.error(err)
    return INTERNAL_SERVER_ERROR()
  })
})

router.get('/request', async (req, res, next) => {
  //todo : only send required columns
  const { project_id, projectRequest_id } = req.query;
  if (project_id) {//fetch all project request for that project
    ProjectRequest.find({
      project_id
    }).then(r => {
      return res.status(200).send({
        message: 'project request fetched successfully!',
        data: r
      })
    }).catch(err => {
      console.error(err)
      return INTERNAL_SERVER_ERROR()
    })
  } else if (projectRequest_id) {//fetch project request detail
    ProjectRequest.find({
      id: projectRequest_id
    }).then(r => {
      return res.status(200).send({
        message: 'project request fetched successfully!',
        data: r
      })
    }).catch(err => {
      console.error(err)
      return INTERNAL_SERVER_ERROR()
    })
  }
})

router.put('/request', async (req, res, next) => {
  //this will be done by project uploader
  const { projectRequest_id, status } = req.query;
  ProjectRequest.update({ id: projectRequest_id }, {
    status
  }).then(async r => {
    //notify requester that his/her request is accepted or rejected
    const requestRaisedBy = await User.findOne({
      id: r.user_id
    })
    await sendMail({
      email: requestRaisedBy.email,
      subject: 'Your Bid Request is Updated!',
      html: `
        For the amount: ${r.amountProposed}
        Your Bid Request is : ${status}
        Regards
        <strong>GigsChad</strong>
      `
    })

    return res.status(200).send({
      message: 'project request updated successfully!',
    })
  }).catch(err => {
    console.error(err)
    return INTERNAL_SERVER_ERROR()
  })
})

module.exports = router;
