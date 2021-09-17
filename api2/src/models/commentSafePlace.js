const { DataTypes } = require('sequelize');


module.exports = function (sequelize) {
    return sequelize.define('commentSafePlace',{

        comment_text :{
            type: DataTypes.STRING,
            allowNull:false,
        }
    })
};
