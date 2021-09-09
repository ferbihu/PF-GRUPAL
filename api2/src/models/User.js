const { DataTypes } = require('sequelize');
const  { sequelize } = require('../db');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

// defino el modelo
module.exports = function(sequelize) {
     return sequelize.define('user', {

        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname:{
            type: DataTypes.STRING,
            allowNull:true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        phone:{
          type: DataTypes.STRING,
          allowNull:true  
        },
        town:{
            type: DataTypes.STRING,
            allowNull:true
        },
        country:{
            type: DataTypes.STRING,
            allowNull:true
        },
        role:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    });

} 