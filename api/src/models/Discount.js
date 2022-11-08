const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Discounts', {
    codDiscount: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    codProd:{
      type: DataTypes.STRING,
      allowNull: true,
      unique:true,
    },
    startDate:{
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate:{
      type: DataTypes.DATE,
      allowNull: false
    },
    percentDiscount:{
        type: DataTypes.DECIMAL,
        allowNull: false
      },      
      amount:{
        type: DataTypes.DECIMAL,
        allowNull: true
      }      
   },{
    freezeTableName: true,
    timestamps: false
  });
};
