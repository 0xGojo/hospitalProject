var express = require('express');
var router = express.Router();
var adminIndex  = require('../controllers/admin/adminController');
var adminVictimsList = require('../controllers/admin/victimsListController');
var adminContacts = require('../controllers/admin/contactController')
/* GET users listing. */
router.get('/', adminIndex.index);
// get victims inform table
router.get('/victims', adminVictimsList.victimList);

router.get('/adminContact', adminContacts.listContacts)
router.get('/adminContact/:_id', adminContacts.deleteContact)
module.exports = router;
