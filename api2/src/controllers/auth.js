const {response} = require('express');
const bcryptjs = require('bcryptjs');
// const {User}= require('../models/User')
// const{ generateJWT }= require('../middlewares/jwt');
const servicesAuth0 = require('../services/auth0');
const servicesUser = require('../services/users');


// const createUser = async (req, res = response) => {
//     const { name, email, password}= req.body;
//     try {
//         let newUser = await User.findOne({ where: { email } });
//         if (newUser === null) {
//             // Encriptar contraseña
//            const  salt = bcryptjs.genSaltSync();
//             let encPassword = bcryptjs.hashSync(password, salt);

//             // crear usurio en la base de datos
//           let newUser = await User.create({
//                 name,
//                 email,
//                 password: encPassword,
//             });

//             //generar JWT
//           const token = await generateJWT(newUser.id, newUser.name);

//           return res.status(201).json({ok:true, msg:"your user has been created successfully", token});
//         } else {
//            return res.status(400).json({ok:false,msg:"this user already exists"});
//         }

//     } catch(error){
//         return res.status(500).json({ok:false,msg:"error"})
//     }



// const loginUser = async (req, res = response) => {
//     const { email, password }= req.body;
//     try {
//         let logUser = await User.findOne({ where: { email } });
//         if (logUser !== null) {
//             const validPassword = bcryptjs.compareSync(password,logUser.password);
//             if(!validPassword ) return res.status(400).json({ok:false, msg:"the password is incorrect"});
//             else {
//                 const token = await generateJWT(logUser.id, logUser.name);
//                 return res.status(200).json({ok:true, msg:"bienvenido",id:logUser.id, name:logUser.name, token})
//             }
//         } else {
//             return res.status(400).json({ok:false, msg:"this user dont exists"});
     
// }
// const loginUser = async (req, res = response) => {
//     const { email, password }= req.body;
//     try {
//         let logUser = await User.findOne({ where: { email } });
//         if (logUser !== null) {
//             const validPassword = bcryptjs.compareSync(password,logUser.password);
//             if(!validPassword ) return res.status(400).json({ok:false, msg:"the password is incorrect"});
//             else {
//                 const token = await generateJWT(logUser.id, logUser.name);
//                 return res.status(200).json({ok:true, msg:"bienvenido",id:logUser.id, name:logUser.name, token})
//             }
//         } else {
//             return res.status(400).json({ok:false, msg:"this user no  exists"});
//         }


//     } catch(e){
//         return res.status(500).json({ok:false,msg:"error"})
//     }
// }
// const validateToken = async (req, res = response) => {
//     const { id, name}  = req;
//     const  token = await generateJWT(id, name);
//     res.json ({ id:id, name:name, token });
// }

const createNewUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const data = {name, email,role:"regular"}
        const token = await servicesAuth0.getAccessToken();
        const auth0data = {userData: {data:{email,password},metadata:data}}
        const createUser = await servicesAuth0.createAuth0User({...auth0data,accessToken: token.data.access_token})
        if(createUser.error)return res.status(400).json(createUser.msj)
        const saveUserDB = await servicesUser.createNewUser(data)
        res.json({success:true});
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
     //createUser,
     //loginUser,
     login,
     createNewUser
     //validateToken
}