'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
const logger = require('./helpers/logger')
const chalk = require('ansi-colors');
const path = require('path')
const config = require('./config/key');
const session = require('express-session')
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI, { useNewUrlParser: true }).then(() => {
  console.log('DB connected!');
}).catch(err => console.log(err));

require('dotenv').config({ path: './variables.env' });
app.use(bodyParser.json({ limit: "50mb", strict: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(expressValidator());
app.use(cors());

app.set('view engine', 'pug')
app.set('views', 'views')

app.use(express.json({}));
logger.debug(process.env.JWT_SECRET)
app.use(express.static(path.join(process.cwd(), '/public')));
app.use(session({
  secret: process.env.session_secret,
  resave: true,
  saveUninitialized: false
}))

require('./routes')(app)

app.listen(process.env.PORT, () => logger.custom(chalk.green.bold(`Listening on port ${process.env.PORT}...`)));

module.exports = app;
