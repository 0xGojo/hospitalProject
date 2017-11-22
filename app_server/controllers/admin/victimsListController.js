var mongoose = require('mongoose');

module.exports.victimList = function (req, res) {
    mongoose.model('victims').find(function (err, data) {
        if(!err)
            res.render('admin/victimList', {title : 'Danh sach benh nhan', victimsData : data});
        else console.log('BUG');
    })
};