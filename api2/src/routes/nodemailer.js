const { transporter } = require("../utils/index");
const express = require("express");
const router = require("express").Router();
router.use(express.json());
const { GMAIL } = process.env;
const path = require('path')


router.post("/welcome", async (req, res, next) => {
    try {
        var {email} = req.body;
        await transporter.sendMail({
            from: `"Safety" <${GMAIL}>`,
            to: email,
            subject: "Bienvenido a Safety!",
            text: "Hola! Nos alegra que te hayas incorporado a la comunidad Safety. A continuación te enviamos un PDF con información sobre nuestro sitio. Podes ponerte en contacto con nosotras escribiendonos a women4women@gmail.com en caso de necesitar ayuda con algo.",
            html: `<p>Hola! Nos alegra que te hayas incorporado a la comunidad Safety. A continuación te enviamos un PDF con información sobre nuestro sitio. Podes ponerte en contacto con nosotras escribiendonos a women4women@gmail.com en caso de necesitar ayuda con algo.</p>`,
            attachments: [{
                filename: 'MailingBienvenida.pdf',
                path :`${process.cwd()}/src/pdfs/MailingBienvenida.pdf`,
                contentType: 'application/pdf'
            }],
        })
        res.json({ success: "Email sent" });
    } catch(err) {
        console.log(err.message);
    }
})





router.post("/registroSafePlace", async (req, res, next) => {
    try{   
        var { email } = req.body;
        console.log("aca esta email", email)
        await transporter.sendMail({
            from: `"Safety" <${GMAIL}>`,
            to: email,
            subject: "Registrá tu lugar seguro",
            text: "Hola! Muchas gracias por sumarte a nuestra plataforma. Por favor, luego de leer el protocolo adjuntado en este mail como PDF, completá el siguiente formulario que corresponde a una declaración jurada acá: https://forms.gle/f1mdwyQz4CgM5FcNA. Vamos a revisar tu solicitud y te vamos a enviar un mail para avisarte si fue aceptado, y ya aparece en nuestro mapa! Saludos, equipo Safety.",
            html: `<p>Hola! Muchas gracias por sumarte a nuestra plataforma. Por favor, luego de leer el protocolo adjuntado en este mail como PDF, completá el siguiente formulario que corresponde a una declaración jurada acá: https://forms.gle/f1mdwyQz4CgM5FcNA. Vamos a revisar tu solicitud y te vamos a enviar un mail para avisarte si fue aceptado, y ya aparece en nuestro mapa! Saludos, equipo Safety.</p>`,
            attachments: [{
                filename: 'MailingProtocolo.pdf',
                path: `${process.cwd()}/src/pdfs/MailingProtocolo.pdf`,
                contentType: 'application/pdf'
            }],
        })
        res.json({ success: "Email sent"})
    } catch(err) {
        next(err)
    }
})

router.post("/accepted", async (req, res, next) => {
    try {
        var {email} = req.body;
        await transporter.sendMail({
            from: `"Safety" <${GMAIL}>`,
            to: email,
            subject: "Tu lugar fue aceptado!",
            text: "Hola! Tu lugar fue aceptado y ya esta visibile en el mapa! Por favor, te pedimos compromiso con el protocolo. Cualquier duda no dudes en contactarnos por acá. Saludos, equipo Safety.",
            html: `<p>Hola! Tu lugar fue aceptado y ya esta visibile en el mapa! Por favor, te pedimos compromiso con el protocolo. Cualquier duda no dudes en contactarnos por acá. Saludos, equipo Safety.</p>`
        })
    } catch(err) {
        next(err);
    }
})

router.post("/rejected", async (req, res, next) => {
    try {
        var {email} = req.body;
        await transporter.sendMail({
            from: `"Safety" <${GMAIL}>`,
            to: email,
            subject: "Tu lugar fue rechazado.",
            text: "Hola! Por motivos de seguridad tu lugar fue rechazado. Si crees que es un error, volve a hacer el registro de tu lugar para que podamos revisarlo. Saludos, equipo Safety.",
            html: `<p>Hola! Por motivos de seguridad tu lugar fue rechazado. Si crees que es un error, volve a hacer el registro de tu lugar para que podamos revisarlo. Saludos, equipo Safety.</p>`
        })
    } catch(err) {
        next(err);
    }
})

module.exports = router;
