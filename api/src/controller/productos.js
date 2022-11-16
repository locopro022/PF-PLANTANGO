const {Product} = require('../db.js')
const dbProducts = require('../dbProducts.js')


const llenarDBProd = async () => {
  const tabla = await Product.findAll();
  if (!tabla.length) {
    const db = dbProducts.map((prod) => {
      return {
        nameProd: prod.NOMBRE,
        descripProd: prod.DESCRIPCION,
        codCategory: prod.CATEGORIA,
        starts: prod.ESTRELLAS,
        price: prod.PRECIO,
        actualStock: prod.ACTUAL_STOCK,
        minStock: prod.MIN_STOCK,
        maxStock: prod.MAX_STOCK,
        imageProd: prod.IMAGEN
      };
    });
    await Product.bulkCreate(db);
  }
}

module.exports = {
  llenarDBProd
}