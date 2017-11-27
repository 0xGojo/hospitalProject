
// var gracefulShutdown = function(msg, callback) {
//   mongoose.connection.close(function () {
//       console.log('Mongoose disconnected through ' + msg);
//       callback();
//   });
// };
//
// process.once('SIGUSR2', function () {
//    gracefulShutdown('nodemon restart', function () {
//        process.kill(process.pid, 'SIGUSR2');
//    });
// });
//
// process.once('SIGINT', function () {
//     gracefulShutdown('app termination', function () {
//         process.exit(0);
//     });
// });
//
// process.once('SIGTERM', function () {
//     gracefulShutdown('Heroku app shutdown', function () {
//         process.exit(0);
//     });
// });
