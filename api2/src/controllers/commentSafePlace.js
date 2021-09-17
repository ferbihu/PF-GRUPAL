const ServicesCommentSafePlace = require('../services/commentSafePlace');


const newComment = async (req,res) =>{
    try{
        await ServicesCommentSafePlace.newComment(req.body)
            res.status(200).json({success:true})
    }
    catch(error){
    console.log(error)
    throw error
    }
};


const getComments = async (_req,res)=>{
    res.json( await ServicesCommentSafePlace.getComments())
};

module.exports = {newComment,getComments}