const mongoose = require('mongoose');
var cuid = require('cuid');

const schema = mongoose.Schema({
  id: { type: String, default: cuid() },
  fullName: {
    type: String,
  },
  username: {
    type: String,
    // unique: true
  },
  address: {
    type: Object,
  },
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    // unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password!"],
  },
  profilePic: {
    type: String,
  },
  resume: {
    type: String,
  },
  city: String,
  state: String,
  country: String,
  dob: Date,
  companiesArray: { type: Array, default: [] },
  projectsArray: { type: Array, default: [] },
  studyArray: { type: Array, default: [] },
  type: {
    type: String,
    enum: ['developer', 'client'],
    requied: true
  },
  isVerified: {
    type: Boolean,
    required: true,
    default: false
  },
  isBanned: {
    type: Boolean,
    required: true,
    default: false
  },
  wallet: {
    type: String,
    default: '0'
  },
  rating: {
    type: String,
    requied: true,
    default: '5'
  },
  shortSummary: {
    type: String,
    requied: true,//todo:make length limit
  },
  title: {
    type: String,
    requied: true,
  },
  projectsWorked: {
    type: String,
    requied: true,
    default: 0,
  },
  projectsDelivered: {
    type: String,
    requied: true,
    default: 0,
  },
  accountNumber: String,
  ifscCode: String,
  accountMetaData: Object,
  upi_ids: { type: Array, default: [] },
  deletedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true })

module.exports = mongoose.model('User', schema)
