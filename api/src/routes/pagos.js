const { Router } = require("express");
const Stripe = require("stripe");
const cors = require("cors");
const { STRIPE_KEY } = process.env;

const pago = Router();

const stripe = new Stripe(STRIPE_KEY);

pago.use(cors({ origin: "http://localhost:3000" }));

pago.post("/stripe", async (req, res) => {
  try{
    const {id, amount} = req.body;
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: 'USD',
      description: 'Pruebaaaaa',  
      payment_method: id,
      confirm: true
    });
    console.log(payment);
    res.send({message: 'Succesfull payment'});
  }catch(e){
    console.log(e);
    res.json({error: e.raw.message})
  }
});

module.exports = pago;
