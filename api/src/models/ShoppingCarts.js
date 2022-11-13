const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('ShoppingCarts', {
    idUser: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    dateShopping:{
      type: DataTypes.DATE,
      allowNull: false,
      unique:true,
    },
    amountShopping:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    taxShopping:{
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    stateShopping:{
        type: DataTypes.BOOLEAN,
        allowNull: false
      }      
  },{
    freezeTableName: true,
    timestamps: false
  });
};
