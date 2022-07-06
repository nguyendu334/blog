var express = require('express');
var router = express.Router();
const path = require('path');
var User = require('.././app/models/user');
const authController = require('../app/controllers/authController');


// GET route for reading data
router.post('/login', authController.login);
router.get('/login',(req, res) => {
    res.render('login/login')
});
router.post('/register', authController.register);
router.get('/register',(req, res) => {
    res.render('login/register')
})

module.exports = router;