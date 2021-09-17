require('dotenv').config();
const { Sequelize } = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const userModel = require('./models/User.js');
const commentModel = require('./models/commentnotice.js');
const safePlaceModel = require('./models/safePlace.js');
const noticeModel = require('./models/noticias.js');
// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/women4women`, {
//     logging: false,
//     native: false,
// });
let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );

const User = userModel(sequelize);
const Notice = noticeModel(sequelize);
const SafePlace = safePlaceModel(sequelize);
const CommentNotice = commentModel(sequelize);
//uno a muchos, viaja el id del usuario que hizo el comentario
User.belongsToMany(Notice, { through: CommentNotice });
Notice.belongsToMany(User, { through: CommentNotice });

User.hasMany(SafePlace,{as:"safePlaceUser",foreignKey:"userId"});
//un lugar seguro pertenece a un usuario 
SafePlace.belongsTo(User,{as:"safePlaceCreator",foreignKey:"userId"});

module.exports = {
    conn: sequelize,
    User,
    Notice,
    SafePlace,
    CommentNotice
  }