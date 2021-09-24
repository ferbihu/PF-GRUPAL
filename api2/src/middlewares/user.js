const {User} = require('../db');
const {adminEmails} = require('../../configs/adminEmails.json');


exports.isAdminUser = async (req,res,next) => {
    const {email} = req.user;
    const userAdmin = await User.findOne({where:{role:"admin",email}})
    if(!userAdmin)return res.status(401).json("No es un usuario admin");
    next();
    
};


exports.definedUserRole = async(req,res,next) => {
    const  {email}  = req.body;
    console.log(email)
    if(adminEmails.includes(email)){
        req.userRole = 'admin'
    }else{
        req.userRole = 'regular'
    }
    next();
};