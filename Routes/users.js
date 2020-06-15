const express = require('express');
const router = express.Router();

// using post method, submitting data

//  @route      POST api/users
//  @desc       Register a user
//  @access     Public
router.post('/', (req, res) =>{
    res.send("REGISTER A USER")
});

module.exports = router;