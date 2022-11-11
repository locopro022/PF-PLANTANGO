const { Plants } = require("../db");
const dbBuild = require("../dbBuild");

//BUSCAR POR ID EN LA DB
const getDbId = async (id) => {
  try {
    if (!id) {
      throw new Error("Error en controller -> getDbId -> ID vacio ");
    }

    const planta = await Plants.findByPk(id);

    if (!planta) {
      throw new Error(
        "Error en controller -> getDbId -> ID no se encuentra en la DB "
      );
    }

    const response = planta.dataValues;

    let plantaId = {
      namePlant: response.namePlant,
      descripPlant: response.descripPlant,
      ubication: response.ubication,
      ligth: response.luminosidad,
      wather: response.riego,
      size: response.tamano,
      type: response.tipo,
      climate: response.clima,
      toxicity: response.toxicidad,
      imagePlant: response.imagePlant,
    };

    return planta.dataValues;
  } catch (error) {
    console.log(error.message);
  }
};

//LLENAR DB
const llenarDB = async () => {
  const db = dbBuild.map((planta) => {
    return {
      namePlant: planta.NOMBRE,
      descripPlant: planta.DESCRIPCION,
      ubication: planta.UBICACION,
      ligth: planta.LUMINOSIDAD,
      whater: planta.RIEGO,
      size: planta.TAMANIO,
      type: planta.TIPO,
      climate: planta.PREFERENCIA_CLIMATICA,
      toxicity: planta.TOXICIDAD,
      statePlant: true,
      imagePlant: planta.IMAGEN,
    };
  });
  await Plants.bulkCreate(db);

  // for (let i = 0; i < dbBuild.length; i++) {
  //   let nObj = {
  //     namePlant: dbBuild[i].NOMBRE,
  //     descripPlant: dbBuild[i].DESCRIPCION,
  //     ubication: dbBuild[i].UBICACION,
  //     ligth: dbBuild[i].LUMINOSIDAD,
  //     whater: dbBuild[i].RIEGO,
  //     size: dbBuild[i].TAMANIO,
  //     type: dbBuild[i].TIPO,
  //     climate: dbBuild[i].PREFERENCIA_CLIMATICA,
  //     toxicity: dbBuild[i].TOXICIDAD,
  //     statePlant: true,
  //     imagePlant: dbBuild[i].IMAGEN,
  //   };
  //   await Plants.create(nObj);
  // }
  // const tabla2 = await Plants.findAll();
  // return tabla2;""

  // for ( i in dbBuild )
  //     {
  //       console.log("TAMAÑO: ",dbBuild[i].TAMANIO);
  //     Plants.create({
  //    namePlant: dbBuild[i].NOMBRE,
  //     descripPlant: dbBuild[i].DESCRIPCION,
  //     ubication: dbBuild[i].UBICACION,
  //     ligth: dbBuild[i].LUMINOSIDAD,
  //     whater: dbBuild[i].RIEGO,
  //     size: dbBuild[i].TAMANIO,
  //     type: dbBuild[i].TIPO,
  //     climate: dbBuild[i].PREFERENCIA_CLIMATICA,
  //     toxicity: dbBuild[i].TOXICIDAD,
  //     statePlant: true,
  //     imagePlant: dbBuild[i].IMAGEN,

  //     });

  // }

  // const db = await Plants.findAll();
  // return db;
};

//FILTRAR POR NOMBRE
const serchByName = async (search) => {
  const db = await Plants.findAll();

  console.log("SEARCH: ", search);

  const response = await db.filter((e) =>
    e.namePlant.toLowerCase().includes(search.toString().toLowerCase())
  );

  if (!response) {
    throw new Error("Ninguna busqueda encontro coincidencia");
  }

  console.log("response", response);

  return response;
};

//FILTROS
const filter = async (ubi) => {
  console.log("ENTRE AL FILTER");

  console.log("ubication:", ubi);

  const db = await Plants.findAll();

  const response = await db.filter((plant) => {
    if (plant.ubication.includes(ubi)) {
      return plant;
    }
    return null;
  });

  console.log("response: ", response);

  if (!response) {
    throw new Error("Ninguna busqueda encontro coincidencia");
  }

  //console.log("RESPONSE: ",response);
  return response;
};

const filterType = async (type) => {
  const db = await Plants.findAll();

  console.log("TYPE: ", type);
  const response = await db.filter((plant) => {
    if (plant.type.includes(type)) {
      return plant;
    }
    return null;
  });

  if (!response) {
    throw new Error("Ninguna busqueda encontro coincidencia");
  }

  return response;
};
module.exports = {
  getDbId,
  llenarDB,
  filter,
  serchByName,
  filterType,
};
