const nodemailer = require("nodemailer");

const { GMAIL, GMAIL_PASS } = process.env;

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//         user: GMAIL,
//         pass: PASS_GMAIL,
//     },
//     debug:false,
//     tls: {
//         rejectUnauthorized: false
//     } 
// })

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: GMAIL,
        pass: GMAIL_PASS
    }
});
module.exports = { transporter };