const mongoose = require('mongoose');
const HotelSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    
    },
    price:{
        type:String,
        required:true,

    },
    city:{
        type:String,
        required:true,
    },
    photos:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    }

});
const HotelModel = mongoose.model("Hotel",HotelSchema);
module.exports = HotelModel