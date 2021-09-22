const {Router} = require ('express');
const {User, Notice} = require('../db.js');
const router = Router();

router.get('/news', async(req, res) => {
    const newsN = await Notice.findAll()
    return res.status(200).send(newsN);
})

router.post('/', async(req, res) => {
    // let {id, title, content, image} = req.body;
    // console.log(title, content, image, id)
    let {input, image2, id} = req.body;
    console.log(input.title,input.content, image2)
    let fecha = await new Date();
    let date = await fecha.getDate()

    const newNews = await Notice.create({
        title: input.title,
        image: image2,
        content: input.content,
        date,
        status: "accepted"
    });

    // const createNews = await User.findAll({
    //     where: {
    //         id
    //     }
    // });
    // console.log(createNews)

    await newNews.setUser(id)
    return res.status(200).send('Noticia publicada con exito')
}); 

module.exports = router;