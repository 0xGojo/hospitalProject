var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var benhanSchema = new Schema({
    maBA : { type : String, required : true},
    maBN : { type : String,  required: true},
    tenBN: { type : String,  required: true},
    diachi :{ type : String,  required: true},
    nghenghiep :{ type : String,  required: true},
    nhapvien : {type : Date, required : true},
    xuatvien : {type: Date},
    loaibenh : {type : String},
    khoa : {type : String},
    giuongnam : {type : String},
    bacsichuatri : {type : String},
    ytatheodoi : {type : String},
});


module.exports = mongoose.model('benhan', benhanSchema);