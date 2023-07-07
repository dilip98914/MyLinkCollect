const express=require('express')
const router=express.Router()
const bcrypt=require('bcrypt')
const User=require('../../models/user')

router.get('/',(req,res,next)=>{
    res.status(200).render('login')
})

router.post('/',async(req,res,next)=>{

    const payload=req.body;

    if(req.body.logUsername && req.body.logPassword){
        const user=await User.findOne({
            $or:[
                {username:req.body.logUsername},
                {email:req.body.logUsername},
            ]
        }).catch((err)=>{
            console.error(err);
            payload.errorMessage="Something went wrong!."
            res.status(200).render('login',payload)
        })

        if(user!==null){
            const match=await bcrypt.compare(req.body.logPassword,user.password)
            if(match===true){
                req.session.user=user;
                return res.redirect('/')
            }
        }
        payload.errorMessage="login credentials incorrect!."
        return res.status(200).render('login',payload)
    }
    payload.errorMessage="make sure each field has a valid value!."
    res.status(200).render('login')
})


module.exports=router;