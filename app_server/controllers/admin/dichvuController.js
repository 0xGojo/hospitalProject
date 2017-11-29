var dichvuDB = require('../../models/dichvu');

module.exports.dichvuList = function (req, res) {
    dichvuDB.find({},function (err, data) {
        if(!err)
            res.render('admin/dichvuList', {title : 'Danh sach benh an', tag : 'dichvu' ,dichvus : data});
        else console.log('BUG');
    });
};

// show ra trang add dichvu
module.exports.addDichvu = function (req, res) {
    res.render('admin/addDichvu', {title : 'Them dich vu', tag : 'dichvu'});
};


module.exports.completeAddDichvu = function (req, res) {
    var newDichvu = new dichvuDB({
        maDV: req.body.MaDV,
        maBN : req.body.MaBN,
        tenDV : req.body.tenDV,
        giathanh : req.body.price,
    });

    newDichvu.save(function (err, location) {
        if (err){
            res.render('admin/addDichvu?'+ err, {title: 'Them dich vu', message:  'fail: ' + err, tag : 'dichvu'});
        } else {
            res.render('admin/addDichvu', {title: 'Them dich vu', message: 'success', tag : 'dichvu'});
        }
    });
    // res.redirect('/admin/victim?' + message);
};

module.exports.deleteDichvu = function(req, res){
    dichvuDB.remove({_id : req.params._id}, function (err) {
        var message ;
        if(err){
            message = err;
        } else  {
            message = 'success';
        };

        res.redirect('/admin/dichvu?' + message);

    });
};