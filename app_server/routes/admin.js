var express = require('express');
var router = express.Router();
var adminIndex  = require('../controllers/admin/adminController');
var adminVictimsList = require('../controllers/admin/victimsListController');
/* GET users listing. */
router.get('/', adminIndex.index);
// get victims inform table
router.get('/victims', adminVictimsList.victimList);

module.exports = router;
