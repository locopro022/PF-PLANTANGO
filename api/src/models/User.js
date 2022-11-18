const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "User",
    {
      idUser: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        unique: true,
        allowNull: false,
        type: DataTypes.STRING,
      },
      pass: {
        type: DataTypes.STRING,
      },
      name: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      creationDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      },
      nPhone: {
        type: DataTypes.STRING,
      },
      admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      hidden: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
