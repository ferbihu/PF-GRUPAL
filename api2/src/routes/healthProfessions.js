const { Router } = require('express');
const router = Router();

const { addHealthProfessions, getProfessions } = require("../controllers/healthProfessions");


router.post('/', addHealthProfessions);
router.get('/get_profession', getProfessions)

module.exports = router;