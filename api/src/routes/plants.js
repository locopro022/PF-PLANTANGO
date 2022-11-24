const { Router } = require("express");
const { Plants } = require("../db");
const { plantTypes: types } = require("../controller/plantTypes.js");
const { Op } = require("sequelize");

const router = Router();

// RUTA GET

router.get("/", async (req, res) => {
  try {
    const { search, filter, sort, page } = req.query;

    let sequelizeFilter = {};

    let sequelizeSort = sort || ["namePlant", "ASC"];
    for (let key in filter)
      sequelizeFilter[key] = { [Op.contains]: filter[key] };

    const { count, rows } = await Plants.findAndCountAll({
      where: {
        ...(!search
          ? sequelizeFilter
          : { namePlant: { [Op.iLike]: `%${search}%` } }),
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

router.get("/types", async (req, res) => {
  try {
    res.status(200).json(types);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

//RUTA GET ESPECIFICA

router.get("/:codPlant", async (req, res) => {
  try {
    const { codPlant } = req.params;

    let plant = await Plants.findByPk(codPlant);

    return res.status(200).json(plant);
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
    let newPlant = await Plants.create({
      ...body,
      imagePlant: body.imagePlant === "" ? undefined : body.imagePlant,
      toxicity: typeof body.toxicity === "boolean" ? req.body.toxicity : false,
    });
    res.status(201).json(newPlant);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

// RUTA PUT

router.put("/", async (req, res) => {
  const { body } = req;
  const {r} = req.query;
  try {
    const plant = await Plants.findByPk(body.codPlant);
    await plant.set({
      ...body,
    });
    await plant.save();
    if(r === "all"){
      const resAlt = await Plants.findAll();
      return res.status(201).json(resAlt);
    }
    
    res.status(201).json(plant);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

// RUTA DELETE

router.delete("/:codProd", async (req, res) => {
  const { codPlant } = req.params;
  try {
    await Plants.destroy({
      where: { codPlant },
    });
    res.status(200).json({ deleted: codPlant });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: e });
  }
});

module.exports = router;
