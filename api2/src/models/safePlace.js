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
        lastname:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        country:{
            type: DataTypes.STRING,
            allowNull:false,
        },
        town:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        direction:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        latitude: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        longitude: {
            type: DataTypes.DOUBLE,
            allowNull: true,
        },
        mail:{
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
        
    }, 
    { timestamps: false }
    );
};