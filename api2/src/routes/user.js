const {Router} = require ('express');
const {getUserById,updateUserData} = require('../controllers/user');
const {checkJwt} = require('../middlewares/jwt');
const {User} = require('../db.js');


const router = Router();

router.get('/:id',getUserById);
router.patch('/:id',checkJwt,updateUserData);

router.put('/admin/:id/:role', async (req, res) => {
    const {id} = req.params
    const {role} = req.params
    if(role === 'regular') {
        await User.update({
            role: 'admin'
        }, {
            where: {
                id: id
            }}
        )
    } 
    return res.status(200).send('Cambiaste de roll')
})

router.get('/all/users', async(req, res) => {
    const {name} = req.query;
    const users = await User.findAll()
    if(!name) {
        return res.status(200).send(users);
    } else {
        const byName = await users.filter(i => i.name.toLowerCase().includes(name.toLowerCase()))
        byName.length ?
        res.status(200).send(byName) :
        res.status(404).send('Usuario no encontrado')
    }
});


module.exports = router;