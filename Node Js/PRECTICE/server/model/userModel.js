
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number:{
    type: String,
    required: true,
  },
  password:{
    type: String,
    required: true,
  }
});
const UserModel = mongoose.model("userDatabase", userSchema);

module.exports = UserModel;

