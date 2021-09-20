const ServicesNewsById = require ('../services/news');



const getNewsById = async (req, res)=> {
    try{
   const {id} = req.params;
   const getnewId = await ServicesNewsById.getNewsById(id);
   return res.json(getnewId)
   }
   catch(error){
       console.log(error)
       throw error
  }
}


module.exports = {getNewsById}