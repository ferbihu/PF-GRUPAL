const { transporter } = require("../utils/index");
const express = require("express");
const router = require("express").Router();
router.use(express.json());
const { GMAIL } = process.env;


router.post("/welcome", async (req, res, next) => {
    try {
        var {email} = req.body;
        console.log("aca esta email", email)
        await transporter.sendMail({
            from: `"Safety" <${GMAIL}>`,
            to: email,
            subject: "Bienvenido a Safety!",
            text: "Hola! Nos alegra que te hayas incorporado a la comunidad Safety. A continuación te enviamos un PDF con información sobre nuestro sitio. Podes ponerte en contacto con nosotras escribiendonos a women4women@gmail.com en caso de necesitar ayuda con algo.",
            html: `<p>Hola! Nos alegra que te hayas incorporado a la comunidad Safety. A continuación te enviamos un PDF con información sobre nuestro sitio. Podes ponerte en contacto con nosotras escribiendonos a women4women@gmail.com en caso de necesitar ayuda con algo.</p>`
        })
        res.json({ success: "Email sent" });
    } catch(err) {
        console.log(err.message);
    }
})


module.exports = router;
