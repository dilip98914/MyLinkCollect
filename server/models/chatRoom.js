const mongoose =require('mongoose');
var cuid = require('cuid');

const schema=mongoose.Schema({
  id:{type:String,default:cuid()},
  type:{
    type:String,
    enum:['slack','rocketChat','teams'],
    required:true,
  },
  project_id:{
    type:String,
    required:true,
  },
  messageLogs:{type:Array,default:[]},//push messaged here
  deletedAt:{
    type:Date,
    default:null,
  },
},{timestamps:true})

module.exports=mongoose.model('ChatRoom',schema)
