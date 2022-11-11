const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Plants', {
    codPlant: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: UUIDV4,
      unique: true
    },
    namePlant:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      unique:true,
    },
    descripPlant:{
      type: DataTypes.TEXT,
      allowNull: false
    },
    ubication:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    ligth:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    whater:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    size:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    type:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },  
    climate:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      }, 
      toxicity:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    statePlant:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    imagePlant:{
      type: DataTypes.TEXT,
      allowNull: true
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};
