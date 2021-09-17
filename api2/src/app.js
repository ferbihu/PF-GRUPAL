const express= require('express');
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const server= express();



require('./db.js');

server.use(morgan('dev'));

// limitar las peticiones a mi sitio
server.use(cors())

//server.use(express.static('client'));

//parceo de los req
server.use(express.json() );

// rutas

server.use('/auth', require('./routes/auth') );

server.use('/safe_place',require ('./routes/safeplace'))

server.use("/email", require("./routes/nodemailer"))

server.use("/delete_safe_place", require("./routes/safeplace"))

server.use('/user', require('./routes/user'));

server.use("/comments", require("./routes/commentnotice"))

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
server.use(
    cors({
      origin: "*", //"*"
      credentials: true,
      methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    })
);


server.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
})


module.exports = server;