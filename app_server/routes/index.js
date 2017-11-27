var express = require('express');
var router = express.Router();
var home = require('../controllers/home')
var contact = require('../controllers/contactController');
/* GET home page. */
router.get('/', home.index);

router.get('/contact', contact.contact)
router.post('/contact', contact.addContact )

module.exports = router;

