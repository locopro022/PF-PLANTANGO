const { Router } = require("express");
const { premiumController } = require("../controller/mercadoPago.js")

const merPago = Router();

merPago.post("/", premiumController);

module.exports = merPago;