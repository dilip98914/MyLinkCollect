const mongoose = require('mongoose');
var cuid = require('cuid');

const schema = mongoose.Schema({
  id: { type: String, default: cuid() },
  developerCount: { type: String, default: '40000' },
  clientCount: { type: String, default: '10000' },
  facebookUrl: { type: String, default: "https://www.facebook.com/" },
  twitterUrl: { type: String, default: "https://twitter.com/i/flow/login?redirect_after_login=%2F" },
  linkedinUrl: { type: String, default: "https://www.linkedin.com/" },
  companyEmail: { type: String, default: "dilip98914@gmail.com" },
  deletedAt: {
    type: Date,
    default: null,
  },
}, { timestamps: true })

module.exports = mongoose.model('WebsiteStats', schema)
