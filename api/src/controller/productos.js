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

//Buscar por nombre 
const searchName = async(name)=> {

  try {
    
const db = await Product.findAll();
console.log("Busqueda: ",name);

const response = await db.filter((p)=> p.nameProd.toLowerCase().includes(name.toString().toLowerCase()));

if(!response){
  throw new Error("No hay coincidencia")

}

return response;
  } catch (error) {
    
  }
}
module.exports = {
  llenarDBProd,
  searchName
}