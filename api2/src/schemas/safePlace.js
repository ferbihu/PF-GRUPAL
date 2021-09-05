const Joi = require('joi');

const postSafePlaceSchema = Joi.object({
    name:Joi.string().required(),
    lastname:Joi.string().required(),
    country:Joi.string().required(),
    town:Joi.string().required(),
    direction: Joi.string().required(),
    latitude:Joi.string(),
    longitude:Joi.string(),
    email:Joi.string().email({ minDomainSegments: 2 }),
    telephone:Joi.string().required(),
    keyword:Joi.string().required(),
    relation:Joi.string().required(),
    userId:Joi.number().required()
});
module.exports ={postSafePlaceSchema}
