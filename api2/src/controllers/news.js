const ServicesGetNews = require ('../services/news');

const getAllNewsById = async (req,res) =>{
       try{
             const {id} = req.params;
             const getnews = await ServicesGetNews.getAllNewsById(id)
             return res.status(200).send(getnews)
       }
       catch(error){
              console.log(error)
              throw error
         }
};


module.exports = { getAllNewsById }
