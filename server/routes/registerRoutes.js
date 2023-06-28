const express=require('express')
const bcrypt=require('bcrypt')
const router=express.Router()
const User=require('../models/user')

router.get('/',(req,res,next)=>{
    res.status(200).render('register')
})
router.post('/',async (req,res,next)=>{
    const firstName=req.body.firstName.trim()
    const lastName=req.body.lastName.trim()
    const email=req.body.email.trim()
    const username=req.body.username.trim()
    const password=req.body.password;

    const payload=req.body;

    if(firstName && lastName && username && email && password){
        const user=await User.findOne({
            $or:[
                {username},
                {email},
            ]
        }).catch((err)=>{
            console.error(err);
            payload.errorMessage="Something went wrong!."
            res.status(200).render('register',payload)
        })

        if(user==null){
            const data=req.body;
            data.password=await bcrypt.hash(password,10);
            User.create(data)
                .then(user=>{
                    req.session.user=user;
                    return res.redirect("/")
                })

        }else{
            if(email==user.email){
                payload.errorMessage="email already in use!."
            }else{
                payload.errorMessage="username already in use!."
            }
            res.status(200).render('register',payload)
        }

    }else{
        payload.errorMessage="Make sure each field has a field value."
        res.status(200).render('register',payload)
    }
})

module.exports=router;