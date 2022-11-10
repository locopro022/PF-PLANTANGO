const plants = require("./plants");
const { Plants } = require("./db");

const buildPlantsDB = async () => {
  try {
    const beforeBuildPlants = await Plants.findAll();

    if (beforeBuildPlants.length > 0) {
      console.log(
        "WARNING Ya hay plantas presentes, no se agregaron nuevas plantas."
      );
      return;
    }
    await Plants.bulkCreate(plants);
    console.log("Las plantas han sido agregadas correctamente.");
  } catch (e) {
    console.log(
      "ERROR Hubo un problema agregando las plantas, ldlla!!!\n",
      e.message
    );
  }
};

module.exports = { buildPlantsDB };
