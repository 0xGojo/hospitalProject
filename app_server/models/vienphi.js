var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var vienphiSchema = new Schema({
    maVP : { type : String, required : true},
    maBN : { type : String,  required: true},
    maDV : { type : String,  required: true},
    maTT : { type : String,  required: true},
    vienphi : {type : Number, required : true},
    khoanthu : {type : Number, required : true},
    khoandathu : {type: Number, required : true},
});


module.exports = mongoose.model('vienphi', vienphiSchema);