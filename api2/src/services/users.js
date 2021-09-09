const e = require('express');
const {User} = require('../db');


exports.createNewUser = async(data) =>{
    try{
    const infoUser = User.create(data);
    }
    catch(error){
        console.log(error)
        throw error
    }
};


exports.findUser = async(email) =>{
   try{
     return User.findOne({where:{email}})
    }
    catch(error){
        console.log(error)
        throw error 
    }
};

exports.userById = async(id) =>{
    try{
        return User.findOne({where:{id}})
    }
    catch(error){
        console.log(error)
        throw error
    }
};


exports.updateUserData = async(body,id) =>{
    try{
        return User.update({...body},{where:{id}})
    }
    catch(error){
        console.log(error)
        throw error 
    }
};
