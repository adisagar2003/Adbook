const express=require('express');
const HotelModel = require('../models/HotelSchema');
const UserModel = require('../models/UserSchema');
const nodemailer = require('nodemailer');

const multer = require('multer');
const fileStorage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./images')},
        filename:(req,file,cb)=>{
            cb(null,Date.now()+'--'+file.originalname)
        }
    })
const upload = multer({storage:fileStorage})
const router =express.Router();
router.post('/upload',upload.single('image'),(req,res)=>{
    console.log(req.file)
    res.json({
        room:'room_details',
        file:req.file
    })})

module.exports = router;   