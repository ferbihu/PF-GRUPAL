const {Router} = require ('express');
const {getSafePlaces} = require ('../controllers/safeplace');
const { postSafePlace,changeStatusSafePlace, deleteSafePlace,getAllSafePlaces,changeStatusWarnign } = require('../controllers/safeplace');
const {postSafePlaceSchema} = require('../schemas/safePlace');
const {validateBody} =require('../middlewares/validateSchema');
const {checkJwt} = require('../middlewares/jwt');
const {isAdminUser} = require('../middlewares/user');
const {newComment,getComments} = require('../controllers/commentSafePlace');



const router = Router();

router.get('/',getSafePlaces);

router.post('/',checkJwt,validateBody(postSafePlaceSchema),postSafePlace);

router.post('/new_comment',checkJwt,newComment);
router.get('/all_comments',getComments);

router.post('/:id/:status',checkJwt,isAdminUser,changeStatusSafePlace);
router.post('/:id/:status',checkJwt,changeStatusWarnign);

router.get('/:id/',deleteSafePlace);

router.get('/admin/all_safe_place',checkJwt,isAdminUser,getAllSafePlaces);







module.exports = router;

