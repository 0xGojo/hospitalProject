var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var loaithuocSchema = new Schema({
    maT: {type : String, required : true},
    Ten : {type : String, required : true},
    Soluong : {type : String, required : true},
    giathanh : {type : Number, required : true},
});

// contactSchema.pre('save', function (next) {
//
// })


module.exports = mongoose.model('loaithuoc', loaithuocSchema);