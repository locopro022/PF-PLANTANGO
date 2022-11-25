const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Comentarios",
    {
      codComent: {
        type: DataTypes.UUID,
        primaryKey: true,
        unique: true,
        defaultValue: UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
      },
      cont: {
        type: DataTypes.TEXT,
      },
      user: DataTypes.STRING,
      allowNull: false,
    },
    {
      freezeTableName: true,
    }
  );
};