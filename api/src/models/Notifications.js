const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Notification", {
        usuario: {
            type: DataTypes.STRING,
        },
        horario: {
            type: DataTypes.STRING
        }
    })
}