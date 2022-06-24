const express = require('express');
const router = express.Router();
const user = require('../app/models/user');
const authController = require('../app/controllers/authController');

router.get('/login', authController.index);
router.get('/register', authController.register);

module.exports = router;