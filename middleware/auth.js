// json webtoken for user authentication
const jwt = require('jsonwebtoken');
// access of secret
const config = require('config');

// middleware function
module.exports = function(req, res, next) {
    //Get token from header
    const token = req.header('x-auth-token');
    
    // Check if there isnt any token
    if(!token) {
        return res.status(401).json({msg: 'No token, No authorization.'});      
    }

    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));

        // setting the user by unique token given 
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({msg: 'Token is not valid.'});
    }
}