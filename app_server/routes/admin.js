var express = require('express');
var router = express.Router();
var adminIndex  = require('../controllers/admin/adminController');
var adminVictimsList = require('../controllers/admin/victimsListController');
var adminBenhan = require('../controllers/admin/benhanController');
var adminContacts = require('../controllers/admin/contactController')
/* GET users listing. */
router.get('/', adminIndex.index);
// get victims inform table
router.get('/benhnhan', adminVictimsList.victimList);
router.get('/addBenhnhan', adminVictimsList.addVictimList);
router.get('/benhnhan/:_id', adminVictimsList.deleteVictim);
router.post('/addBenhnhan', adminVictimsList.completeAddVictim);


router.get('/benhan', adminBenhan.benhanList);
router.get('/addBenhan', adminBenhan.addBenhan);
router.get('/benhan/:_id', adminBenhan.deleteBenhan);
router.post('/addBenhan', adminBenhan.completeAddBenhAn);

router.get('/contact', adminContacts.listContacts)
router.get('/contact/:_id', adminContacts.deleteContact)
module.exports = router;
