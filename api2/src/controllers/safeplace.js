const ServicesSafePlace = require ('../services/safeplace');


const getSafePlaces = async (_req,res)=>{
    res.json(await ServicesSafePlace.getSafePlaces());

};

const getAllSafePlaces = async(req,res) =>{
    res.json(await ServicesSafePlace.getAllSafePlaces());
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
    const {id,status} = req.params;
    const {description_status = ""} = req.body;
    const statusChange = await ServicesSafePlace.editSafePlaceByPK({status,description_status},id);
    res.status(200).json({success:true})
};


const deleteSafePlace = async (req, res)=> {
    try{
   const {id} = req.params;
   const safePlaceDelete = await ServicesSafePlace.deleteSafePlace(id);
   return res.status(200).send("ok")
   }
   catch(error){
       console.log(error)
       throw error
  }
}



module.exports = {getSafePlaces,postSafePlace,changeStatusSafePlace, deleteSafePlace,getAllSafePlaces}