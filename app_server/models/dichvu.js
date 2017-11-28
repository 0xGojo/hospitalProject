var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var dichvuSchema = new Schema({
    maDV: {type : String, required : true},
    maBN : {type : String, required : true},
    tenDV : {type : String, required : true},
    giathanh : {type : Number, required : true},
});

// contactSchema.pre('save', function (next) {
//
// })


module.exports = mongoose.model('dichvu', dichvuSchema);