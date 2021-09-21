const { HealthProfession, User } = require('../db');
const serviceHealthProfession = require('../services/healthProfessions');


/*  const addHealthProfessions = async (req, res) => {
    try {
        const { name, lastname, profession, enrollment, prepaidSocialWork, zone, email, socialmedia } = req.body;
        const resultOne = { name, lastname, profession, enrollment, prepaidSocialWork, zone, email, socialmedia  };
        const resultFinal = await serviceHealthProfession.addProfession(resultOne);
        resultFinal.setUsers(user)
        //res.send(resultFinal)
        res.status(200).json({success:true})

    }
    catch(error){
        console.log(error)
        throw error
        }

}
 */

const addHealthProfessions = async (req, res) => {
    try {
        const { name, lastname, profession, enrollment, prepaidSocialWork, zone, email, socialmedia, userId } = req.body;
        const resultOne = { name, lastname, profession, enrollment, prepaidSocialWork, zone, email, socialmedia, userId  };
        console.log(resultOne)
        const resultFinal = await serviceHealthProfession.addProfession(resultOne,userId)
        if(resultFinal.error)return res.status(400).json(resultFinal.msj)
        //res.send(resultFinal)
        res.status(200).json({success:true})

    }
    catch(error){
        console.log(error)
        throw error
        }

}

const getProfessions = async (req, res) => {
   const prof = await serviceHealthProfession.getAllProfessions();
   console.log(prof)
   res.status(200).json(prof)
}

 

/* 
async function getProfessions(req, res) {
    let {name} = req.query;
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
          return res.status(200).json(professions)
      }
      
    } catch (error) {
      console.log(error);
      throw error;
    }
  } */
  

module.exports = { addHealthProfessions, getProfessions }; 


/* {
    "name": "maria",
    "lastname":"mahaj",
    "enrollment": "123456",
    "zone": "centro",
    "prepaidSocialWork": "prepaid",
    "email": "maria@email.com",
    "socialMedia": "@maria"
} */