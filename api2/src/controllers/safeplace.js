const ServicesSafePlace = require ('../services/safeplace');


const getSafePlaces = async (_req,res)=>{
    res.json(await ServicesSafePlace.getSafePlaces());

};

const postSafePlace = async (req,res) =>{
    try{
        const {
            name,
            lastname,
            country,
            town,
            direction,
            latitude,
            longitude,
            email,
            telephone,
            keyword,
            relation,
            userId
        } = req.body
        // if(!name || !latitude || !longitude || !description || !image || !userId){
        //     return res.status(400)
        // }
        await ServicesSafePlace.postSafePlace(req.body)
            res.status(200).json({success:true})
    }
    catch(error){
    console.log(error)
    throw error
    }
};


module.exports = {getSafePlaces,postSafePlace}