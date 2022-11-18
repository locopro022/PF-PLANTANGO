const cron = require("node-cron");
const { Router } = require("express")
const router = Router()

router.get('/', (req, res) => {
    console.log(new Date())
    try {
        cron.schedule('19 21 * * *', () => {
            console.log("holitas")
        })
        res.status(200).json({ cosa: "cada1segundoXD" })
    } catch (error) {
        console.log("hola")
        res.status(404).json(error.message)
    }
});

module.exports = router;