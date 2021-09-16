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
    console.log(id, role)
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


module.exports = router;