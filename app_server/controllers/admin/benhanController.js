var benhanDB = require('../../models/benhan');

module.exports.benhanList = function (req, res) {
    benhanDB.find({},function (err, data) {
        if(!err)
            res.render('admin/benhanList', {title : 'Danh sach benh an', tag : 'benhan' ,benhans : data});
        else console.log('BUG');
    });
};

// show ra trang add banh an
module.exports.addBenhan = function (req, res) {
    res.render('admin/addBenhan', {title : 'Them benh an', tag : 'benhan'});
};


module.exports.completeAddBenhAn = function (req, res) {
    var newBenhAn = new benhanDB({
        maBA : req.body.MaBN,
        maBN : req.body.MaBN,
        ngaynhapvien : req.body.ngaynhap,
        ngayxuatvien : req.body.ngayxuat,
        loaibenh : req.body.loaibenh,
        khoa : req.body.khoa,
        giuongnam : req.body.giuong,
        bacsichuatri : req.body.bacsi,
        ytatheodoi : req.body.yta,
    });

    newBenhAn.save(function (err, location) {
        if (err){
            res.render('admin/addBenhan?'+ err, {title: 'Them benh nhan', message:  'fail: ' + err, tag : 'benhnhan'});
        } else {
            res.render('admin/addBenhan', {title: 'Them benh nhan', message: 'success', tag : 'benhnhan'});
        }
    });
    // res.redirect('/admin/victim?' + message);
};

module.exports.deleteBenhan = function(req, res){
    benhanDB.remove({_id : req.params._id}, function (err) {
        var message ;
        if(err){
            message = err;
        } else  {
            message = 'success';
        };

        res.redirect('/admin/benhan?' + message);

    });
};