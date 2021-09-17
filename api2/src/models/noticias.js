const { DataTypes } = require('sequelize');



module.exports = function (sequelize) {
    return sequelize.define('notices', {
        title: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status:{
            type:DataTypes.ENUM("accepted","delete"),
            allowNull: false
        },
    }, { timestamps: false }
    );
};