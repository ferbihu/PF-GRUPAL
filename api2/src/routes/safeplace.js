const {Router} = require ('express');
const {getSafePlaces} = require ('../controllers/safeplace');
<<<<<<< HEAD
const {deleteSafePlace} = require ('../controllers/safeplace');
const { postSafePlace } = require('../controllers/safeplace');
=======
const { postSafePlace,changeStatusSafePlace } = require('../controllers/safeplace');
>>>>>>> ffb20043a4b0f42ecaba1c12c0b3941c026199c1
const {postSafePlaceSchema} = require('../schemas/safePlace');
const {validateBody} =require('../middlewares/validateSchema');
const {checkJwt} = require('../middlewares/jwt');
const {isAdminUser} = require('../middlewares/safePlace');

const router = Router();

router.get('/',getSafePlaces);
//router.post('/',checkJwt,validateBody(postSafePlaceSchema),postSafePlace);
router.post('/',checkJwt,validateBody(postSafePlaceSchema),postSafePlace);
<<<<<<< HEAD
router.get('/',deleteSafePlace);
=======
router.post('/:id/:status',checkJwt,isAdminUser,changeStatusSafePlace);
>>>>>>> ffb20043a4b0f42ecaba1c12c0b3941c026199c1


module.exports = router;