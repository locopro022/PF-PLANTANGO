const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Billing', {
    codBilling: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },    
    idUser: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    dateBilling:{
      type: DataTypes.DATE,
      allowNull: false,
      unique:true,
    },
    amountBilling:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    taxBilling:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    stateBilling:{
        type: DataTypes.BOOLEAN,
        allowNull: false
      },      
    codDelivery:{
        type: DataTypes.STRING,
        allowNull: true
      },      
    codPay:{
        type: DataTypes.STRING,
        allowNull: false
      },
    datePay:{
      type: DataTypes.DATE,
      allowNull: false
    }      
    },{
    freezeTableName: true,
    timestamps: false
  });
};


