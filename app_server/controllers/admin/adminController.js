/* GET home page */
// var index = require('../routes/index');
// var vci
module.exports.index = function(req, res){
    res.render('admin/index', { title: 'admin site' });
};

