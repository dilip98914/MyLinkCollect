const jwt = require('jsonwebtoken');
const logger = require('../helpers/logger.js');

exports.authenticateSession = async (req, res, next) => {
  var token = req.body.token || req.params.token || req.headers['x-access-token'] || req.headers['authorization'];
  if (token) {
    console.log('TOKEN-FOUND', token);
    try {
      const decoded = await jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
      req.user = decoded;
      logger.debug(decoded);
      next();
    } catch (error) {
      console.log('TOKEN-AUTHENTICATE-ERROR', error);
      return res.status(403).send({
        success: false,
        message: 'Token Expired'
      });
    }
  } else {
    console.log('TOKEN-NOT-FOUND');
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    });

  }
}
exports.checkAdmin = async (req, res, next) => {
  try {
    if (req.user.type == 'admin') {
      const token = req.user.code;
      //verify using admin secret
      await jwt.verify(token.replace('Bearer ', ''), process.env.admin_secret)


    } else {
      return res.status(403).send({
        success: false,
        message: 'Not Enough permission!'
      });
    }

  } catch (err) {
    console.error(err)
    return res.status(403).send({
      success: false,
      message: 'Not Enough permission!'
    });
  }
}