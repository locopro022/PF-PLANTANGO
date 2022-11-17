const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Product', {
    codProd: {
      type: DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey: true,
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
    codCategory:{
      type: DataTypes.INTEGER,
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
        allowNull: true
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};
