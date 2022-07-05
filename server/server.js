const express= require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const server = express();
const HotelModel = require("./models/HotelSchema")
server.use(express.json());
const UserModel = require('./models/UserSchema');

dotenv.config();
mongoose.connect(MONGO="mongodb+srv://adi:sahara123@cluster0.drtgg.mongodb.net/hotel-booking-app?retryWrites=true&w=majority").then(()=>{
    console.log('mongoDB database connected')
}).catch((error)=>{
console.log('error',error)
})

server.get('/',(req,res)=>{
    res.send("test")
})

server.post('/add_hotel',(req,res)=>{
    HotelModel.create(req.body).then(()=>{
        res.json({
            submitted:true
        })
    })
})

server.post("/register",(req,res)=>{

})
server.listen(process.env.PORT||5000,()=>{
    console.log('Connected to backend')
})