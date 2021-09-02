const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('map', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }, { timestamps: false }
    );
};

//Aquí no se que poner, porque no se como funcione la app del mapa.