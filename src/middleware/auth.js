const jwt = require('jsonwebtoken');
const config = require('../config/global');
const helper = require('../helper/index');

module.exports = {
    verifyToken : (req, res, next) => {
        const accessToken = req.headers.authorization
        try {
            const decoded = jwt.verify(accessToken, config.secretKey)
            req.decodedToken = decoded
            next()
        } catch (error) {
            console.log(error.name)
            if (error.name === 'TokenExpiredError'){
                return helper.response(res, null, 'Token expired', 401)
            }else if (error.name === 'JsonWebTokenError') {
                return helper.response(res, null, 'Invalid Token', 401)
            }else {
                return helper.response(res, null, 'Invalid user Token',401 )
            }
        }
    }
}