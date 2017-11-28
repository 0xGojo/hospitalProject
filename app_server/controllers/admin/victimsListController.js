var benhnhanDB = require('../../models/benhnhan');

module.exports.victimList = function (req, res) {
    benhnhanDB.find({},function (err, data) {
        if(!err)
            res.render('admin/victimList', {title : 'Danh sach benh nhan', tag : 'benhnhan' ,benhnhans : data});
        else console.log('BUG');
    });
};

module.exports.addVictimList = function (req, res) {
    res.render('admin/addVictim', {title : 'Them benh nhan', tag : 'benhnhan'});
};


module.exports.completeAddVictim = function (req, res) {
    var newVictim = new benhnhanDB({
        maBN : req.body.MaBN,
        maBA : req.body.MaBA,
        tenBN: req.body.name,
        ngaysinh : req.body.birthday,
        diachi : req.body.address,
        gioitinh : req.body.gender,
        nghenghiep : req.body.job,
        dienthoai : req.body.phonenumber,
    });

    newVictim.save(function (err, location) {
        if (err){
            res.render('admin/addVictim?'+ err, {title: 'Them benh nhan', message:  'fail: ' + err, tag : 'benhnhan'});
        } else {
            res.render('admin/addVictim', {title: 'Them benh nhan', message: 'success', tag : 'benhnhan'});
        }
    });
    // res.redirect('/admin/victim?' + message);
};

module.exports.deleteVictim = function(req, res){
    benhnhanDB.remove({_id : req.params._id}, function (err) {
        var message ;
        if(err){
            message = err;
        } else  {
            message = 'success';
        };

        res.redirect('/admin/benhnhan?' + message);

    });
};