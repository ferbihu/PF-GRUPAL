const {Router} = require ('express');
const {getSafePlaces} = require ('../controllers/safeplace');
const { postSafePlace } = require('../controllers/safeplace');
const {postSafePlaceSchema} = require('../schemas/safePlace');
const {validateBody} =require('../middlewares/validateSchema');
const {checkJwt} = require('../middlewares/jwt');

const router = Router();

router.get('/',getSafePlaces);
router.post('/',checkJwt,validateBody(postSafePlaceSchema),postSafePlace);



module.exports = router;