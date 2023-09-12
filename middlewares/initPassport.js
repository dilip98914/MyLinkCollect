const passport = require('passport');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
  const user = await User.findOne({ id });
  done(null, user);
});

passport.use('local.signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function (req, email, password, done) {
  try {
    // req.checkBody('email', 'Invalid email').notEmpty().isEmail();
    // req.checkBody('password', 'Invalid password').notEmpty().isLength({ min: 4 });
    // const errors = req.validationErrors();
    // if (errors) {
    //   const messages = [];
    //   errors.forEach(function (error) {
    //     messages.push(error.msg);
    //   });
    //   return done(null, false, req.flash('error', messages));
    // }
    console.log('aaaaaaaaaaaaaaaaa', email)
    // return;
    User.findOne({ email }).then(user => {
      if (user) {
        return done(null, false, { message: 'Email is already in use.' });
      }
      User.create({
        email,
        password: password
      }).then(result => {
        return done(null, result);
      }).catch(err => console.error('pappppppppppppppp'))
    }).catch(err => console.error('err'))

  } catch (err) {
    console.error('errpaaaaaaappppppp')
    // return done(null, newUser);
  }
}));

// passport.use('local.signin', new LocalStrategy({
//   usernameField: 'email',
//   passwordField: 'password',
//   passReqToCallback: true
// }, async function (req, email, password, done) {
//   req.checkBody('email', 'Invalid email').notEmpty().isEmail();
//   req.checkBody('password', 'Invalid password').notEmpty();
//   const errors = req.validationErrors();
//   if (errors) {
//     const messages = [];
//     errors.forEach(function (error) {
//       messages.push(error.msg);
//     });
//     return done(null, false, req.flash('error', messages));
//   }
//   const user = await User.findOne({ 'email': email })
//   if (!user) {
//     return done(null, false, { message: 'No user found.' });
//   }
//   if (!user.validPassword(password)) {
//     return done(null, false, { message: 'Wrong password.' });
//   }
//   return done(null, user);
// }));