const { HealthProfession, User } = require("../db");
//const Op = Sequelize.Op;

async function addProfession(data) {
  try {
    const healthProfession = await HealthProfession.create(data,
      {
          include: [User] 
      }
    );
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
          Where:{name: "name"},
          include:[{
              model:User,
              
          }]
      });
      
  }
  catch(error){
      console.log(error)
      throw error
  };
};



module.exports = { addProfession, getAllProfessions }; 
