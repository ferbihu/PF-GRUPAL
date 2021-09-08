const ServicesSafePlace = require ('../services/safeplace');


const getSafePlaces = async (_req,res)=>{
    res.json(await ServicesSafePlace.getSafePlaces());

};

const postSafePlace = async (req,res) =>{
    try{
        await ServicesSafePlace.postSafePlace(req.body)
            res.status(200).json({success:true})
    }
    catch(error){
    console.log(error)
    throw error
    }
};
 const deleteSafePlace = async (req, res)=> {
     try{
    res.json(await ServicesSafePlace.deleteSafeplace());
     return res.status(200).send(deleteSafePlace)
    }
    catch(error){
        console.log(error)
        throw error
   }
 }


module.exports = {getSafePlaces,postSafePlace, deleteSafePlace}