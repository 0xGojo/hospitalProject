var contactDB = require('../../models/contact');

module.exports.listContacts = function (req, res) {
    contactDB.find({},function (err, data) {
        if(!err)
            res.render('admin/contactInfo', {title : 'Danh sach gop y', tag : 'contact' ,contacts : data});
        else console.log('BUG');
    });
};

module.exports.deleteContact = function(req, res){
    contactDB.remove({_id : req.params._id}, function (err) {
        var message ;
        if(err){
            message = err;
        } else  {
            message = 'success';
        };
        contactDB.find({},function (err, data) {
            if (!err)
                res.redirect('/admin/adminContact');
            else console.log('BUG');
        });
    });
};