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
    // req.flash('error', ['you are already logged In!'])
    res.redirect('/user/dashboard');
  }
}

function isAuthor(user, collection) {
  if (!user || !collection) return false
  if (collection.user_id == user.id) return true
  return false
}

module.exports = { isLoggedIn, notLoggedIn, isAuthor }