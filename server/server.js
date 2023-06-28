'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
const logger = require('./helpers/logger')
const chalk = require('ansi-colors');
const path = require('path')
const middlewares=require('./middlewares')
const session=require('express-session')
require('./databse')

require('dotenv').config({ path: './variables.env' });
app.use(bodyParser.json({ limit: "50mb", strict: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(expressValidator());
app.use(cors());

app.set('view engine','pug')
app.set('views','views')

app.use(express.json({}));
logger.debug(process.env.JWT_SECRET)
app.use(express.static(path.join(process.cwd(), '/public')));
app.use(session({
  secret:process.env.session_secret,
  resave:true,
  saveUninitialized:false
}))

require('./routes')(app)


app.get('/',middlewares.requireLogin, (req, res) => {
  const payload={
    pageTitle:'Home',
    userLoggedIn:req.session.user,
    userLoggedInJS:JSON.stringify(req.session.user),
  }
  console.log('payload.userLoggedIn',payload.userLoggedIn)
  res.status(200).render('home',payload);
});

app.listen(process.env.PORT, () => logger.custom(chalk.green.bold(`Listening on port ${process.env.PORT}...`)));

module.exports = app;
