const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Billing', {
    codBilling: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
    },    
    idUser: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    dateBilling:{
      type: DataTypes.DATE,
      allowNull: false
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
        allowNull: true
      },      
    codDelivery:{
        type: DataTypes.STRING,
        allowNull: true
      },      
    codPay:{
        type: DataTypes.STRING,
        allowNull: true
      },
    datePay:{
      type: DataTypes.DATE,
      allowNull: true
    }      
    },{
    freezeTableName: true,
    timestamps: false
  });
};


