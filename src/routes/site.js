var express = require('express');
const route = require('.');
const router = express.Router();

const sitecontroller = require('../app/controllers/siteController');

router.get('/search', sitecontroller.search);
router.get('/', sitecontroller.index);

module.exports = router;