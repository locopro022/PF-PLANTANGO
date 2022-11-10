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

    console.log("planta",db);
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
        "Error en controller -> getDbId -> ID no se encuentra en la DB "
      );
    }

    const response = planta.dataValues;

    
    let plantaId = {
        namePlant: response.namePlant,
        descripPlant: response.descripPlant,
      ubication: response.ubication,
      light: response.luminosidad,
      wather: response.riego,
      size: response.tamano,
      type: response.tipo,
      climate: response.clima,
      toxicity: response.toxicidad,
      imagePlant: response.imagePlant
    };


    return plantaId;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
    getDbInfo,
    getDbId
}