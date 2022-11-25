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
      localizacion: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      luz: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      riego: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      dimension: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      tipo: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      clima: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true,
      },
      toxicidad: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      statePlant: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      likes: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      coment:{
        type: DataTypes.ARRAY(DataTypes.STRING)
      }
      ,
      imagePlant: {
        type: DataTypes.TEXT,
        defaultValue:
          "https://th.bing.com/th/id/OIP.dONsu4J4qcyupy4ncv97OgHaMo?pid=ImgDet&rs=1",
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
