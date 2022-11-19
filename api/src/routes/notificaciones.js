const cron = require("node-cron");
const { Router } = require("express")

const router = Router()

router.post('/suscripcion', (req, res) => {
    res.status(200).json();
})

module.exports = router;