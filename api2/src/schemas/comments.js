const Joi = require('joi');

const postCommentSchema = Joi.object({
    description:Joi.string().required(),
    date:Joi.date().required(),
    status:Joi.string(),
    userId:Joi.number().required()
});
module.exports ={postCommentSchema}
