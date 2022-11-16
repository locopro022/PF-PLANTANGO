const { Plants } = require("../db");
const dbBuild = require("../dbPlants.js");

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
    return planta.dataValues;
  } catch (error) {
    console.log(error.message);
  }
};

//LLENAR DB
const llenarDBPlants = async () => {
  const tabla = await Plants.findAll();
  if (!tabla.length) {
    await Plants.bulkCreate(dbBuild);
  }
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
  llenarDBPlants,
  filter,
  serchByName,
  filterType,
};
