const mongoose = require("mongoose");
const { Schema } = mongoose;

const AccountSchema = new Schema({
  service: String,
  uid: String
});

const Account = mongoose.model("Account", AccountSchema);
module.exports = Account;
