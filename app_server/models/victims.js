var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var victimsSchema = new Schema({
    name :{ type : String, "default" : "don't know", required : true},
    address : String,
    birthDay : Date,
    Gender :  Number,
    dayIn : Date,
    caserecordID : Number,
    healthInsuranceID : Number,
    prescriptionID : Number,
    hospitalFeesID : Number
});


//
// var mrThach  = {name: 'Tran Thach', address: '701 Ton Duc Thang', birthDay: Date("1995-06-10"), Gender:1,
//     dayIn : Date(2017-1-10), caserecordID: 1, healthInsuranceID: 1, prescriptionID: 1, hospitalFeesID: 1};
// var victimsM = mongoose.model('victims');
// if(victimsM.find({name : 'Tran Thach'}) == null) {
//     victimsM.create(mrThach, function (err, location) {
//         if (err) {
//             console.log('BUG');
//         } else {
//             // sendJsonResponse(res, 201, location);
//             console.log('OK');
//         }
//     });
// }

module.exports = mongoose.model('victims', victimsSchema);