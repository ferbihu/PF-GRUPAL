const Joi = require('joi');

const postSafePlaceSchema = Joi.object({
    name:Joi.string().required(),
    country:Joi.string().required(),
    town:Joi.string().required(),
    street: Joi.string().required(),
    number:Joi.string().required(),
    postcode:Joi.string(),
    lat:Joi.number(),
    lng:Joi.number(),
    email:Joi.string().email({ minDomainSegments: 2 }),
    telephone:Joi.string().required(),
    keyword:Joi.string().required(),
    relation:Joi.string().required(),
    status:Joi.string(),
    userId:Joi.number().required()
});
module.exports ={postSafePlaceSchema}
