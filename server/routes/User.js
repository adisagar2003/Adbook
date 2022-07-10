const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserSchema');
const jwt = require('jsonwebtoken');
const verifyToken = require('../verifyToken');
const errorHandle = require('../Middlewares/errorHandle')
router.get('/profile',(req,res)=>{
    res.json({
        data:"profile_data_goes_here"
    })
})


router.post("/login", async (req,res)=>{
    const User =await UserModel.findOne({username:req.body.username,password:req.body.password})
    if (User){
     console.log(User);
     const token = jwt.sign({id:User._id,username:User.username,email:User.email,role:User.role},process.env.JWT);
     
     console.log(token
         )
        
     res.cookie("access_token",token,{
         httpOnly:true,
     }).json({
         user:User,
         token:token
     })
 
    }
    else{
     res.send("Error")
    }
 })

 router.post("/register",errorHandle,(req,res)=>{
    const newUser= new UserModel(req.body);
    newUser.save().then((response)=>{
        res.json({
            user:newUser,
            dataTransfer:'successful'
        })
    }).catch((err)=>{
        res.json({
            dataTransfer:'failed',
        
        })
    })
 })
module.exports  = router;