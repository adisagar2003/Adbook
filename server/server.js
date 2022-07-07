const express= require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const server = express();
const HotelModel = require("./models/HotelSchema")
server.use(express.json());
const UserModel = require('./models/UserSchema');
const jwt = require('jsonwebtoken');
mongoose.connect(MONGO="mongodb+srv://adi:sahara123@cluster0.drtgg.mongodb.net/hotel-booking-app?retryWrites=true&w=majority").then(()=>{
    console.log('mongoDB database connected')
}).catch((error)=>{
console.log('error',error)
})
const cors = require('cors');
const cookieParser = require('cookie-parser');
server.use(cookieParser());
dotenv.config();
//Routing data
const roomRoute = require('./routes/Room');
const profileRoute = require('./routes/User');

const verifyToken = require('./verifyToken')

server.use(cors());

//Routes

server.use('/room',roomRoute);
server.use('/user',profileRoute);
server.get('/',(req,res)=>{
 res.json({sample:'response'})
 
  
})
//checking authorization
server.get('/useAuth',verifyToken,(req,res)=>{
    res.send("helloins user hehe")
})



//listening server here
server.listen(process.env.PORT||5000,()=>{
    console.log('Connected to backend')
})

