const express= require('express');
const mongoose= require('mongoose');
const User=require('./models/userModel');
const Note=require('./models/noteModel');
const { response } = require('express');
const config = require('./config.json');
// const request = require('request-promise');
const app=express();
const PORT= process.env.PORT|| 5000;

mongoose.connect(config.test.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result)=>app.listen(PORT,()=>console.log('Server running on '+PORT)))
.catch((err)=>console.log(err));


// app.use(express.json());

app.get('/',(req,res)=>{
res.send('Welcome Noter API');


});
app.get('/addUser',(req,res)=>{
const user=new User({
    uid:'5678gafw',
    name:'test456',
    email:'test345@gmail.com'
});

user.save()
.then((result)=>res.send(result))
.catch((err)=>console.log(err));

});

