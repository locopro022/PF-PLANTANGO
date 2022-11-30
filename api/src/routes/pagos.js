const express = require('express');
const pagos = express();
const cors = require("cors");
pagos.use(
  cors({
    origin: ["http://localhost:3001", "https://checkout.stripe.com", "https://plantango.vercel.app"],
  })
);
// const stripe = require('stripe')('sk_test_51M4r6KE0RaxicoaffBhIbFPuHCOEvqzNzmxo4RgTseEytjGAOckS3kAl1j3OZDDMIhhQNNxLqXPiUuUj16XLtQzS00sYj5nGq1')

const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


pagos.post('/create-checkout-session', async (req, res) => {
  const { items, email } = req.body;
  if (items) {
    const session = await stripe.checkout.sessions.create({
      customer_email: email,
      line_items: items,
      mode: 'payment',
      success_url: 'https://plantango.vercel.app//success',
      cancel_url: 'https://plantango.vercel.app//cancel',
    });
    // console.log(session);

    res.json(session.url);
  } else {
    res.json({ info: "Tu carrito está vacío, visita el vivero!" })
  }
});

module.exports = pagos