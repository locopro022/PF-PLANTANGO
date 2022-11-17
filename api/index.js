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
const { llenarDB } = require("./src/controller/plantas.js");
const { llenarCategory, llenarProduct, llenarUser, llenarBilling, llenarBillingDetail } = require("./src/controller/Billing.js");
const { conn } = require("./src/db.js");

// Syncing all the models at once.
conn
  .sync({ force: true })
  .then(llenarDB)
  .then(llenarCategory)
  .then(llenarProduct)
  .then(llenarUser)
  .then(llenarBilling)
  .then(llenarBillingDetail)
  .then(() => {
    server.listen(3001, () => {
      console.log("%s listening at 3001"); // eslint-disable-line no-console
    });
  });
