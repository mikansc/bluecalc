const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, require: true },
  username: { type: String, unique: true, require: true },
  email: { type: String, unique: true, require: true },
  salary: Number,
  markup: { type: Number, default: 1.2 },
  resetPasswordToken: String,
  resetPasswordExpires: Date
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);
