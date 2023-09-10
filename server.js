'use strict';
require('dotenv').config({ path: './variables.env' });
const express = require('express');
const app = express();
const compression = require('compression'),
  device = require('express-device'),
  helmet = require('helmet');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');
const logger = require('./helpers/logger')
const chalk = require('ansi-colors');
const path = require('path')
const config = require('./config/key');
const session = require('express-session')
const mongoose = require('mongoose');
app.use(express.static(path.join(process.cwd(), '/public')));

mongoose.connect(config.mongoURI, { useNewUrlParser: true }).then(() => {
  console.log('DB connected!', config.db);
}).catch(err => console.log(err));

app.use(bodyParser.json({ limit: "50mb", strict: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(expressValidator());
app.use(cors());
app.use(device.capture())
app.use(helmet());
app.use(compression({ level: 9 }))

app.set('view engine', 'ejs')

app.use(express.json({}));
logger.debug(process.env.JWT_SECRET)
app.use(session({
  secret: process.env.session_secret,
  resave: true,
  saveUninitialized: false
}))


//todo:sitemap route
// https://www.xml-sitemaps.com/
// app.disable('x-powered-by')

require('./routes')(app)

//default route for health check
app.get('/', (req, res) => {
  res.status(200)
    .send(`
      <br><h1>Giggs Chad -${process.env.NODE_ENV} server </h1>
    `).end()
});

// app.use(function(err,req,res,next){
//   if(req.headers.host &&
//       ['PRODUCTION','TEST'].indexOf(process.env.NODE_ENV)!=-1
//     ){
//       console.logStash(
//         LOGG


//       )
//     }
// })


app.listen(process.env.PORT, () => logger.custom(chalk.green.bold(`Listening on port ${process.env.PORT}...`)));

module.exports = app;
