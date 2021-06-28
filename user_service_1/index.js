const express =require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const port=process.env.USER_PORT;


const UserRoute=require('./routes/UserRoute');

const app=express();
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/woomoo',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex:true
}).then(()=>{
    app.listen(port,()=>{
        console.log('Running')
    });
}).catch((error=>{
    console.log(error);
}))
app.use('api/v1/userRoute',UserRoute);