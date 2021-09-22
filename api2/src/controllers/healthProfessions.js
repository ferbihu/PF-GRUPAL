const { HealthProfession, User } = require('../db');
const serviceHealthProfession = require('../services/healthProfessions');


const addHealthProfessions = async (req, res) => {
    try {
        const { name, lastname, profession, enrollment, prepaidSocialWork, zone, email, socialmedia, userId } = req.body;
        const resultOne = { name, lastname, profession, enrollment, prepaidSocialWork, zone, email, socialmedia, userId  };
        console.log(resultOne)
        const resultFinal = await serviceHealthProfession.addProfession(resultOne,userId)
        if(resultFinal.error)return res.status(400).json(resultFinal.msj)
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

 


module.exports = { addHealthProfessions, getProfessions }; 


/* {
    "name": "maria",
    "lastname":"mahaj",
    "profession": "odontologa",
    "enrollment": "123456",
    "zone": "centro",
    "prepaidSocialWork": "prepaid",
    "email": "maria@email.com",
    "socialMedia": "@maria"
} */