
const {SafePlace,User} = require('../db');



async function getSafePlaces(){
    try{
        return await SafePlace.findAll({
            where:{status: "accepted" },
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


async function deleteSafePlace(id) {
    try{
     return await SafePlace.destroy({
         where: { id }    
    });
    }
 catch(error){
        console.log(error)
        throw error
       };
  
};

async function getAllSafePlaces(){
    try{
    return await SafePlace.findAll({
        include:[{
            model:User,
            as: 'safePlaceCreator',
            attributes : ['name','id','email']
        }]
    })
    }
    catch(error){
        console.log(error)
        throw error 
    }
};



module.exports = {getSafePlaces,postSafePlace,editSafePlaceByPK, deleteSafePlace,getAllSafePlaces}