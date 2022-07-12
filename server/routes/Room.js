const express=require('express');
const HotelModel = require('../models/HotelSchema');
const UserModel = require('../models/UserSchema');
const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport(   {
  host:'stmp-relay.yahoo.com',
sevice:"Yahoo",
port:465,
secure:true,  
    auth:{
      user:"adi.exe2003@yahoo.com",
      password:"Sahara@321"
    }
});


const router =express.Router();
router.get('/details',(req,res)=>{
    res.json({
        room:'room_details'
    })})

router.post('/post',(req,res)=>{
    HotelModel.create(req.body).then((pr)=>{
res.json({
    hotel:"created"
})
    }).catch(()=>{
        res.json({
            hotel:"not_created"
        })
    })
})
//getting hotels by id;
router.get('/find/:_id', async (req,res)=>{
    console.log(req.params['_id']);
    HotelModel.find({_id:req.params['_id']}).then((hotels)=>{
console.log('hotels',hotels);
res.json({
    hotels
})

  }).catch(
console.log('err')

  )

})

//getting all hotels

router.get('/find', async (req,res)=>{

    HotelModel.find({}).then((hotels)=>{
console.log('hotels',hotels);
res.json({
    hotels
})

  }).catch(
console.log('err')
  )

})
//getting hotels by location

router.get('/place/:city', async (req,res)=>{
    console.log(req.params['city']);
    HotelModel.find({city:(req.params['city']).toUpperCase()}).then((hotels)=>{
console.log('hotels',hotels);
res.json({
    hotels
})

  }).catch(
console.log('err')
  )

})
router.post('/book',(req,res)=>{
  const options = {
    from: "outlook_ABCFE9699A6D84E2@outlook.com",
    to:req.body.mail,
    subject:`Room ${Math.random()*1000} in ${req.body.hotel} is booked`,
    text:"Lorem 23"
  }
  transporter.sendMail(options,  function(err,info){
    if (err){
      console.log(err);
      return 
    }
    console.log('sent' + info.response);
    
  })
})
module.exports = router