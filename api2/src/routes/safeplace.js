const {Router} = require ('express');
const {getSafePlaces} = require ('../controllers/safeplace');
const { postSafePlace } = require('../controllers/safeplace');


const router = Router();

router.get('/',getSafePlaces);
router.post('/',postSafePlace);



module.exports = router;