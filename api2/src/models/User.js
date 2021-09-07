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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique:true
        },
        role:{
            type:DataTypes.STRING,
            allowNull:false,
        }
    });

 } 