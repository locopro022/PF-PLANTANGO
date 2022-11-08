const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('RelatedProduct', {
    codProd: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    codProdRelated:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    stateProdRelated:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};
