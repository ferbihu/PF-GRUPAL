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

const changeStatusSafePlace = async (req,res) =>{
    console.log(req.user)
    const {id,status} = req.params;
    const {description_status = ""} = req.body;
    const statusChange = await ServicesSafePlace.editSafePlaceByPK({status,description_status},id);
    res.status(200).json({success:true})
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



module.exports = {getSafePlaces,postSafePlace,changeStatusSafePlace, deleteSafePlace}