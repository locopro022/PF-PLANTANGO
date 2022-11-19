const { Product, Category } = require("../db");
const { Op } = require("sequelize");
const sequelize = require("sequelize");
const { Router } = require("express");
// const Category = require("../models/Category");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { search, filter, page } = req.query;

    let sequelizeFilter = {};

    let sequelizeSort = ["nameProd", "ASC"];

    for (let key in filter) {
      if (Array.isArray(filter[key])) {
        sequelizeFilter[key] = { [Op.or]: filter[key] };
      } else if (filter[key].max || filter[key].min) {
        sequelizeFilter[key] =
          filter[key].max && filter[key].min
            ? {
                [Op.lte]: filter[key].max,
                [Op.gte]: filter[key].min,
              }
            : filter[key].max
            ? {
                [Op.lte]: filter[key].max,
              }
            : {
                [Op.gte]: filter[key].min,
              };
      } else {
        sequelizeFilter[key] = { [Op.eq]: filter[key] };
      }
    }

    const { count, rows } = await Product.findAndCountAll({
      attributes: { exclude: ["codCategory"] },
      where: {
        ...(!search
          ? sequelizeFilter
          : { nameProd: { [Op.iLike]: `%${search}%` } }),
      },
      include: Category,
      order: [sequelizeSort],
      limit: 12,
      offset: (page || 0) * 12,
    });

    return res.status(200).json({
      page_count: Math.ceil(count / 12),
      page: page || 0,
      results: rows,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

// RUTA GET TIPOS
// Semillas, Macetas, Accesorios, Tierras y fertilizantes.

router.get("/types", async (req, res) => {
  try {
    const getVal = async (mag, col) =>
      (
        await Product.findAll({
          attributes: [[sequelize.fn(mag, sequelize.col(col)), col]],
        })
      )[0][col];
    const types = {
      codCategoria: await Category.findAll(),
      precio: {
        min: await getVal("min", "precio"),
        max: await getVal("max", "precio"),
      },
    };
    res.status(200).json(types);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

//RUTA GET ESPECIFICA

router.get("/:codProd", async (req, res) => {
  try {
    const { codProd } = req.params;

    let product = await Product.findByPk(codProd, {include: Category});

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
