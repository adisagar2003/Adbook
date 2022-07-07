const express=require('express');
const router =express.Router();
router.get('/details',(req,res)=>{
    res.json({
        room:'room_details'
    })})
module.exports = router