const { Router } = require('express');
const router = Router();
const { Comment, User } = require('../db.js');

router.post('/', async(req, res) => {
    let {
        id,
        description,
        date
    } = req.body;

    const addComment = await Comment.create({
        description,
        date
    });

    const createComment = await User.findAll({
        where: {
            id
        }
    });

    addComment.addUser(createComment)
    return res.status(200).send('Gracias por dejar tu comentario <3') 
});

module.exports = router; 