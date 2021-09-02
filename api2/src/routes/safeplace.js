const {Router} = require ('express');
const {getSafePlaces} = require ('../controllers/safeplace');


const router = Router();

router.get('/',getSafePlaces);

module.exports = router;