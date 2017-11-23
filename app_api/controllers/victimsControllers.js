// var mongoose = require('mongoose');
// // var doc = mongoose.model('Doctor');
// var vic = mongoose.model('victims');
// var sendJsonResponse = function (res, status, content) {
//   res.status(status);
//   res.json(content);
// };
//
// module.exports.showDoctor = function (req, res) {
//     vic
//         .findById(req.params.doctorid)
//         .exec(function (err, doctor) {
//             if(!doctor){
//                 sendJsonResponse(res, 404, {"message" : "victims id not found", "id" : req.params.doctorid});
//             }
//             else
//                 sendJsonResponse(res, 200, doctor);
//         });
//     // sendJsonResponse(res, 200, {status : "success"});
//
// };
//
// var mongoose = require('mongoose');
// // var doc = mongoose.model('Doctor');
// var vic = mongoose.model('victims');
// var sendJsonResponse = function (res, status, content) {
//   res.status(status);
//   res.json(content);
// };
//
// module.exports.showDoctor = function (req, res) {
//     vic
//         .findById(req.params.doctorid)
//         .exec(function (err, doctor) {
//             if(!doctor){
//                 sendJsonResponse(res, 404, {"message" : "victims id not found", "id" : req.params.doctorid});
//             }
//             else
//                 sendJsonResponse(res, 200, doctor);
//         });
//     // sendJsonResponse(res, 200, {status : "success"});
//
// };
//
