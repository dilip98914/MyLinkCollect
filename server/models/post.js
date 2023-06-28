const mongoose =require('mongoose');
const Schema=mongoose.Schema

const schema=mongoose.Schema({
  content:{
    type:String,
    // required:true,
    trim:true
  },
  postedBy:{
    type:Schema.Types.ObjectId,
    ref:'User'
  },
  pinned:Boolean,
  likes:[{
    type:Schema.Types.ObjectId,
    ref:'User'
  }],
  retweetUsers:[{
    type:Schema.Types.ObjectId,
    ref:'User'
  }],
  retweetData:{
    type:Schema.Types.ObjectId,
    ref:'Post'
  },
  isDeleted:{
    type:Boolean,
    default:false,
    required:true
  },
},{timestamps:true})

module.exports=mongoose.model('Post',schema)
