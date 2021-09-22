const nodemailer = require("nodemailer");

const { GMAIL, GMAIL_PASS } = process.env;

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