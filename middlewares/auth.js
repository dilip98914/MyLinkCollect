function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error', ['you are not authenticated!'])
    res.redirect('/user/login');
  }
}

function notLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
  } else {
    req.flash('error', ['you are already logged In!'])
    res.redirect('/user/dashboard');
  }
}

module.exports = { isLoggedIn, notLoggedIn }