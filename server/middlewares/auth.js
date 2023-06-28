const jwt = require('jsonwebtoken');
const logger = require('../helpers/logger.js');

exports.authenticateSession = async (req, res, next) => {
    var token = req.body.token || req.params.token || req.headers['x-access-token'] || req.headers['authorization'];
    if (token) {
        console.log('TOKEN-FOUND',token);
        try {
            const decoded = await jwt.verify(token, process.env.JWT_SECRET);
            logger.debug(decoded);
            next();
        } catch (error) {
            console.log('TOKEN-AUTHENTICATE-ERROR');
            return res.status(403).send({
                status_code: 403,
                success: false,
                message: 'Token Expired'
            });
        }
    } else {
        console.log('TOKEN-NOT-FOUND');
        return res.send({
            status_code: 403,
            success: false,
            message: 'No token provided.'
        });

    }
}

exports.createToken = async (userDetails) =>{
    logger.debug(userDetails)
    return jwt.sign({id:userDetails.id,email:userDetails.email,usertype:userDetails.usertype}, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 * 15 });
}