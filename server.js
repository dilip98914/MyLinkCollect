'use strict';
require('dotenv').config({ path: './variables.env' });
const express = require('express');
const app = express();
const compression = require('compression'),
  device = require('express-device'),
  helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('./helpers/logger')
const chalk = require('ansi-colors');
const path = require('path')
const config = require('./config/key');
const mongoose = require('mongoose');
const passport = require('passport')
const User = require('./models/user')
var cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const validator = require('express-validator');
const session = require('express-session');
const sqlite = require("better-sqlite3");
var fs = require('fs');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/debug.log', { flags: 'w' });
var log_stdout = process.stdout;

// console.log = function (d) { //
//   log_file.write(util.format(d) + '\n');
//   log_stdout.write(util.format(d) + '\n');
// };

console.error = function (d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

app.use(express.static(path.join(process.cwd(), '/public')));

mongoose.connect(config.mongoURI, { useNewUrlParser: true }).then(() => {
  console.log('DB connected!');
}).catch(err =>
  console.log("err->>>>>>>>>>>>>>>>>>>>..")
);

require('./middlewares/initPassport')

app.use(bodyParser.json({ limit: "50mb", strict: false }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(validator());
app.use(cookieParser());
//todo add mongo store 
app.use(require("express-session")({
  secret: "THIS IS SECRET",
  resave: false,
  saveUninitialized: false
}));

app.use(flash())
app.use(passport.initialize());
app.use(passport.session());

app.use(cors());
app.use(device.capture())
app.use(helmet());
app.use(compression({ level: 9 }))

app.set('view engine', 'ejs')

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
