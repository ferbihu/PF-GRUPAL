
const {SafePlace,User} = require('../db');
const clientId = process.env


async function getSafePlaces(){
    try{
        return await SafePlace.findAll({
            where:{status: "accepted"},
            include:[{
                model:User,
                as: 'safePlaceCreator',
                attributes : ['name','id','email']
            }]
        });
    }
    catch(error){
        console.log(error)
        throw error
    };
};

async function postSafePlace(data){
    let createNewSafePlace = await SafePlace.create({...data,status:"pending"})
};



async function editSafePlaceByPK(body,id){
    try{
        await SafePlace.update({...body},{where:{id}})
    }
    catch(error){
        console.log(error)
        throw error
    }
};

async function deleteSafePlace(req, res) {
    const id = req.params.id;
    try{
     return await SafePlace.destroy({
         where: {
            name: {id: id}
        }
    });
}
 catch(error){
        console.log(error)
        throw error
       };
  
    }

<<<<<<< HEAD
module.exports = {getSafePlaces,postSafePlace, deleteSafePlace}
=======


module.exports = {getSafePlaces,postSafePlace,editSafePlaceByPK}
>>>>>>> ffb20043a4b0f42ecaba1c12c0b3941c026199c1
