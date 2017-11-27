var contactDB = require('../models/contact')

module.exports.contact = function(req, res){
    res.render('contact', { title: 'Lien he' });
};

module.exports.addContact = function(req, res){
   var newContact = new contactDB({
        // _id : ,
        name: req.body.name,
        email: req.body.mail,
        subject: req.body.subject,
        message: req.body.message,
    });

    newContact.save(function (err, location) {
        if (err){
            res.render('contact', {title: 'Lien he', message:  'fail: ' + err});
        } else {
            res.render('contact', {title: 'Lien he', message: 'success'})
        }
    });
};
