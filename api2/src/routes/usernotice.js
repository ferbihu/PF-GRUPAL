const {Router} = require ('express');
const { getComments,postComments,changeStatusComments } = require('../controllers/usernotice');
const {postUsernoticeSchema} = require('../schemas/usernotice');
const {validateBody} =require('../middlewares/validateSchema');
const {checkJwt} = require('../middlewares/jwt');
const {isAdminUser} = require('../middlewares/user');

const router = Router();

router.get('/',getComments);
router.post('/',checkJwt,validateBody(postUsernoticeSchema),postComments);
router.post('/:id/:status',checkJwt,isAdminUser,changeStatusComments);

module.exports = router;

