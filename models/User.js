const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: String,
    username: { type: String, unique: true, require: true },
    email: { type: String, unique: true, require: true },
    salary: Number,
    markup: Number,
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);