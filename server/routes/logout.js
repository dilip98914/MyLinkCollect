const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const User=require('../models/user')

router.get('/',(req,res,next)=>{
    //todo:logout must be the correct user not some other user, #security concern!
    if(req.session){
        req.session.destroy(()=>{
            res.redirect('/login')

        })
    }
})

module.exports=router;