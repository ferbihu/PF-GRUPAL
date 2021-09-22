const { DataTypes } = require('sequelize');

module.exports = function(sequelize) {
     return sequelize.define('healthProfession', {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull:false
        },
        profession: {
            type: DataTypes.STRING,
            allowNull: false
        },
        enrollment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zone:{
          type: DataTypes.STRING,
          allowNull:true  
        },
        prepaidSocialWork:{
            type: DataTypes.STRING,
            allowNull:true  
          },
        email:{
            type: DataTypes.STRING,
            allowNull:true
        },
        socialmedia:{
            type: DataTypes.STRING,
            allowNull:true
        },
       
    });

} 