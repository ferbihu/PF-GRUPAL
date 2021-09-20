const {Router} = require ('express');
const {getNewsById} = require ('../controllers/news.js');


const router = Router();
router.get('/:id',getNewsById);
module.exports = router;

