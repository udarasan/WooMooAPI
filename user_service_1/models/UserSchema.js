/*
* express
* mongoose
* cors
* dotenv
*
* * */

const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    fName:{
        type: String,
        required: true
    },
    lName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    avatar:{
        type:String
    },
    userState:{
        type:Boolean
    },
    regDate:{
        type:Date,
        required:true
    },
    regTime:{
        type:String,
        required:true
    }
});
module.exports = mongoose.model('User', UserSchema);