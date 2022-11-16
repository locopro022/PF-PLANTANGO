//                         .
//                        .:.
//                        :|:
//                       .:|:.
//                       ::|::
//        :.             ::|::             .:
//        :|:.          .::|::.          .:|:
//        ::|:.         :::|:::         .:|:;
//        `::|:.        :::|:::        .:|::'
//         ::|::.       :::|:::       .::|:;
//         `::|::.      :::|:::      .::|::'
//          :::|::.     :::|:::     .::|::;
//          `:::|::.    :::|:::    .::|::;'
// `::.      `:::|::.   :::|:::   .::|::;'      .:;'
//  `:::..     ¹::|::.  :::|:::  .::|::¹    ..::;'
//    `:::::.    ':|::. :::|::: .::|:'   ,::::;'
//      `:::::.    ':|:::::|:::::|:'   :::::;'
//        `:::::.:::::|::::|::::|::::.,:::;'
//           ':::::::::|:::|:::|:::::::;:'
//              ':::::::|::|::|:::::::''
//                   `::::::::::;'
//                  .:;'' ::: ``::.
//                       :':':
//                         ;
// [plantango.app]
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { llenarDBPlants } = require("./src/controller/plantas.js");
const { llenarDBProd } = require("./src/controller/productos.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
// Por motivos de desarrollo, podrian dejar la syncronizacion forzada?
// Gracias -La Administracion (osea yo).
conn
  .sync({ force: true })
  .then(llenarDBPlants)
  .then(llenarDBProd)
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  });
