const {User} = require('../db');


exports.isAdminUser = async (req,res,next) => {
    const {email} = req.user;
    const userAdmin = await User.findOne({where:{role:"admin",email}})
    if(!userAdmin)return res.status(401).json("No es un usuario admin");
    next();
    
};