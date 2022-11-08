const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('PaymentMethod', {
    idUser: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    typePaymentMethod:{
        type: DataTypes.STRING,
        allowNull: false
      },  
    typeCreditCard:{
      type: DataTypes.STRING,
      allowNull: true
    },
    numberCreditCard:{
      type: DataTypes.STRING,
      allowNull: true
    },
    stateCreditCard:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};
