const mongoose = require('mongoose');
var cuid = require('cuid');

const schema = mongoose.Schema({
  id: { type: String, default: cuid() },
  email: {
    type: String,
    required: true,
    unqiue: true
  },
  password: {
    type: String,
    required: true,
  },
  adminSecret: {
    type: String,
    required: true,
    default: process.env.admin_secret
  },
  twofactorAuthenticationMethod: String,//todo later
  backupAuthenticationPlan: String,//todo later
  todos: { type: Array, default: [] },
  alerts: { type: Array, default: [] },
  revenue_logs: Array,//by day
  expense_logs: Array,//by day
  deletedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true })

module.exports = mongoose.model('AdminUser', schema)
