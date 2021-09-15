const {Router} = require ('express');
const { getComments,postComments,changeStatusComments } = require('../controllers/comments');
const {postCommentSchema} = require('../schemas/comments');
const {validateBody} =require('../middlewares/validateSchema');
const {checkJwt} = require('../middlewares/jwt');
const {isAdminUser} = require('../middlewares/user');

const router = Router();

router.get('/',getComments);
router.post('/',checkJwt,validateBody(postCommentSchema),postComments);
router.post('/:id/:status',checkJwt,isAdminUser,changeStatusComments);

module.exports = router;

