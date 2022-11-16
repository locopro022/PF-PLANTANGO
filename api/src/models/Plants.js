const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Plants",
    {
      codPlant: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
        unique: true,
      },
      namePlant: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      descripPlant: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      ubication: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      ligth: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      whater: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      size: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      type: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      climate: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      toxicity: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      statePlant: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      imagePlant: {
        type: DataTypes.TEXT,
        defaultValue:
          "https://th.bing.com/th/id/R.30a41d29ac9adfdb0c32e12b70e08596?rik=3uvzuV4vwixyeA&pid=ImgRaw&r=0",
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
