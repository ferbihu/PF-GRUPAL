const Joi = require('joi');
const { CommentNotice} = require('../db');

const postCommentnoticeSchema = Joi.object({
    description:Joi.string().required(),
    date:Joi.date().required(),
    status:Joi.string(),
    userId:Joi.number(),
    noticeId:Joi.number(),
});
module.exports ={postCommentnoticeSchema}
