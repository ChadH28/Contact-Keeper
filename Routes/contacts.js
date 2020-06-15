// CRUD Route - Create Read Update Delete

const express = require('express');
const router = express.Router();

// using GET method

//  @route      GET api/contacts
//  @desc       GET ALL USERS CONTACTS
//  @access     Private
router.get('/', (req, res) =>{
    res.send("GET ALL CONTACTS")
});

module.exports = router;

// using POST method

//  @route      POST api/contacts
//  @desc       ADD NEW CONTACT
//  @access     Private
router.post('/', (req, res) =>{
    res.send("ADD CONTACT")
});

// using PUT method (for updates and deltes)

//  @route      PUT api/contacts/:id
//  @desc       UPDATE CONTACT
//  @access     Private
router.put('/:id', (req, res) =>{
    res.send("UPDATE CONTACT")
});

// using PUT method (for updates and deltes)

//  @route      DELETE api/contacts/:id
//  @desc       DELETE CONTACT
//  @access     Private
router.delete('/:id', (req, res) =>{
    res.send("DELETE CONTACT")
});

module.exports = router;