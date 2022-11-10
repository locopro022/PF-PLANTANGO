const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    codProd: {
      type: DataTypes.STRING,
      primaryKey: true,
      unique: true
    },
    nameProd:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    descripProd:{
      type: DataTypes.STRING,
      allowNull: false
    },
    imageProd:{
      type: DataTypes.STRING,
      allowNull: false
    },
    codCategory:{
      type: DataTypes.STRING,
      allowNull: false
    },
    starts:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price:{
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    actualStock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },
    minStock:{
        type: DataTypes.INTEGER,
        allowNull: false
    },  
    maxStock:{
        type: DataTypes.INTEGER,
        allowNull: false
      }, 
    stateProd:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};
