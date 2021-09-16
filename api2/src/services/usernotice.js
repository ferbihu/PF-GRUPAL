const {User_Notice} = require('../db');
const clientId = process.env


async function getComments(){
    try{
        return await User_Notice.findAll({
            where:{status: "accepted"},
            include:[{
                model:User,
                as: 'User_NoticeCreator',
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
    let createNewComment = await User_Notice.create({...data,status:"accepted"})
};

async function deleteComments(id) {
        try{
            await User_Notice.update({...body},{where:{id}})
        }
        catch(error){
            console.log(error)
            throw error
        }
    
    };
    



module.exports = {getComments,postComments,deleteComments}