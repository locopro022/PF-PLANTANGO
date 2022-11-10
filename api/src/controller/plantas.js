const { Plants } = require("../db");
const dbBuild = require("../dbBuild");

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


//LLENAR DB 
const llenarDB = async ()=>{
 let db =  dbBuild.map((planta)=>{
  
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
  }
  })

  return db;
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
}

module.exports = {
    getDbInfo,
    getDbId,
    llenarDB
}