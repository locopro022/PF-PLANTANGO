const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('User', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    username:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    email:{
      unique:true,
      allowNull: false,
      type: DataTypes.STRING
    },
    pass:{
      type: DataTypes.STRING
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};
