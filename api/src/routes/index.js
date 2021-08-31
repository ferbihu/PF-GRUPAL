const {Router} = require("express");
const router = Router();
const safe = require("./safeplaces");


router.use("/safe", safe);

module.exports = router;