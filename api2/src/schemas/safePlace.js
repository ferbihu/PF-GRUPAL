const Joi = require('joi');

const postSafePlaceSchema = Joi.object({
    name:Joi.string().required(),
    description:Joi.string().required(),
    country:Joi.string().required(),
    town:Joi.string().required(),
    street: Joi.string().required(),
    number:Joi.string().required(),
    lat:Joi.string(),
    lng:Joi.string(),
    email:Joi.string().email({ minDomainSegments: 2 }),
    telephone:Joi.string().required(),
    keyword:Joi.string().required(),
    relation:Joi.string().required(),
    userId:Joi.number().required()
});
module.exports ={postSafePlaceSchema}
