const {response} = require('express');
const bcryptjs = require('bcryptjs');

const servicesAuth0 = require('../services/auth0');
const servicesUser = require('../services/users');
const {User} = require('../db')


const createNewUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const data = {name, email,role:req.userRole}
        const token = await servicesAuth0.getAccessToken();
        const auth0data = {userData: {data:{email,password},metadata:data}}
        const createUser = await servicesAuth0.createAuth0User({...auth0data,accessToken: token.data.access_token})
        if(createUser.error)return res.status(400).json(createUser.msj)
        const saveUserDB = await servicesUser.createNewUser(data)
        return res.json({success:true});
    }
    catch(error){
        console.log(error)
        throw error
    }
};

const login = async(req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await servicesUser.findUser(email);
        if(!user) return res.status(400).send("user not exist in DB")
        const aunth0Response = await servicesAuth0.login(email,password);
        res.json({...aunth0Response, role:user.role,userId:user.id})
    }
    catch(error){
        console.log(error)
        throw error 
    }
};





module.exports = {
     login,
     createNewUser
}