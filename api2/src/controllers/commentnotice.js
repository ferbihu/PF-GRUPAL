const ServicesCommentNotice = require ('../services/commentnotice');


const getComments = async (req,res)=>{
    const {id} = req.params;
    res.json(await ServicesCommentNotice.getComments(id));

};


const postComments = async (req,res) =>{

    try{
        await ServicesCommentNotice.postComments(req.body)
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
    const statusChange = await ServicesCommentNotice.deleteComments({status,description_status},id);
    res.status(200).json({success:true})
};




module.exports = {getComments,postComments,changeStatusComments}