const mongoose = require('mongoose');
var cuid = require('cuid');

const schema = mongoose.Schema({
  id: { type: String, default: cuid() },
  value: {
    type: String,
    required: true
  },
  isBookMarked: {
    type: Boolean,
    default: false
  },
  deletedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true })

module.exports = mongoose.model('Link', schema)
