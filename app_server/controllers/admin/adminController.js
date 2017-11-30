/* GET home page */
var user = require('../../models/user');
var bcrypt = require('bcrypt-nodejs')
module.exports.index = function(req, res){
    res.render('admin/index', { title: 'admin site', tag: 'admin' });
};

module.exports.login = function(req, res){
    res.render('admin/login', { title: 'login' });
};

module.exports.checkLogin = function(req, res){
        user.findOne({username : req.body.uname}).exec(function (err, data) {
            console.log(data);
            var message;
            if (!err && data) {
                // var password = req.body.psw;
                // bcrypt.compare( password, data.password, function(err, res) {
                //     if(!err){
                        console.log(data._id);
                        req.session.userId = data._id;
                        return res.redirect('/admin');
                    // } else {
                    //     message = err;
                    // }
                // });

            } else {
                message = new Error('Wrong username or password.' + req.body.uname +  req.body.psw);
            }
            // res.render('admin/login', { title: 'login', message :message });
                console.log(data._id);
                res.redirect('/admin/login');
        });
};