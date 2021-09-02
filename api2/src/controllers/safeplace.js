const ServicesSafePlace = require ('../services/safeplace');

const getSafePlaces = async (_req,res)=>{
    res.json(await ServicesSafePlace.getSafePlaces());

};

module.exports = {getSafePlaces}