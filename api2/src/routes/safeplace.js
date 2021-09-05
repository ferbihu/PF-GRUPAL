const {Router} = require ('express');
const {getSafePlaces} = require ('../controllers/safeplace');
const { postSafePlace } = require('../controllers/safeplace');
const {postSafePlaceSchema} = require('../schemas/safePlace');
const {validateBody} =require('../middlewares/validateSchema');

const router = Router();

router.get('/',getSafePlaces);
router.post('/',validateBody(postSafePlaceSchema),postSafePlace);



module.exports = router;