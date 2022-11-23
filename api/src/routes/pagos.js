const express = require('express');
const pagos = express();
// const stripe = require('stripe')('sk_test_51M4r6KE0RaxicoaffBhIbFPuHCOEvqzNzmxo4RgTseEytjGAOckS3kAl1j3OZDDMIhhQNNxLqXPiUuUj16XLtQzS00sYj5nGq1')

const Stripe = require("stripe")
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);


pagos.post('/create-checkout-session', async (req, res) => {
  const {items} = req.body;
  // console.log(items);
  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: 'payment',
    success_url: 'http://localhost:3000/vivero',
    cancel_url: 'http://localhost:3000/vivero',
  });

  res.json(session.url);
});

module.exports = pagos