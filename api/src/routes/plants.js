const { Router } = require("express");
const { Plants } = require("../db");
const dbBuild = require("../dbBuild");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", async (req, res) => {
  const tabla = await Plants.findAll();
  const { search } = req.query;

  try {
    if (search) {
      const tabl2 = await Plants.findAll();

      let newTable = tabl2.filter(
        (e) =>
          e.namePlant
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          e.ubication
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          e.luminosidad
            .toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          e.riego.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          e.tamano.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          e.tipo.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
          e.clima.toLocaleLowerCase().includes(search.toLocaleLowerCase())
      );

      res.status(200).send(newTable);
    } else {
      if (!tabla.length) {
        for (let i = 0; i < dbBuild.length; i++) {
          let nObj = {
            namePlant: dbBuild[i].NOMBRE,
            descripPlant: dbBuild[i].DESCRIPCION,
            ubication: dbBuild[i].UBICACION,
            luminosidad: dbBuild[i].LUMINOSIDAD,
            riego: dbBuild[i].RIEGO,
            tamano: dbBuild[i].TAMANIO,
            tipo: dbBuild[i].TIPO,
            clima: dbBuild[i].PREFERENCIA_CLIMATICA,
            toxicidad: dbBuild[i].TOXICIDAD,
            statePlant: true,
            imagePlant: dbBuild[i].IMAGEN,
          };
          await Plants.create(nObj);
        }
        const tabla2 = await Plants.findAll();
        return res.status(201).send(tabla2);
      } else {
        return res.status(200).send(tabla);
      }
    }
  } catch (error) {
    return res.status(400).send("algo salio mal");
  }
});



module.exports = router;
