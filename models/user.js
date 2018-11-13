const mongoose = require("mongoose");
const { Schema } = mongoose;
const Account = require("./account");

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

const User = mongoose.model("User", UserSchema);
module.exports = User;
