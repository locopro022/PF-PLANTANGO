const { Router } = require("express");
const { Product } = require("../db");
const { Op } = require("sequelize");
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
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

// RUTA GET TIPOS

// router.get("/types", async (req, res) => {
//   try {
//     res.status(200).json(types);
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

router.post("/creacion", (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    let newProd = Product.create({
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
