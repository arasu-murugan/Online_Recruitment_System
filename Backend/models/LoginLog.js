// models/LoginLog.js
const mongoose = require("mongoose");

const loginLogSchema = new mongoose.Schema({
  username: { type: String, required: true },
  loginTime: { type: Date, required: true },
});

module.exports = mongoose.model("LoginLog", loginLogSchema);
