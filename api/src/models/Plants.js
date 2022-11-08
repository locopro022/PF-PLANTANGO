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
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
    },
    descripPlant:{
      type: DataTypes.STRING,
      allowNull: false
    },
    ubication:{
      type: DataTypes.STRING,
      allowNull: false
    },
    luminosidad:{
        type: DataTypes.STRING,
        allowNull: false
    },
    riego:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tamano:{
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo:{
        type: DataTypes.STRING,
        allowNull: false
    },  
    clima:{
        type: DataTypes.STRING,
        allowNull: false
      }, 
    toxicidad:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    statePlant:{
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
  },{
    freezeTableName: true,
    timestamps: false
  });
};
