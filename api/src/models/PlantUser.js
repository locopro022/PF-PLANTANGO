const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('PlantUser', {
    idUser: {
        type: DataTypes.STRING,
        primaryKey: true
      },  
    codPlant: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    dateFavorite:{
      type: DataTypes.DATE,
      allowNull: false
    },
    dateDrop:{
        type: DataTypes.DATE,
        allowNull: true
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};
