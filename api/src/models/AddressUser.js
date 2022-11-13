const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('AddressUser', {
    idUser: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    typeAddress:{
        type: DataTypes.STRING,
        allowNull: false
      },  
    descripAddress:{
      type: DataTypes.STRING,
      allowNull: true
    },
    cityAddress:{
      type: DataTypes.STRING,
      allowNull: true
    },
    codPostal:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    stateAddress:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};
