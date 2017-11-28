var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var toathuocSchema = new Schema({
    maTT: {type : String, required : true},
    maBN : {type : String, required : true},
    mathuoc : {type: String, required: true},
    soluong : {type: String, required :true},
});

// contactSchema.pre('save', function (next) {
//
// })


module.exports = mongoose.model('toathuoc', toathuocSchema);