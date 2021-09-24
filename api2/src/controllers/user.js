const servicesUser = require('../services/users');


const getUserById = async (req,res) =>{
    const {id} = req.params;
    const userId = await servicesUser.userById(id);
    if(!userId) return res.status("No se encontro el usuario")
    res.json(userId)
};


const updateUserData = async (req,res) =>{
    const {id} = req.params;
    const updateData = await servicesUser.updateUserData(req.body.data,id)
    if(updateData[0] === 0) return res.status(400).json({success:false, msg :"No se pudo modificar el usuario"});
    res.status(200).json({success:true, msg :"Cambio realizado con éxito"})
};

module.exports = {getUserById,updateUserData}