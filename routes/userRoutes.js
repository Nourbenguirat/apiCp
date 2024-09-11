const express =require('express');
const user=require('../models/user');
const User = require('../models/user');
const router=express.Router();


//get
router.get('/',async(req,res)=>{
    try {
        const users =await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({msg:'Server error'});
        
    }
});

//post
router.post('/',async(req,res)=>{
    const{name,email,age}=req.body
    try {
        const newUser=new User(req.body)
        await newUser.save();
    } catch (error) {
        res.status(400).json({msg:'Error while adding user' });    
        
    }
});
//deleete by id
router.delete('/:id',async(req,res)=>{

try {
    const deletUser=await User.findByIdAndDelete(req.body);
    res.status(200).json({msg:'user deleted'});
} catch (error) {
    res.status(500).json({msg:'server porblem'})
    
}});
module.exports=router;
