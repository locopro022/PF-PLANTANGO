const { Router } = require("express");
const { Plants } = require("../db");
const dbBuild = require("../dbBuild");
const { Op, BOOLEAN } = require("sequelize");
const {
  getDbId,
  llenarDB,
  filter,
  serchByName,
  filterType,
} = require("../controller/plantas.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

//PRUEBA DE GETPLANTS + FILTROS POR QUERY
router.get("/", async (req, res) => {
  try {
    const { search, filter, sort, page } = req.query;
    // Vendran estos cuatro parametros, busqueda por nombre, filtros, ordenamientos y pagina.


    // if(search){
    //   const response = await Plants.findAll({
    //     where: {
    //       namePlant: { [Op.iLike]: search },
    //     },
    //   });
    //   return res.status(200).json(response);
    // }


    let sequelizeFilter = {};

    for (let key in filter)
      sequelizeFilter[key] = { [Op.contains]: filter[key] };
    console.log("Este es el sequelize filter", sequelizeFilter);


<<<<<<< HEAD
    if (search) { }
=======
    let sequelizeSort = sort || ["namePlant", "ASC"];

>>>>>>> c619d9a0db2c6c202f8b6746cbf51b13a2157868
    const { count, rows } = await Plants.findAndCountAll({
      where: {
        // ...filter,
        ...(!search ? sequelizeFilter : { namePlant: { [Op.iLike]: `%${search}%` } }),

      },
      
      // order: [["alguna propiedad", "sequelize.literal es una buena funcion aca"]],
      order: [sequelizeSort ],
      limit: 12,
      offset: (page || 0) * 12,
    });

    console.log("Cantidad de resultados", count);

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

// search?{namePlant: {[Op.iLike]: %${search}%}}:null
// namePlant: search?{[Op.iLike]: %${search}%}:null

//prueba filtros con sequelize
router.get("/prueba", async (req, res) => {
  const { xname } = req.query;

  const response = await Plants.findAll({
    where: {
      namePlant: { [Op.substring]: xname },
    },
  });
  return res.status(200).json(response);
});

router.get("/types", async (req, res) => {
  try {
    const objeto = {
      ubication: ["interior", "exterior"],
      ligth: [
        "pleno sol",
        "media sombra",
        "luz filtrada",
        "intensa sin exposición solar directa",
      ],
      whater: [
        "poco frecuente",
        "espaciado",
        "abundante",
        "regular",
        "moderado",
        "abundante en verano y moderado en invierno",
      ],
      size: ["grande", "mediano", "pequeño"],
      type: [
        "floral",
        "sin flores",
        "apta maceta",
        "arbol",
        "aromatica",
        "huerta",
        "medicinal",
        "frutal",
        "arbusto",
        "suculenta",
        "cactus",
        "trepadora",
      ],
      climate: [
        "calido",
        "humedo",
        "templado",
        "resistente al frio",
        "resistente a la sequia",
        "poco resistente al viento",
        "arido",
        "resistente al viento",
      ],
    };

    return res.status(200).json(objeto);
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
    let {
      namePlant,
      descripPlant,
      imagePlant,
      ubication,
      ligth,
      whater,
      size,
      type,
      toxicity,
      climate
    } = req.body
    if (toxicity === "false" || toxicity === '') toxicity = false
    else toxicity = true
    let newPlant = Plants.create({
      namePlant,
      descripPlant,
      imagePlant,
      ubication,
      ligth,
      whater,
      size,
      type,
      toxicity,
      climate
    })
    res.status(201).json(`Planta ${newPlant.namePlant} creada con exito`)
  } catch (error) {
    res.status(400).json(error.message)
  }
})

//DEVUELVE OBJETO CON ARRAYS PARA EL FILTRADO

router.put("/", async (req, res) => {
  const obj = req.body;
  try {
    if (
      !obj.codPlant ||
      !obj.namePlant ||
      !obj.descripPlant ||
      !obj.ubication ||
      !obj.luminosidad ||
      !obj.riego ||
      !obj.tamano ||
      !obj.tipo ||
      !obj.clima ||
      obj.toxicidad === undefined
    ) {
      return res
        .status(400)
        .send("Necesitamos que completes la informacion obligatoria");
    } else {
      await Plants.destroy({ where: { codPlant: obj.codPlant }, force: true });
      let nObj = {
        codPlant: obj.codPlant,
        namePlant: obj.namePlant,
        descripPlant: obj.descripPlant,
        ubication: obj.ubication,
        luminosidad: obj.luminosidad,
        riego: obj.riego,
        tamano: obj.tamano,
        tipo: obj.tipo,
        clima: obj.clima,
        toxicidad: obj.toxicidad,
        statePlant: obj.statePlant || true,
        imagePlant: obj.imagePlant || undefined,
      };
      await Plants.create(nObj);
      return res.status(201).send("Los cambios fueron realizados con exito.");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

//ENCONTRAR PLANTA POR PARAMS

// router.get("/types", async (req, res) => {
//   const tabla = await Plants.findAll();
//   try {
//     let setR = new Set();
//     let setT = new Set();
//     let setTi = new Set();
//     let setC = new Set();

//     let arrRiego = [];
//     let arrTamano = [];
//     let arrTipo = [];
//     let arrClima = [];

//     for (let i = 0; i < tabla.length; i++) {
//       let sRiego = tabla[i].riego.split(",");
//       sRiego.map((e) => arrRiego.push(e));
//       let sTamano = tabla[i].tamano.split(",");
//       sTamano.map((e) => arrTamano.push(e));
//       let sTipo = tabla[i].tipo.split(",");
//       sTipo.map((e) => arrTipo.push(e));
//       let sClima = tabla[i].clima.split(",");
//       sClima.map((e) => arrClima.push(e));
//     }

//     let i = 0;
//     while (
//       i < arrRiego.length ||
//       i < arrTamano.length ||
//       i < arrTipo.length ||
//       i < arrClima.length
//     ) {
//       if (arrRiego[i]) {
//         setR.add(arrRiego[i]);
//       }
//       if (arrTamano[i]) {
//         setT.add(arrTamano[i]);
//       }
//       if (arrTipo[i]) {
//         setTi.add(arrTipo[i]);
//       }
//       if (arrClima[i]) {
//         setC.add(arrClima[i]);
//       }
//       i++;
//     }

//     let objFinal = {
//       riego: Array.from(setR),
//       tamano: Array.from(setT),
//       tipo: Array.from(setTi),
//       clima: Array.from(setC),
//     };
//     return res.status(200).send(objFinal);
//   } catch (e) {
//     return res.status(400).send(e);
//   }
// });

// router.get("/", async (req, res) => {
//   const tabla = await Plants.findAll();
//   const { search } = req.query;

//     if (search) {
//       const tabl2 = await Plants.findAll();

//       let newTable = tabl2.filter(
//         (e) =>
//           e.namePlant
//             .toLocaleLowerCase()
//             .includes(search.toLocaleLowerCase()) ||
//           e.ubication
//             .toLocaleLowerCase()
//             .includes(search.toLocaleLowerCase()) ||
//           e.ligth
//             .toLocaleLowerCase()
//             .includes(search.toLocaleLowerCase()) ||
//           e.whater.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
//           e.size.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
//           e.type.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
//           e.climate.toLocaleLowerCase().includes(search.toLocaleLowerCase())
//       );

//       res.status(200).send(newTable);

//     } else {

//       if (!tabla.length) {
//         for (let i = 0; i < dbBuild.length; i++) {
//           let nObj = {
//             namePlant: dbBuild[i].NOMBRE,
//             descripPlant: dbBuild[i].DESCRIPCION,
//             ubication: dbBuild[i].UBICACION,
//             ligth: dbBuild[i].LUMINOSIDAD,
//             whater: dbBuild[i].RIEGO,
//             size: dbBuild[i].TAMANIO,
//             type: dbBuild[i].TIPO,
//             climate: dbBuild[i].PREFERENCIA_CLIMATICA,
//             toxicity: dbBuild[i].TOXICIDAD,
//             statePlant: true,
//             imagePlant: dbBuild[i].IMAGEN,
//           };
//           await Plants.create(nObj);
//         }
//         const tabla2 = await Plants.findAll();
//         return res.status(201).send(tabla2);
//       } else {
//         return res.status(200).send(tabla);
//       }
//     }

// });

module.exports = router;
