require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST,
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/plantango`, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring

const { User, DailyUser, Plants, Category, Product, Billing, BillingDetail, Notification } = sequelize.models;

// un producto tiene una categoria - una categoria tiene muchos productos
Product.hasOne(Category)
Category.hasMany(Product)

//Relaciones
// un usuario - tiene un diario
User.hasOne(DailyUser);
DailyUser.belongsTo(User);

//una Categoria - tiene muchos productos
Product.belongsTo(Category, { foreignKey: 'codCategory' })
Category.hasMany(Product, { foreignKey: 'codCategory' });

//un usuario - tiene muchas facturas
Billing.belongsTo(User, { foreignKey: 'idUser' })
User.hasMany(Billing, { foreignKey: 'idUser' });

//una factura - tiene muchos detalle-factura (Productos)
BillingDetail.belongsTo(Billing, { foreignKey: 'codBilling' })
Billing.hasMany(BillingDetail, { foreignKey: 'codBilling' });

//un producto - tiene muchos detalles-factura
BillingDetail.belongsTo(Product, { foreignKey: 'codProd' });
Product.hasMany(BillingDetail, { foreignKey: 'codProd' })


//muchos usuarios - muchos favoritos

User.belongsToMany(Plants, { through: "Favorites", timestamps: false, });
Plants.belongsToMany(User, { through: "Favorites", timestamps: false, });

// Aca vendrian las relaciones
// Product.hasMany(Reviews);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
