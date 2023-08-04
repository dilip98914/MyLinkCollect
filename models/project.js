const mongoose = require('mongoose');
var cuid = require('cuid');

const schema = mongoose.Schema({
  id: { type: String, default: cuid() },
  title: {
    type: String,
    required: true,
  },
  delete_on: { type: Date, default: null },//todo: for this there will be cron/scheduler which on time deletes it or I can run a script manually everyday
  uploader_user_id: {
    type: String,
    required: true,
  },
  clientCompany_id: {
    type: String,
    // required: true,
  },
  projectImageArray: {
    type: Array,
    default: []
  },
  deadline: { type: Date, required: true },//client will give his deadline
  budget: {
    type: String,
    required: true,
  },
  deletedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true })

module.exports = mongoose.model('Project', schema)
