var loaithuocDB = require('../../models/loaithuoc');

module.exports.loaithuocList = function (req, res) {
    loaithuocDB.find({},function (err, data) {
        if(!err)
            res.render('admin/loaithuocList', {title : 'Danh sach loai thuoc ', tag : 'loaithuoc' ,loaithuocs : data});
        else console.log('BUG');
    });
};

// show ra trang add banh an
module.exports.addLoaithuoc = function (req, res) {
    res.render('admin/addLoaithuoc', {title : 'Them loai thuoc ', tag : 'loaithuoc'});
};


module.exports.completeAddLoaithuoc = function (req, res) {
    var newBenhAn = new loaithuocDB({
        maT: req.body.MaT,
        Ten :req.body.name,
        Soluong : req.body.quantity,
        giathanh : req.body.price,
    });

    newBenhAn.save(function (err, location) {
        if (err){
            res.render('admin/addLoaithuoc?'+ err, {title: 'Them benh nhan', message:  'fail: ' + err, tag : 'benhnhan'});
        } else {
            res.render('admin/addLoaithuoc', {title: 'Them benh nhan', message: 'success', tag : 'benhnhan'});
        }
    });
    // res.redirect('/admin/victim?' + message);
};

module.exports.deleteLoaithuoc = function(req, res){
    loaithuocDB.remove({_id : req.params._id}, function (err) {
        var message ;
        if(err){
            message = err;
        } else  {
            message = 'success';
        };

        res.redirect('/admin/loaithuoc?' + message);

    });
};