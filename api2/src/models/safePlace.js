const { DataTypes } = require('sequelize');



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
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        lng: {
            type: DataTypes.FLOAT,
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
        status:{
            type:DataTypes.ENUM("accepted","pending","warning","rejected"),
            allowNull: false
        },
        description_status:{
            type:DataTypes.STRING,
            allowNull:true
        }
    }, 
    { timestamps: false }
    );
};