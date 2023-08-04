const mongoose = require('mongoose');
var cuid = require('cuid');

const schema = mongoose.Schema({
  id: { type: String, default: cuid() },
  user_id: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ['withdrawl', 'transfer'],
    required: true,
  },
  status: String,//add enum
  currency: {
    type: 'String',
    default: 'INR'
  },
  isRefunded: { type: Boolean, default: false },
  amount: String,
  source: { type: String, default: 'gigsChad' },
  modeType: {
    type: String,
    enum: ['upi', 'bank_transfer'],
    required: true
  },
  medium: {
    type: String,
    enum: ['razorpay', 'paytm', 'paypal'],
    required: true
  },
  deletedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true })

module.exports = mongoose.model('Transaction', schema)
