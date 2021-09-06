const { transporter } = require("../utils/index");

const sendMailNewUser = async (req, res, next) => {
    var { email } = req.body;
    email = email.toLowerCase();
    await transporter.sendMail({
        from: `Safety <womanforwoman15@gmail.com>`,
        to: email,
        subject: "Bienvenido a Safety!",
        text: "Hola! Nos alegra que te hayas incorporado a la comunidad Safety. A continuación te enviamos un PDF con información sobre nuestro sitio. Podes ponerte en contacto con nosotras escribiendonos a women4women@gmail.com en caso de necesitar ayuda con algo.",
        html: `<p>Hola! Nos alegra que te hayas incorporado a la comunidad Safety. A continuación te enviamos un PDF con información sobre nuestro sitio. Podes ponerte en contacto con nosotras escribiendonos a women4women@gmail.com en caso de necesitar ayuda con algo.</p>`
    })
}

module.exports = {
    sendMailNewUser
}