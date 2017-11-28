var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var victimsSchema = new Schema({
    maBN : { type : String, required : true},
    maBA : { type : String,  required: true},
    tenBN: { type : String,  required: true},
    ngaysinh : {type : Date , required : true},
    diachi :{ type : String,  required: true},
    gioitinh :{type : String,  required: true},
    nghenghiep :{ type : String,  required: true},
    dienthoai : { type : String,  required: true},
});

module.exports = mongoose.model('benhnhan', victimsSchema);