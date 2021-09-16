const Joi = require('joi');

const postUsernoticeSchema = Joi.object({
    title:Joi.string().required(),
    description:Joi.string().required(),
    date:Joi.date().required(),
    status:Joi.string(),
    userId:Joi.number().required()
});
module.exports ={postUsernoticeSchema}