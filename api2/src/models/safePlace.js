const { DataTypes } = require('sequelize');
const  { sequelize } = require('../db');


module.exports = function (sequelize) {
    return sequelize.define('safePlaces', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        country:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        town:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        street:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        number:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        postcode:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        lat: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        lng: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        telephone:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        keyword:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        relation: {
            type: DataTypes.STRING,
            allowNull: false
        },
<<<<<<< HEAD
        
        
=======
        status:{
            type:DataTypes.ENUM("accepted","pending","warning","rejected"),
            allowNull: false
        },
        description_status:{
            type:DataTypes.STRING,
            allowNull:true
        }
>>>>>>> ffb20043a4b0f42ecaba1c12c0b3941c026199c1
    }, 
    { timestamps: false }
    );
};