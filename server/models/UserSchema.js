const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    
    },
    password:{
        type:String,
        required:true,

    },
    email:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        required:true,
    default:Date.now()    
},
    updatedAt:{
        type:Date,
   default: Date.now(),
        required:true
    },
    role:{
        type:String,
        required:true
    }

});
const UserModel = mongoose.model("User",UserSchema);
module.exports = UserModel