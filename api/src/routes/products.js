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


 
=======
const { Product } = require("../db");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
// const Category = require("../models/Category");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { search, filter, sort, page } = req.query;

    let sequelizeFilter = {};

    let sequelizeSort = sort || ["nameProd", "ASC"];

    for (let key in filter)
      sequelizeFilter[key] = { [Op.contains]: filter[key] };

    const { count, rows } = await Product.findAndCountAll({
      where: {
        ...(!search
          ? sequelizeFilter
          : { nameProd: { [Op.iLike]: `%${search}%` } }),
      },
      order: [sequelizeSort],
      limit: 12,
      offset: (page || 0) * 12,
    });

    return res.status(200).json({
      page_count: Math.ceil(count / 12),
      results: rows,
      page: page || 0,
      types: {
        codCategoria: [
          "Semillas",
          "Macetas",
          "Accesorios",
          "Tierras y fertilizantes",
        ],
        stars: {
          min: rows.map((r) => r.estrellas).reduce((p, c) => (c < p ? c : p)),
          max: rows.map((r) => r.estrellas).reduce((p, c) => (c > p ? c : p)),
        },
        precio: {
          min: rows.map((r) => r.precio).reduce((p, c) => (c < p ? c : p)),
          max: rows.map((r) => r.precio).reduce((p, c) => (c > p ? c : p)),
        },
      },
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

// RUTA GET TIPOS
// Semillas, Macetas, Accesorios, Tierras y fertilizantes.

// router.get("/types", async (req, res) => {
//   try {
//     const getVal = async (mag, col) =>
//       (
//         await Product.findAll({
//           attributes: [[sequelize.fn(mag, sequelize.col(col)), col]],
//         })
//       )[0][col];
//     const types = {
//         minPrice: await getVal("min", "precio"),
//         maxPrice: await getVal("max", "precio"),
//         minStars:
//     }

//     res.status(200).json({ minPrice, maxPrice });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({ error: e });
//   }
// });

//RUTA GET ESPECIFICA

router.get("/:codProd", async (req, res) => {
  try {
    const { codProd } = req.params;

    let product = await Product.findByPk(codProd);

    return res.status(200).json(product);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

// RUTA POST

router.post("/creacion", async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    let newProd = await Product.create({
      ...body,
      imageProd: body.imageProd === "" ? undefined : body.imageProd,
    });
    res.status(201).json(newProd);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

// RUTA PUT

router.put("/", async (req, res) => {
  const { body } = req;
  try {
    const prod = await Product.findByPk(body.codProd);
    await prod.set({
      ...body,
    });
    await prod.save();

    res.status(201).json(prod);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

// RUTA DELETE

router.delete("/:codProd", async (req, res) => {
  const { codProd } = req.params;
  try {
    await Product.destroy({
      where: { codProd },
    });
    res.status(200).json({ deleted: codProd });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

module.exports = router;

