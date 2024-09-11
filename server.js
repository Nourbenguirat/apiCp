//server
const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();




//load env
dotenv.config();


//middlware
app.use(express.json());

//connzct to mongodb
 mongoose.connect(process.env.uri)
 
 //routes
 const userRoutes = require('./routes/userRoutes');
 app.use('/user',userRoutes);

 //strat server
  const port =process.env.port
  app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
  })