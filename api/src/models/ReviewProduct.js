const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "ReviewProduct",
    {
      codProd: {
        type: DataTypes.INTEGER,
        forengnKey: true,
      },
      starsReview: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      textReview: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dateReview: {
        type: DataTypes.DATEONLY,
        defaultValue: new Date(),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
