const {SafePlace,User} = require('../db');
const clientId = process.env


async function getSafePlaces(){
    try{
        return await SafePlace.findAll({
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
    let createNewSafePlace = await SafePlace.create(data)
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

module.exports = {getSafePlaces,postSafePlace, deleteSafePlace}