const mongoose = require('mongoose');
var cuid = require('cuid');

const schema = mongoose.Schema({
  id: { type: String, default: cuid() },
  project_id: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
  amountPropsed: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['rejected', 'accepted', 'pending'],
    default: 'pending'
  },
  deadline: { type: Date, required: true },//developer will give deadline
  type: {
    type: String,
    enum: ['contract', 'partTime', 'fullTime', 'fixed'],
    required: true
  },
  deletedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true })

module.exports = mongoose.model('ProjectRequest', schema)
