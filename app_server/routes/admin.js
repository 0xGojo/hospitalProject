var express = require('express');
var router = express.Router();

var adminIndex  = require('../controllers/admin/adminController');
var adminVictimsList = require('../controllers/admin/victimsListController');
var adminBenhan = require('../controllers/admin/benhanController');
var adminDichvu = require('../controllers/admin/dichvuController');
var adminToathuoc = require('../controllers/admin/toathuocController');
var adminLoaithuoc = require('../controllers/admin/loaithuocController');
var adminVienphi = require('../controllers/admin/vienphiController');
var adminContacts = require('../controllers/admin/contactController')
/* GET users listing. */
router.get('/', requiresLogin, adminIndex.index);
// get victims inform table
router.get('/benhnhan', requiresLogin, adminVictimsList.victimList);
router.get('/addBenhnhan', requiresLogin, adminVictimsList.addVictimList);
router.get('/benhnhan/:_id', requiresLogin, adminVictimsList.deleteVictim);
router.post('/addBenhnhan', requiresLogin, adminVictimsList.completeAddVictim);

router.get('/benhan', requiresLogin, adminBenhan.benhanList);
router.get('/addBenhan', requiresLogin, adminBenhan.addBenhan);
router.get('/benhan/:_id', requiresLogin, adminBenhan.deleteBenhan);
router.post('/addBenhan', requiresLogin, adminBenhan.completeAddBenhAn);

router.get('/dichvu', requiresLogin, adminDichvu.dichvuList);
router.get('/addDichvu', requiresLogin, adminDichvu.addDichvu);
router.get('/dichvu/:_id', requiresLogin, adminDichvu.deleteDichvu);
router.post('/addDichvu', requiresLogin, adminDichvu.completeAddDichvu);

router.get('/toathuoc',  requiresLogin,adminToathuoc.toathuocList);
router.get('/addToathuoc', requiresLogin, adminToathuoc.addToathuoc);
router.get('/toathuoc/:_id', requiresLogin, adminToathuoc.deleteToathuoc);
router.post('/addToathuoc', requiresLogin, adminToathuoc.completeAddToathuoc);

router.get('/loaithuoc', requiresLogin, adminLoaithuoc.loaithuocList);
router.get('/addLoaithuoc', requiresLogin, adminLoaithuoc.addLoaithuoc);
router.get('/loaithuoc/:_id' ,requiresLogin, adminLoaithuoc.deleteLoaithuoc);
router.post('/addLoaithuoc', requiresLogin, adminLoaithuoc.completeAddLoaithuoc);

router.get('/vienphi', requiresLogin, adminVienphi.vienphiList);
router.get('/addVienphi', requiresLogin, adminVienphi.addVienphi);
router.get('/vienphi/:_id', requiresLogin, adminVienphi.deleteVienphi);
router.post('/addVienphi', requiresLogin, adminVienphi.completeAddVienphi);

router.get('/contact', requiresLogin, adminContacts.listContacts);
router.get('/contact/:_id', requiresLogin, adminContacts.deleteContact);

router.get('/login', adminIndex.login);
router.post('/checkAuthor', adminIndex.checkLogin)
router.get('/logout', function(req, res, next) {
    if (req.session) {
        // delete session object
        req.session.destroy(function(err) {
            if(err) {
                return next(err);
            } else {
                return res.redirect('/admin/login');
            }
        });
    }
});
module.exports = router;


function requiresLogin(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    } else {
        console.log(req.session);
        console.log(req.session.userId);
        // var message = "you must be logged in";
        res.redirect('/admin/login');
    }
}