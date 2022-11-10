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
    luminosidad:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    riego:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    tamano:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },
    tipo:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
    },  
    clima:{
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      }, 
    toxicidad:{
        type: DataTypes.BOOLEAN,
        allowNull: true
    },
    statePlant:{
        type: DataTypes.BOOLEAN,
        allowNull: true,
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
