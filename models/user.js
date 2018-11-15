const mongoose = require("mongoose");
const { Schema } = mongoose;
const Account = require("./account");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    dropDups: true
  },
  passwordHash: {
    type: String
  },
  reset_password_token: String,
  reset_password_expires: String,
  accounts: {
    facebook: String,
    twitter: String,
    github: String,
    google: String
  },
  profilePhoto: String
});

// Compare the passed password with the value in the database
UserSchema.methods.comparePassword = function comparePassword(
  password,
  callback
) {
  bcrypt.compare(password, this.passwordHash, callback);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
