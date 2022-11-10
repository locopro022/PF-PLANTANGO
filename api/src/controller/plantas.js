const { Plants } = require("../db");

//TRAER DATOS DE LA DB
const getDbInfo = async () => {
  try {
    let db = await Plants.findAll();

    // let planta = await db.map((response) => {

    //   return {
    //     namePlant: response.namePlant,
    //     descripPlant: response.descripPlant,
    //   ubication: response.ubication,
    //   light: response.luminosidad,
    //   wather: response.riego,
    //   size: response.tamano,
    //   type: response.tipo,
    //   clima: response.clima,
    //   toxicity: response.toxicidad,
    //   imagePlant: response.imagePlant
    //   };
    // });
    return db;
  } catch (error) {
    throw new Error("Error en controller -> getDbInfo");
  }
};

//BUSCAR POR ID EN LA DB
const getDbId = async (id) => {
  try {
    if (!id) {
      throw new Error("Error en controller -> getDbId -> ID vacio ");
    }

    const planta = await Plants.findByPk(id);

    if (!planta) {
      throw new Error(
        // No es un poco dramatico?
        "Error en controller -> getDbId -> ID no se encuentra en la DB "
      );
    }

    // const response = planta.dataValues;
    // Calu posta, no podes cambiar los nombres 3 veces, y te lo digo con amor<3.

    // let plantaId = {
    //   namePlant: response.namePlant,
    //   descripPlant: response.descripPlant,
    //   ubication: response.ubication,
    //   light: response.luminosidad,
    //   wather: response.riego,
    //   size: response.tamano,
    //   type: response.tipo,
    //   clima: response.clima,
    //   toxicity: response.toxicidad,
    //   imagePlant: response.imagePlant,
    // };

    // return plantaId;
    return planta;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getDbInfo,
  getDbId,
};
