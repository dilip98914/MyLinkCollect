const mongoose =require('mongoose');
const Schema=mongoose.Schema

const schema=mongoose.Schema({
  firstName:{
    type:String,
    required:true,
    trim:true
  },
  lastName:{
    type:String,
    required:true,
    trim:true
  },
  username:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true
  },
  password:{
    type:String,
    required:true,
  },
  profilePic:{
    type:String,
    default:'/images/blank_image.jpeg'
  },
  likes:[{
    type:Schema.Types.ObjectId,
    ref:'Post'
  }],
  retweets:[{
    type:Schema.Types.ObjectId,
    ref:'Post'
  }],
  isDeleted:{
    type:Boolean,
    default:false,
    required:true
  },
},{timestamps:true})

module.exports=mongoose.model('User',schema)
