/* rutas del usuario*/
const {Router} = require('express');
const {check}= require('express-validator');
const {validateInput}= require('../middlewares/validateInput');
const {login,createNewUser}= require('../controllers/auth');
//const {validateJwt }= require('../middlewares/validateJwt');
const {definedUserRole} = require('../middlewares/user')
const { User } = require('../db.js');


const router = Router();


router.post(
    '/new',
    [// middleware de express validator
       check('name', 'El nombre es obligatoria').not().isEmpty(),
        check('email', 'El email es obligatoria').isEmail(),
        check('password', 'El password es obligatoria').isLength({min: 8}),
        validateInput
    ],
    definedUserRole,
    createNewUser);

router.post(
    '/login',
    [// middleware de express validator
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password es obligatoria').isLength({min: 8}),
        validateInput
    ],
    login) ;

// router.get('/renew',validateJwt, validateToken);

router.put('/login/:id/:role', async (req, res) => {
    const {id} = req.params
    const {role} = req.params
    console.log(id, role)
    if(role === true) {
        await User.update({
            role: false
        }, {
            where: {
                id: id
            }}
        )
    } else {
        await User.update({
            role: true
        }, {
            where: {
                id: id
            }}
        )
    }
    return res.status(200).send('Cambiaste de roll')
})

module.exports = router; 