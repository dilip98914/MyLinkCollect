const mongoose = require('mongoose');
const cuid = require('cuid');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema({
  id: { type: String, default: cuid() },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    // unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
  },
  liked: [],
  viewed: [],
  logins: [],
  deletedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true })

schema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

schema.methods.validPassword = function (password) {
  return password == this.password
  // return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', schema)
