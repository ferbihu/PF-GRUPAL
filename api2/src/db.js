require('dotenv').config();
const { Sequelize } = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST,} = process.env;

const userModel = require('./models/User.js');
const commentModel = require('./models/comments.js');
const mapModel = require('./models/map.js');
const safePlaceModel = require('./models/safePlace.js');

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/women4women`, {
    logging: false,
    native: false,
});

const User = userModel(sequelize);
const Comment = commentModel(sequelize);
const Map = mapModel(sequelize);
const SafePlace = safePlaceModel(sequelize);
//uno a muchos, viaja el id del usuario que hizo el comentario
User.hasMany(Comment,{as:"comment",foreignKey:"userId"})
Comment.belongsTo(User,{as:"comentUser",foreignKey:"userId"});

User.hasMany(SafePlace,{as:"safePlaceUser",foreignKey:"userId"});
//un lugar seguro pertenece a un usuario 
SafePlace.belongsTo(User,{as:"safePlaceCreator",foreignKey:"userId"});

module.exports = {
    conn: sequelize,
    User,
    Comment,
    Map,
    SafePlace
} 
