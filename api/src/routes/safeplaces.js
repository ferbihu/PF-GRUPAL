const {Router} = require("express");
const router = Router();

router.get("/", (req, res, next) => {
    try {
        console.log("hola")
        res.send("hola")

    } catch (error) {
        next(error);
    }
})

module.exports = router;