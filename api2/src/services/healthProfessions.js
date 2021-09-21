const { HealthProfession, User } = require("../db");
//const Op = Sequelize.Op;

async function addProfession(data,userId) {
  try {
    const user = await User.findByPk(userId)
    console.log(user)
    if(!user) return ({error: true ,msj:"Usuario no existente en la base de datos"})
    const healthProfession = await HealthProfession.create(data)
  
    await user.addHealthProfession(healthProfession.id)
    return {success:true}
    
  } catch (error) {
    console.log(error);
    throw error;
  }
}

/* 
async function getProfessions() {
 // let {name} = req.query;
 console.log(query, 'este es el query')
  try {
    if(name) {
      const professions = await HealthProfession.findAll({
        where: {
          name: {
            [Op.like]: `%${name}%`,
          },
          include: [User],
        },
      });
         resizeBy.sen(200).json(professions)
    }
    
  } catch (error) {
    console.log(error);
    throw error;
  }
} */

async function getAllProfessions(){
  try{
      return await HealthProfession.findAll({
  
        include:{
          model:User,
          attributes:['name','lastname','email'],
          through:{
              attributes:[],
          }
      }
      });
      
  }
  catch(error){
      console.log(error)
      throw error
  };
};



module.exports = { addProfession, getAllProfessions }; 
