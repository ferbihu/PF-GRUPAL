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

User.hasMany(Comment)
Comment.belongsTo(User)

User.hasMany(SafePlace)
SafePlace.belongsTo(User) 

module.exports = {
    sequelize,
    User,
    Comment,
    Map,
    SafePlace
}
