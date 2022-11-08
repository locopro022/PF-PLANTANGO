const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('BillingDetail', {
    codBilling: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },    
    codProd: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    quantity:{
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    codDiscount:{
        type: DataTypes.STRING,
        allowNull: true
      }      
    },{
    freezeTableName: true,
    timestamps: false
  });
};


