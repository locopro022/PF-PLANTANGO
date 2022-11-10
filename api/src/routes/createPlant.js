const { Router } = require("express");
const { Plants } = require("../db");
const router = Router();

//http://localhost:3001/plants/create/
router.post('/', async (req, res)=> {
    const {namePlant, descripPlant} = req.body
    if (!namePlant || !descripPlant ) return res.status(404).send("Falta enviar datos obligatorios")
    try{
        await Plants.create(req.body);
        res.status(200).send({ msg: "Plant successfully created" });
    }
    catch (error){
        res.status(404).send("Error en alguno de los datos provistos")
    }
})

module.exports = router;





