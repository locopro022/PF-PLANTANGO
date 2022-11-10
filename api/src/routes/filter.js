const { Router } = require("express");
const { Plants } = require("../db");

const router = Router();


router.get("/toxicidadtrue", async (req,res)=> {
    

try {
    const prueba = await Plants.findAll({
        where: {
            toxicidad:true
        }
    })
   res.send(prueba).status(200)
} catch (error) {
    
}
})

router.get("/toxicidadfalse", async (req,res)=> {
    

    try {
        const prueba = await Plants.findAll({
            where: {
                toxicidad:false
            }
        })
       res.send(prueba).status(200)
    } catch (error) {
        
    }
    })

    router.post("/", async (req,res)=> {
    

        try {
            const {obj }=req.body;
            console.log("OBJ",obj);

            const valor = Object.values(obj)
            const propiedad = Object.keys(obj)
            console.log("VALOR ",valor," PROPIEDAD ",propiedad);
            const planta = await Plants.findAll()

           planta.forEach(e => {
            console.log("aca",e.namePlant);

            if(Object.keys(e) === propiedad){
                if(Object.values(e)===valor){
                    return `RESPONSE FINAL: ${e.namePlant}`
                    }
            }
           });

res.send("ok")
        } catch (error) {
            
        }
        })

module.exports = router;