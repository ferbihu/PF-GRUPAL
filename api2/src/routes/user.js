const {Router} = require ('express');
const {getUserById,updateUserData} = require('../controllers/user');
const {checkJwt} = require('../middlewares/jwt');


const router = Router();

router.get('/:id',getUserById);
router.patch('/:id',checkJwt,updateUserData);


module.exports = router;