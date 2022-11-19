const { Product } = require("../db.js");
const dbProducts = require("../dbProducts.js");

const llenarDBProd = async () => {
  const tabla = await Product.findAll();
  if (!tabla.length) {
    await Product.bulkCreate(dbProducts);
  }
};

// Los baneo del server si vuelven a NO usar sequelize para hacer las cosas que hace sequelize.

//Buscar por nombre
module.exports = {
  llenarDBProd,
};
