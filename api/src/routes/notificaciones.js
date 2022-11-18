const cron = require("node-cron");
const { Router } = require("express")
const webpush = require('../webpush.js');

const router = Router()

router.post('/suscripcion', (req, res) => {
    console.log(req.body)
    res.status(200).json();
})

module.exports = router;