const mongoose = require('mongoose');
var cuid = require('cuid');

const schema = mongoose.Schema({
  id: { type: String, default: cuid() },
  user_id: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: 'Title'
  },
  description: {
    type: String,
    default: ''
  },
  isPrivate: {
    type: Boolean,
    default: false
  },
  filename: {
    type: String,
    default: null
  },
  deletedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true })

module.exports = mongoose.model('Collection', schema)
