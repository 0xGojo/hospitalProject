/* GET home page */
var index = require('../routes/index');

module.exports.index = function(req, res){
    res.render('index', { title: 'Benh vien quan Lien Chieu' });
};

module.exports.contact = function(req, res){
    res.render('contact', { title: 'Lien he' });
};