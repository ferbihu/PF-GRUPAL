const { Router } = require('express');
const {checkJwt} = require('../middlewares/jwt');
const router = Router();

const { addHealthProfessions, getProfessions } = require("../controllers/healthProfessions");


router.post('/', checkJwt, addHealthProfessions);
router.get('/get_profession', getProfessions);

module.exports = router;