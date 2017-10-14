var mongoose = require('mongoose');

var doctorSchema = new mongoose.Schema({
    name :{ type : String, "default" : "don't know", required : true},
    address : String,
    birthDay : Date,
    Gender :  Number,
    role : String,
    position : String,
    department : String,
    victims : [victimSchema],
    coords :{type:[Number], index: '2dsphere'}
});

var victimSchema = new mongoose.Schema({
   name : String,
   birthDay : Date,
   gender : Number,
   disease : String
});

mongoose.model('Doctor', doctorSchema);