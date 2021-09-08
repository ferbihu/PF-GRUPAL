const {Router} = require ('express');
const {getSafePlaces} = require ('../controllers/safeplace');
const { postSafePlace,changeStatusSafePlace } = require('../controllers/safeplace');
const {postSafePlaceSchema} = require('../schemas/safePlace');
const {validateBody} =require('../middlewares/validateSchema');
const {checkJwt} = require('../middlewares/jwt');
const {isAdminUser} = require('../middlewares/user');

const router = Router();

router.get('/',getSafePlaces);
//router.post('/',checkJwt,validateBody(postSafePlaceSchema),postSafePlace);
router.post('/',checkJwt,validateBody(postSafePlaceSchema),postSafePlace);
router.post('/:id/:status',checkJwt,isAdminUser,changeStatusSafePlace);
router.get('/:id/',deleteSafePlace);

module.exports = router;