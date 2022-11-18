const { DataTypes, UUIDV4 } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Product",
    {
      codProd: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nameProd: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      descripProd: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      estrellas: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false,
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      stockActual: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      stockMinimo: {
        type: DataTypes.INTEGER,
        defaultValue: 0,
      },
      stockMaximo: {
        type: DataTypes.INTEGER,
        defaultValue: 9999,
      },
      imageProd: {
        type: DataTypes.TEXT,
        defaultVale:
          "https://th.bing.com/th/id/R.8e9d9c4e9893628dcba520060fd726f5?rik=EeURkoXNo2Q1NQ&riu=http%3a%2f%2fproductonatural.co%2fwp-content%2fuploads%2f2020%2f01%2fProductos-varios-optimizada.png&ehk=dXE7Oc4SNtzf00%2bpTAlJ9dn3wi%2fpB%2fczM5Xdcwq06Vo%3d&risl=&pid=ImgRaw&r=0",
      },
      stateProd: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
