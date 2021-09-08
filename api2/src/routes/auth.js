/* rutas del usuario*/
const {Router} = require('express');
const {check}= require('express-validator');
const {validateInput}= require('../middlewares/validateInput');
const {login,createNewUser}= require('../controllers/auth');
//const {validateJwt }= require('../middlewares/validateJwt');
const {definedUserRole} = require('../middlewares/user')


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


module.exports = router;