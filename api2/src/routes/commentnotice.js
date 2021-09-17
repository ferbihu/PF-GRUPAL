const {Router} = require ('express');
const { getComments,postComments,changeStatusComments } = require('../controllers/commentnotice');
const {postCommentnoticeSchema} = require('../schemas/commentNotice');
const {validateBody} =require('../middlewares/validateSchema');
const {checkJwt} = require('../middlewares/jwt');
const {isAdminUser} = require('../middlewares/user');

const router = Router();

router.get('/',getComments);
router.post('/',checkJwt,validateBody(postCommentnoticeSchema),postComments);
router.post('/:id/:status',checkJwt,isAdminUser,changeStatusComments);

module.exports = router;

