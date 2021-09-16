const ServicesComments = require ('../services/usernotice');


const getComments = async (_req,res)=>{
    res.json(await ServicesComments.getComments());

};


const postComments = async (req,res) =>{
    try{
        await ServicesComments.postComments(req.body)
            res.status(200).json({success:true})
    }
    catch(error){
    console.log(error)
    throw error
    }
};

const changeStatusComments = async (req,res) =>{
    const {id,status} = req.params;
    const {description_status = ""} = req.body;
    const statusChange = await ServicesComments.deleteComments({status,description_status},id);
    res.status(200).json({success:true})
};




module.exports = {getComments,postComments,changeStatusComments}