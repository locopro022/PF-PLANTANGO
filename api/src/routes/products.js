const { Router } = require("express");
const { fn, col, literal } = require("sequelize");
const { Category, Product, Billing, User, BillingDetail } = require("../db");

const Prod = Router();

//localhost:3001/products/createcategory
Prod.post('/createcategory', async (req, res) => {
    try {
    await Category.findOrCreate({
        where:{descripCategory :"Semillas"}
    });
    await Category.findOrCreate({
        where:{descripCategory :"Macetas"}
    });
    await Category.findOrCreate({
        where:{descripCategory :"Tierras y Fertilizantes"}
    });
    await Category.findOrCreate({
        where:{descripCategory :"Accesorios"}
    });
    res.send("Categorias Cargadas en base de Datos"); 

    }
    catch (error) {
        res.json( {error: error})
    }
});

//localhost:3001/products/createproduct
Prod.post('/createproduct', async (req, res) => {
    await Product.create(req.body)
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error})
    })
})

//localhost:3001/products/getproduct
Prod.get('/getproduct', async (req, res) => {
    await Product.findAll({
        include: {
            model : Category, 
            attributes : ["descripCategory"],
        },
    })
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error})
    })
})

//localhost:3001/products/createbill
Prod.post('/createBill', async (req, res) => {
    await Billing.create(req.body)
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error})
    })
})

//Pendiente
Prod.post('/createBillDetail', async (req, res) => {
    await BillingDetail.create(req.body)
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error})
    })
})


//localhost:3001/products/getKPI1
// Ventas Totales
Prod.get('/getKPI1', async (req, res) => {
    await Billing.findAll({
        attributes: [ [fn('SUM', col('amountBilling')), 'VentasTotales'] ]
    })
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error.message})
    })
})

//localhost:3001/products/getKPI2
// Facturas emitidas
Prod.get('/getKPI2', async (req, res) => {
    await Billing.findAll({
        attributes: [ [fn('COUNT', col('codBilling')), 'Facturas'] ]
    })
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error.message})
    })
})

//localhost:3001/products/getKPI3
//Ticket promedio
Prod.get('/getKPI3', async (req, res) => {
    await Billing.findAll({
        attributes: [ [fn('AVG', col('amountBilling')), 'TicketPromedio'] ]
    })
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error.message})
    })
})

//localhost:3001/products/getKPI4
//Ventas por dia ordenado por dia 
Prod.get('/getKPI4', async (req, res) => {
    await Billing.findAll({
        attributes: [
            [literal(`DATE("dateBilling")`), 'Fecha'],
            [literal(`COUNT(*)`), 'Facturas'],
            [literal(`SUM("amountBilling")`), 'VentasDia']
        ],
        group: ['Fecha'],
        raw: true,
        order: [ ['Fecha', 'ASC'],],
    })
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error.message})
    })
})

//localhost:3001/products/getKPI5
// Ventas por Categoria ordenado de mayor a menor
Prod.get('/getKPI5', async (req, res) => {
    await BillingDetail.findAll({
        attributes: ['Product.codCategory', [fn('SUM', col('BillingDetail.subtotal')), 'VentasCategoria'] ],
        include   : [ 
            { 
                model  :  Product,
                attributes: [],
                include:[]
            }
       ],
        group     : ['Product.codCategory'],
        raw       : true,
        order     : [ ['VentasCategoria', 'DESC'],],
    })
    .then( (data) => {
        console.log(data)
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error.message})
    })
})



//localhost:3001/products/getbills -- KPI6
Prod.get('/getbills', async (req, res) => {
    await Billing.findAll({
        include:[ 
            {
                model : User,
                attributes : ['username']
            },      
            {
                model : BillingDetail,
                attributes : ['codProd','quantity','price'],
                include : [
                    {
                        model : Product,
                        attributes : ['nameProd','starts']
                    }
                ]
            }
        ]
    })
    .then( (data) => {
        res.json( {datos:data})
    })
    .catch( (error) => {
        res.json( {error: error})
    })
})

module.exports = Prod;


 