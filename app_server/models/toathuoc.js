var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var toathuocSchema = new Schema({
    maTT: {type : String, required : true},
    maBN : {type : String, required : true},
    mathuoc : {type : Array , "default" : []},
    soluong : {type : Array , "default" : []},
});

module.exports = mongoose.model('toathuoc', toathuocSchema);