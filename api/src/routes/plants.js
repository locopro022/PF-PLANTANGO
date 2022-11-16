const { Router } = require("express");
const { Plants } = require("../db");
const { plantTypes: types } = require("../controller/plantTypes.js");
const { Op } = require("sequelize");
const { getDbId } = require("../controller/plantas.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get("/", async (req, res) => {
  try {
    const { search, filter, sort, page } = req.query;
    // Vendran estos cuatro parametros, busqueda por nombre, filtros, ordenamientos y pagina.

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
      // order: [["alguna propiedad", "sequelize.literal es una buena funcion aca"]],
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
    console.log("Error en getPlants" + e);
    res.status(400).send(e);
  }
});

router.get("/types", async (req, res) => {
  try {
    res.status(200).json(types);
  } catch (error) {
    throw new Error("Error en routes -> get./types ", error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;

    let plant = await getDbId(id);

    return res.status(200).json(plant);
  } catch (error) {
    res.status(400).json("Error en Routes -> plants.js: ", error.message);
  }
});

//CREACION DE PLANTA

router.post("/creacion", (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    let newPlant = Plants.create({
      ...body,
      imagePlant: body.imagePlant === "" ? undefined : body.imagePlant,
      toxicity: typeof body.toxicity === "boolean" ? req.body.toxicity : false,
    });
    res.status(201).json(`Planta ${newPlant.namePlant} creada con exito`);
  } catch (error) {
    console.log(error);
    res.status(400).json(error.message);
  }
});

//DEVUELVE OBJETO CON ARRAYS PARA EL FILTRADO

router.put("/", async (req, res) => {
  const { body } = req;
  try {
    const plant = await Plants.findByPk(body.codPlant);
    await plant.set({
      ...body,
    });
    await plant.save();

    res.status(201).json(plant);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
