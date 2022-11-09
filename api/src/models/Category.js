const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Category', {
    codCategory: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    descripCategory:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};
