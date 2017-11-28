var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var benhanSchema = new Schema({
    maBA : { type : String, required : true},
    maBN : { type : String,  required: true},
    ngaynhapvien : {type : Date, required : true},
    ngayxuatvien : {type: Date},
    loaibenh : {type : String},
    khoa : {type : String},
    giuongnam : {type : String},
    bacsichuatri : {type : String},
    ytatheodoi : {type : String},
});


module.exports = mongoose.model('benhan', benhanSchema);