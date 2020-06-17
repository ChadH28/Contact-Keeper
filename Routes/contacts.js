// CRUD Route - Create Read Update Delete

const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User')
const Contact = require('../models/Contacts')

// using GET method

//  @route      GET api/contacts
//  @desc       GET ALL USERS CONTACTS
//  @access     Private
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({user: req.user.id}).sort({date: -1});
        res.json(contacts);
    } catch (error) {
        console.error(err.message);
        res.status(500).send('SERVER ERROR.');
    }
});

module.exports = router;

// using POST method

//  @route      POST api/contacts
//  @desc       ADD NEW CONTACT
//  @access     Private
router.post('/', [
    auth, [
        check('name', 'Name is required.')
        .not()
        .isEmpty()
    ]
],
 async (req, res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array() });
    }

    const {name, email, phone, type} = req.body;

    try {
        const newContact = new Contact({
            name,
            email,
            phone,
            type,
            user: req.user.id
        });

        const contact = await newContact.save();
    } catch (error) {
        console.error(error.message);
        res.status(500).send('SERVER ERROR.')
    }
 }
);

// using PUT method (for updates and deltes)

//  @route      PUT api/contacts/:id
//  @desc       UPDATE CONTACT
//  @access     Private
router.put('/:id', auth, async (req, res) =>{
    const {name, email, phone, type} = req.body;

    // build contact object
    const contactFields = {};
    if(name) contactFields.name = name;
    if(email) contactFields.email = email;
    if(phone) contactFields.phone = phone;
    if(type) contactFields.type = type;

    try {
        let contact = await Contact.findById(req.params.id);
        
        if(!contact) return res.status(404).json({msg: 'Contact not found.'})

        // Making sure user owns contact
        if(contact.user.toString() !== req.user.id) {
            return res.status(404).json({msg: 'Not Authorized'});
        }

        contact = await Contact.findByIdAndUpdate(req.params.id,
            {$set: contactFields},
            {new: true});

            res.json(contact);
    } catch (err) {
        console.error(error.message);
        res.status(500).send('SERVER ERROR.') 
    }
});

// using PUT method (for updates and deltes)

//  @route      DELETE api/contacts/:id
//  @desc       DELETE CONTACT
//  @access     Private
router.delete('/:id', auth, async (req, res) =>{
    try {
        let contact = await Contact.findById(req.params.id);
        
        if(!contact) return res.status(404).json({msg: 'Contact not found.'})

        // Making sure user owns contact
        if(contact.user.toString() !== req.user.id) {
            return res.status(404).json({msg: 'Not Authorized'});
        }

        await Contact.findByIdAndRemove(req.params.id);


        res.json({msg: 'Contact Removed.'});
        
    } catch (err) {
        console.error(error.message);
        res.status(500).send('SERVER ERROR.');
    }
});

module.exports = router;