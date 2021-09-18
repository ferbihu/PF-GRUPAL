require('dotenv').config();
const { Sequelize } = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const userModel = require('./models/User.js');
const commentModel = require('./models/commentnotice.js');
const safePlaceModel = require('./models/safePlace.js');
const noticeModel = require('./models/noticias.js');
const commentSafePlace = require('./models/commentSafePlace.js');
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
const CommentSafePlace = commentSafePlace(sequelize);
const CommentNotice = commentModel(sequelize);
//uno a muchos, viaja el id del usuario que hizo el comentario
User.belongsToMany(Notice, { through: CommentNotice,foreignKey:"userId"});
Notice.belongsToMany(User, { through: CommentNotice,foreignKey:"noticeId"});


User.hasMany(SafePlace,{as:"safePlaceUser",foreignKey:"userId"});
//un lugar seguro pertenece a un usuario 
SafePlace.belongsTo(User,{as:"safePlaceCreator",foreignKey:"userId"});

SafePlace.hasMany(CommentSafePlace,{as:"safePlaceComments",foreingKey : "safePlaceId"});
User.hasMany(CommentSafePlace,{as:"comments",foreignKey : "userId"});
CommentSafePlace.belongsTo(User,{as:"creator",foreignKey : "userId"});
CommentSafePlace.belongsTo(SafePlace,{as:"safePlace",foreingKey : "safePlaceId"});

//Un usuario 'admin' puede publicar una notici
Notice.belongsTo(User)
User.hasMany(Notice)




module.exports = {
    conn: sequelize,
    User,
    Notice,
    SafePlace,
    CommentSafePlace,
    CommentNotice,
  }
