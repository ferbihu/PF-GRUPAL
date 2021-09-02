const {SafePlace,User} = require('../db');



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


module.exports = {getSafePlaces,postSafePlace}