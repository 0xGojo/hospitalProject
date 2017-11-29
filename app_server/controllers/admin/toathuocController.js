var toathuocDB = require('../../models/toathuoc');

module.exports.toathuocList = function (req, res) {
    toathuocDB.find({},function (err, data) {
        if(!err)
            res.render('admin/toathuocList', {title : 'Danh sach toa thuoc', tag : 'toathuoc' ,toathuocs : data});
        else console.log('BUG');
    });
};

// show ra trang add banh an
module.exports.addToathuoc = function (req, res) {
    res.render('admin/addToathuoc', {title : 'Them toa thuoc', tag : 'toathuoc'});
};


module.exports.completeAddToathuoc = function (req, res) {
    var newBenhAn = new toathuocDB({
        maTT: req.body.MaTT,
        maBN : req.body.MaBN,
        mathuoc : { $push: { scores: { $each:   req.body.MaT } } },
        soluong : { $push: { scores: { $each:   req.body.quantity } } },
    });

    newBenhAn.save(function (err, location) {
        if (err){
            res.render('admin/addToathuoc?'+ err, {title: 'Them toa thuoc', message:  'fail: ' + err, tag : 'toathuoc'});
        } else {
            res.render('admin/addToathuoc', {title: 'Them toa thuoc', message: 'success', tag : 'toathuoc'});
        }
    });
    // res.redirect('/admin/victim?' + message);
};

module.exports.deleteToathuoc = function(req, res){
    toathuocDB.remove({_id : req.params._id}, function (err) {
        var message ;
        if(err){
            message = err;
        } else  {
            message = 'success';
        };

        res.redirect('/admin/toathuoc?' + message);

    });
};