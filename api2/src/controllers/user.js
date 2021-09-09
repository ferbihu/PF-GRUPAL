const servicesUser = require('../services/users');


const getUserById = async (req,res) =>{
    const {id} = req.params;
    const userId = await servicesUser.userById(id);
    //console.log(userId)
    if(!userId) return res.status("No se encontro el usuario")
    res.json(userId)
};


const updateUserData = async (req,res) =>{
    const {id} = req.params;
    const {body} = req.body;
    const updateData = await servicesUser.updateUserData(req.body,id)
    if(updateData[0] === 0) res.status(400).json({success:false, msg :"No se pudo modificar el usuario"});
    res.status(200).json({success:true, msg :"Cambio realizado con éxito"})
};

module.exports = {getUserById,updateUserData}