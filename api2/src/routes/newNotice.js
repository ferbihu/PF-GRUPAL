const {Router} = require ('express');
const {User, Notice} = require('../db.js');
const router = Router();

router.get('/news', async(req, res) => {
    const newsN = await Notice.findAll()
    return res.status(200).send(newsN);
})

router.post('/', async(req, res) => {
    let {
        id,
        title,
        image,
        content,
        date,
        status
    } = req.body;

    const newNews = await Notice.create({
        title,
        image,
        content,
        date,
        status
    });

    const createNews = await User.findAll({
        where: {
            id
        }
    });

    newNews.addUser(createNews)
    return res.status(200).send('Noticia publicada con exito')
}); 

module.exports = router;