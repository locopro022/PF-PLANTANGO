const cron = require("node-cron");
const { Router } = require("express")
const router = Router()

router.get('/', (req, res) => {
    console.log(new Date())
    try {
        cron.schedule('0 0 * * *', () => {
            console.log('cada 1 minuto')
        })
        res.status(200).json({ cosa: "cada1segundoXD" })
    } catch (error) {
        console.log("hola")
        res.status(404).json(error.message)
    }
});

module.exports = router;