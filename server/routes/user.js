const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const AdminUser = require('../models/adminUser')
const LoginLogs = require('../models/loginLogs')

// refer this while implementing auth on frontend 
// https://www.freecodecamp.org/news/how-to-build-a-fullstack-authentication-system-with-react-express-mongodb-heroku-and-netlify/

//todo:google login
router.post('/register', async (req, res, next) => {
  console.log(req.body,'req.body')
  const { email, password, firstName, lastName, type } = req.body
  const found = await User.findOne({ email });
  if (found) return res.status(400).send({ message: "User already exists!, please try different email" })

  bcrypt.hash(password, 10).then((hashedPassword) => {
    const user = new User({
      email: email,
      password: hashedPassword,
      fullName: `${firstName} ${lastName}`,
      type
    });
    user.save().then(async (result) => {
      await LoginLogs.create({
        user_id: user.id,
      })
      res.status(201).send({
        message: "User Created Successfully",
        result,
      });
    }).catch((error) => {
      res.status(500).send({
        message: "Error creating user",
        error,
      });
    });
  }).catch((e) => {
    res.status(500).send({
      message: "Password was not hashed successfully",
      e,
    });
  });
})

router.post('/login', async (req, res, next) => {
  const { email, password } = req.body

  User.findOne({ email }).then((user) => {
    if (user.deletedAt != null) {
      return res.status(400).send({
        message: 'your account was deleted!'
      })
    }

    bcrypt.compare(password, user.password).then(async (passwordCheck) => {
      if (!passwordCheck) {
        return res.status(400).send({
          message: "Passwords does not match",
          error,
        });
      }
      const token = jwt.sign(
        {
          userId: user.id,
          userEmail: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRY }
      );
      //todo:add more login details like location,device etc
      await LoginLogs.create({
        user_id: user.id,
      })

      res.status(200).send({
        message: "Login Successful",
        email: user.email,
        token,
      });
    }).catch((error) => {
      res.status(400).send({
        message: "Passwords does not match",
        error,
      });
    });
  }).catch((e) => {
    res.status(404).send({
      message: "Email not found",
      e,
    });
  });
})

//register admin would be manual

//login admin
router.post('/login/a', async (req, res, next) => {
  const { email, password, admin_pass } = req.body

  if (admin_pass == process.env.admin_pass) {
    const foundAdmin = await AdminUser.findOne({ email })
    bcrypt.compare(password, foundAdmin.password).then(async passCheck => {
      if (!passCheck) {
        return res.status(401).send({
          message: 'You don\'t have required PASS!'
        })
      }
      const token = await jwt.sign({
        userId: foundAdmin.id,
        userEmail: foundAdmin.email,
      }, process.env.admin_secret, { expiresIn: process.env.ADMIN_EXPIRY })
      //todo:add more login details like location,device etc
      await LoginLogs.create({
        user_id: foundAdmin.id,
      })
      res.status(200).send({
        message: "Login Successful",
        email: foundAdmin.email,
        token,
      });
    })

  } else {
    return res.status(401).send({
      message: 'You don\'t have required PASS!'
    })
  }
})

module.exports = router;