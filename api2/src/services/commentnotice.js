const {CommentNotice} = require('../db');

async function getComments(id){
    try{
        return await CommentNotice.findAll({
            where:{status: "accepted",noticeId:id}
        });
    }
    catch(error){
        console.log(error)
        throw error
    };
};

async function postComments(data){
    let createNewComment = await CommentNotice.create({...data,status:"accepted"})
};

async function deleteComments(id) {
        try{
            await COmmentNotice.update({...body},{where:{id}})
        }
        catch(error){
            console.log(error)
            throw error
        }
    
    };
    



module.exports = {getComments,postComments,deleteComments}