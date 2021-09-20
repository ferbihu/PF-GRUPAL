const {Notice} = require('../db');

async function getAllNewsById(id){
    try{
    return await Notice.findAll({
        where:{id}
    });
    }
    catch(error){
        console.log(error)
        throw error 
    }
};


module.exports = { getAllNewsById}