const {Router} = require ('express');
const {getAllNewsById} = require ('../controllers/news');
const router = Router();
router.get('/:id/',getAllNewsById);

module.exports = router;