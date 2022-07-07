const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserSchema');
const jwt = require('jsonwebtoken');
router.get('/profile',(req,res)=>{
    res.json({
        data:"profile_data_goes_here"
    })
})


router.post("/login", async (req,res)=>{
    const User =await UserModel.findOne({username:req.body.username,password:req.body.password})
    if (User){
     console.log(User);
     const token = jwt.sign({id:User._id,username:User.username,email:User.email},process.env.JWT);
     
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
module.exports  = router;