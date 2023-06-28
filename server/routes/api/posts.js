const express=require('express')
const router=express.Router()
const User=require('../../models/user')
const Post=require('../../models/post')

router.get('/',(req,res,next)=>{
    Post.find()
    .populate('postedBy')
    .populate('retweetData')
    .sort({createdAt:-1})
        .then(async results=>{
            results=await User.populate(results,{path:'retweetData.postedBy'})

            res.status(200).send(results)
        }).catch(err=>{
            console.error(err)
            res.status(400)
        })
})

router.post('/',(req,res,next)=>{
    if(!req.body.content){
        console.error('content param not passed')
        return res.status(400)
    }

    const data={
        content:req.body.content,
        postedBy:req.session.user,

    }
    Post.create(data).then(async newPost=>{
        newPost=await User.populate(newPost,{path:'postedBy'})

        res.status(201).send(newPost)
    }).catch(err=>{
        console.error(err)
        res.status(400)
    })
})

router.put('/:id/like',async (req,res,next)=>{
    const postId=req.params.id
    const  userId=req.session.user._id

    const isLiked=req.session.user.likes && req.session.user.likes.includes(postId)
    const option=isLiked ? "$pull":"$addToSet"
    //insert user like
    req.session.user= await User.findByIdAndUpdate(userId,{
        [option]:{likes:postId}
    },{new:true}).catch(err=>{
        console.error(err)
        res.status(400)
    })

    //insert post like
    const post= await Post.findByIdAndUpdate(postId,{
        [option]:{likes:userId}
    },{new:true}).catch(err=>{
        console.error(err)
        res.status(400)
    })
    res.status(200).send(post)
})

router.post('/:id/retweet',async (req,res,next)=>{
    const postId=req.params.id
    const  userId=req.session.user._id

    //try and delete
    const deletePost=await Post.findOneAndDelete({
        postedBy:userId,
        retweetData:postId
    }).catch(err=>{
        console.error(err)
        res.status(400)
    })


    const option=deletePost!=null ? "$pull":"$addToSet"

    let repost=deletePost;

    if(repost==null){
        repost=await Post.create({
            postedBy:userId,
            retweetData:postId
        }).catch(err=>{
            console.error(err)
            res.status(400)
        })
    }

    //update user retweets
    req.session.user= await User.findByIdAndUpdate(userId,{
        [option]:{retweets:repost._id}
    },{new:true}).catch(err=>{
        console.error(err)
        res.status(400)
    })

    //update post reweeted by
    const post= await Post.findByIdAndUpdate(postId,{
        [option]:{retweetUsers:userId}
    },{new:true}).catch(err=>{
        console.error(err)
        res.status(400)
    })
    res.status(200).send(post)
})

module.exports=router;