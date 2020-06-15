const express = require('express');
const router = express.Router();

// using GET method, getting data

//  @route      GET api/auth
//  @desc       GET LOGGED IN USER
//  @access     Private
router.get('/', (req, res) =>{
    res.send("GET LOGGED IN USER")
});

// using POST method, getting data

//  @route      POST api/auth
//  @desc       AUTH USER & GET TOKEN
//  @access     Public
router.post('/', (req, res) =>{
    res.send("LOG IN USER")
});

module.exports = router;