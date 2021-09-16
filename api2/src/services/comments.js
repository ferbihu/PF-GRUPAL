const {commentModel} = require('../db');
const clientId = process.env


async function getComments(){
    try{
        return await Comment.findAll({
            where:{status: "accepted"},
            include:[{
                model:User,
                as: 'commentCreator',
                attributes : ['name','id','email']
            }]
        });
    }
    catch(error){
        console.log(error)
        throw error
    };
};

async function postComments(data){
    let createNewComment = await Comment.create({...data,status:"accepted"})
};

async function deleteComments(id) {
        try{
            await Comment.update({...body},{where:{id}})
        }
        catch(error){
            console.log(error)
            throw error
        }
    
    };
    



module.exports = {getComments,postComments,deleteComments}