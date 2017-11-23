var express = require('express');
var router = express.Router();
var home = require('../controllers/home');
/* GET home page. */
router.get('/', home.index);

router.get('/contact', home.contact)
module.exports = router;
