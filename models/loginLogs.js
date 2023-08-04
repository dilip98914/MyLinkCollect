const mongoose =require('mongoose');
var cuid = require('cuid');

const schema=mongoose.Schema({
  id:{type:String,default:cuid()},
  user_id:{
    type:String,
    required:true
  },
  lastLoginAt:{
    type:Date,
    default:new Date()
  },
  deletedAt:{
    type:Date,
    default:null,
  },
},{timestamps:true})

module.exports=mongoose.model('LoginLog',schema)
