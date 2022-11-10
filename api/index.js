//                   .
//                 ('
//                 '|
//                 |'
//                [::]
//                [::]   _......_
//                [::].-'      _.-`.
//                [:.'    .-. '-._.-`.
//                [/ /\   |  \        `-..
//                / / |   `-.'      .-.   `-.
//               /  `-'            (   `.    `.
//              |           /\      `-._/      \
//              '    .'\   /  `.           _.-'|
//             /    /  /   \_.-'        _.':;:/
//           .'     \_/             _.-':;_.-'
//          /   .-.             _.-' \;.-'
//         /   (   \       _..-'     |
//         \    `._/  _..-'    .--.  |
//          `-.....-'/  _ _  .'    '.|
//                   | |_|_| |      | \  (o)
//              (o)  | |_|_| |      | | (\'/)
//             (\'/)/  ''''' |     o|  \;:;
//              :;  |        |      |  |/)
//               ;: `-.._    /__..--'\.' ;:
//                   :;  `--' :;   :;
// plantango.app                                    <3
// ===================================================
const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { buildPlantsDB } = require("./src/buildDB.js");

// Sincronizar todos los modelos simultaneamente
// Esuchenmen, por ahora vamos a poner la bdd en fore: true, solo para evitar problemas a futuro.
// En el deploy, vamos a ver como hacemos.
conn
  .sync({ force: false })
  .then(buildPlantsDB)
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  });
