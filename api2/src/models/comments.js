const { DataTypes } = require('sequelize');

module.exports = function (sequelize) {
    return sequelize.define('comments', {
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, { timestamps: false }
    );
};