const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    index: true,
    unique: true,
    required: true,
    dropDups: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  reset_password_token: String,
  reset_password_expires: String
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
