var express = require('express');
var router = express.Router();
const path = require('path');
var User = require('.././app/models/user');
const authController = require('../app/controllers/authController');


// GET route for reading data
router.get('/login', authController.login);
router.get('/register', authController.register);

module.exports = router;