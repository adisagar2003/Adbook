const express=require('express');
const HotelModel = require('../models/HotelSchema');
const UserModel = require('../models/UserSchema');
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

//getting hotels by location

router.get('/city/:city', async (req,res)=>{
    console.log(req.params['city']);
    HotelModel.find({city:req.params['city']}).then((hotels)=>{
console.log('hotels',hotels);
res.json({
    hotels
})

  }).catch(
console.log('err')
  )

})
module.exports = router