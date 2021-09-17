const {CommentSafePlace,User} = require('../db');



async function newComment(data){
    let newComment = await CommentSafePlace.create(data)
};


async function getComments(){
    try{
        return await CommentSafePlace.findAll({
            include:[{
                model:User,
                as: 'creator',
                attributes : ['name','id']
            }]
        });
    }
    catch(error){
        console.log(error)
        throw error
    };
};


module.exports = {newComment,getComments}