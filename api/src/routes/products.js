const { Router } = require("express");
const { searchName } = require("../controller/productos");
const { Product } = require("../db");
const dbBuild = require("../dbProducts.js");
const { Op } = require("sequelize");
const Category = require("../models/Category");

const prod = Router()

//TRAER TODOS LOS PRODUCTOS O BUSCAR POR NOMBRE 
prod.get("/", async (req,res)=> {

try {

    console.log("ENTRE AL GET");

    const {search, sort, page} = req.query;
    if(search){
        console.log("ENTRE AL IF SEARCH");

        //ESTO DE ABAJO NO FUNCIONA NO SE QUE ESTA MAL 
        const response= await Product.findAll({
            where:{
                namePlant: { [Op.iLike]: search }
            }
        })

        
        console.log("rta",response);
        return res.status(200).json(response);
    }
    


    const allProducts =await Product.findAll();

    console.log("PRODUCTOS: ",allProducts);
    
    if(!allProducts) throw new Error("Error en traer los productos de la DV -> get /products")

console.log("PRODUCTOS: ",allProducts);
    res.status(200).json(allProducts)
} catch (error) {
    res.status(400).send("ERROR EN GET PRODUCTS")
}

})

//PRODUCTO DETAIL 
prod.get("/:codProd", async (req,res)=> {
    try {
        

        const {codProd}= req.params;
        if (!codProd) {
            throw new Error("Error el id es null")
        }
        console.log("codProducto", codProd);
        const response = await Product.findByPk(codProd)
        console.log("RESPONSE: ", response);
        const producto = response.dataValues;

        console.log("PRODUCTO: ",producto);
    let productoId = {
        nameProd: producto.nameProd,
        descripProd: producto.descripProd,
        codCategory: producto.codCategory,
        starts: producto.starts,
        price: producto.price,
        actualStock: producto.actualStock,
        minStock: producto.minStock,
        maxStock: producto.maxStock,
        imageProd: producto.imageProd,
        stateProd: producto.stateProd,
    };
    return res.status(200).json(productoId);
    } catch (error) {
        res.status(400).json("Error en Routes -> products.js: ");
    }
})

//CREAR PRODUCTO


//MODIFICAR PRODUCTO


//ELIMINAR PRODUCTO

module.exports= prod;