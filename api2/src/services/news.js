const {Notice} = require('../db');



async function getNewsById(id){
    try{
        return await Notice.findAll({
            where:{id:id}
        });
    }
    catch(error){
        console.log(error)
        throw error
    };
};


module.exports = {getNewsById}