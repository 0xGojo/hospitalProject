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
        user.find({username : req.body.uname}, function (err, data) {
            var err;
            if (!err) {

                bcrypt.compare("bacon", data.password, function(err, res) {
                    console.log(res);
                    debugger
                    if(!err && res){
                        req.session.userId = user._id;
                        return res.redirect('/');
                    } else {
                        err = "failed to login"
                    }
                });

            } else {
                err = new Error('Wrong username or password.' + req.body.uname +  req.body.psw);
            }
            res.render('admin/login', { title: 'login', message :err });
        });
};