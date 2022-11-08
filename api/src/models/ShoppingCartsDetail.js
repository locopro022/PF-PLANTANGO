const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('ShoppingCarts_Detail', {
    idUser: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    codProd:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
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
        allowNull: false
      }      
  },{
    freezeTableName: true,
    timestamps: false
  });
};
