const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors")

const routes = require("./routes/plants.js");
const UserR = require("./routes/user.js");

const bill = require("./routes/billings.js");
const prod = require("./routes/products.js");
const noti = require("./routes/notificaciones.js");
const pagos = require("./routes/pagos.js");
// const cors = require("cors");
require("./db.js");

const server = express();

server.name = "API";

server.use(cors({
  origin: ["http://localhost:3001", "https://checkout.stripe.com", "https://pf-plantango.vercel.app/"],
}))
server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
server.use(bodyParser.json({ limit: "50mb" }));
server.use(cookieParser());
server.use(morgan("dev"));
server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from// update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "https://checkout.stripe.com");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use("/bill", bill);
server.use("/plants", routes);
server.use("/user", UserR)
server.use("/products", prod)
server.use("/noti", noti)
server.use("/pagos", pagos)

// Error catching endware.
server.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;