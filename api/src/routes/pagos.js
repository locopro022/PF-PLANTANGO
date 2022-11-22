const express = require('express');
const pagos = express();
const cors = require("cors");
const axios = require('axios')
const stripe = require('stripe')('sk_test_51M4r6KE0RaxicoaffBhIbFPuHCOEvqzNzmxo4RgTseEytjGAOckS3kAl1j3OZDDMIhhQNNxLqXPiUuUj16XLtQzS00sYj5nGq1')

// pagos.use(cors())

pagos.post('/create-checkout-session', cors(), async (req, res) => {
  const {items} = req.body;
  console.log(items);
  const session = await stripe.checkout.sessions.create({
    line_items: items,
    mode: 'payment',
    success_url: 'http://localhost:3000/',
    cancel_url: 'http://localhost:3000/',
  });

  res.redirect(303, session.url);
});

module.exports = pagos