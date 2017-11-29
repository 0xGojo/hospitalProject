var vienphiDB = require('../../models/vienphi');

module.exports.vienphiList = function (req, res) {
    vienphiDB.find({},function (err, data) {
        if(!err)
            res.render('admin/vienphiList', {title : 'Danh sach vien phi', tag : 'vienphi' ,vienphis : data});
        else console.log('BUG');
    });
};

// show ra trang add banh an
module.exports.addVienphi = function (req, res) {
    res.render('admin/addVienphi', {title : 'Them vien phi', tag : 'vienphi'});
};


module.exports.completeAddVienphi = function (req, res) {
    var newBenhAn = new vienphiDB({
        maVP : req.body.MaVP,
        maBN : req.body.MaBN,
        maDV : req.body.MaDV,
        maTT : req.body.MaTT,
        vienphi : req.body.vienphi,
        khoanthu : req.body.khoanthu,
        khoandathu : req.body.khoandathu,
    });

    newBenhAn.save(function (err, location) {
        if (err){
            res.render('admin/addVienphi?'+ err, {title: 'Them benh nhan', message:  'fail: ' + err, tag : 'benhnhan'});
        } else {
            res.render('admin/addVienphi', {title: 'Them benh nhan', message: 'success', tag : 'benhnhan'});
        }
    });
    // res.redirect('/admin/victim?' + message);
};

module.exports.deleteVienphi = function(req, res){
    vienphiDB.remove({_id : req.params._id}, function (err) {
        var message ;
        if(err){
            message = err;
        } else  {
            message = 'success';
        };

        res.redirect('/admin/vienphi?' + message);

    });
};