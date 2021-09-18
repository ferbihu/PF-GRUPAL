const ServicesCommentSafePlace = require('../services/commentSafePlace');


const newComment = async (req,res) =>{
    const {comment_text, userId, safePlaceId} = req.body;
    console.log(comment_text)
    try{
        await ServicesCommentSafePlace.newComment({comment_text, userId, safePlaceId})
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