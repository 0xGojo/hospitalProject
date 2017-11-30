var mongoose = require('mongoose')

var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs')

var userSchema = new Schema({
    username : {type : String, required : true, index : { unique : true}},
    password : {type: String, required: true, select : false},
});

userSchema.pre('save', function (next) {
    var user = this;
    if(!user.isModified('password')) return next();

    bcrypt.hash(user.password, null, null, function (err, hash) {
        if(err) return next(err);
        user.password = hash;
        next();
    });
})

userSchema.methods.comparePassword = function (password) {
    var user = this;
    return bcrypt.compare(password, user.password)
}

userSchema.statics.authenticate = function (username, password, callback) {
    var user = this;
    user.findOne({ username: username })
        .exec(function (err, user) {
            if (err) {
                return callback(err)
            } else if (!user) {
                var err = new Error('User not found.');
                err.status = 401;
                return callback(err);
            }
            var result = this.comparePassword(password)
                if (result === true) {
                    return callback(null, user);
                } else {
                    return callback();
                }

        });
}


module.exports = mongoose.model('user', userSchema);