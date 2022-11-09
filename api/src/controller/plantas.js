const { Plants } = require("../db");

//TRAER DATOS DE LA DB
const getDbInfo = async () => {
  try {
    let db = await Plants.findAll();

    let response = await db.map((planta) => {
      return {
        name: planta.NOMBRE,
        description: planta.DESCRIPCION,
        ubication: planta.UBICACION,
        light: planta.LUMINOSIDAD,
        wather: planta.RIEGO,
        size: planta.TAMANIO,
        type: planta.TIPO,
        clima: planta.PREFERENCIA_CLIMATICA,
        toxicity: planta.TOXICIDAD,
      };
    });

    return response;
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

    // if (!response) {
    //   throw new Error(
    //     "Error en controller -> getDbId -> ID no se encuentra en la DB "
    //   );
    // }

    

    console.log("RTA",planta.Plants);

    // let response = {
    //     namePlant: planta.namePlant,
    //     descripPlant: planta.descripPlant,
    //   ubication: planta.ubication,
    //   light: planta.luminosidad,
    //   wather: planta.riego,
    //   size: planta.tamano,
    //   type: planta.tipo,
    //   clima: planta.clima,
    //   toxicity: planta.toxicidad,
    // };


    // return response;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
    getDbInfo,
    getDbId
}