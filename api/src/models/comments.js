const { DataTypes } = require("sequelize");

module.exports = function (sequelize) {
    return sequelize.define("comments", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    }, { timestamps: false }
    );
};