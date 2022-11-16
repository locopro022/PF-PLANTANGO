const { Product } = require("../db.js");
const dbProducts = require("../dbProducts.js");

const llenarDBProd = async () => {
  const tabla = await Product.findAll();
  if (!tabla.length) {
    await Product.bulkCreate(dbProducts);
  }
};

module.exports = {
  llenarDBProd,
};
