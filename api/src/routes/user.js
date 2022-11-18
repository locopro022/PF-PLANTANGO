const { Router } = require("express");
const { where } = require("sequelize");
const { DailyUser, User, Plants, Favorites, Notification } = require("../db");
const cron = require("node-cron");

const UserR = Router();
//Traer todos los usuarios 

UserR.get("/all", async (req, res) => {


  try {
    console.log("ENTRE A LA RUTA ALL");

    const allUsers = await User.findAll();

    console.log("allUsers: ", allUsers);

    if (!allUsers) {
      return res.status(400).json({ error: "Error en ruta get /user/all" })
    }

    return res.status(200).json(allUsers)
  } catch (error) {
    res.status(400).send(error.message)
  }
})

UserR.get("/daily/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      let diario = await DailyUser.findAll({ where: { UserIdUser: id } });
      return res.status(200).json(diario[0]);
    } else {
      return res.status(400).send({ error: "No se encontro la id" });
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

UserR.put("/daily/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;

    if (!id) {
      return res.status(400).send({ error: "No se encontro la id" });
    } else {
      await DailyUser.update(
        { title: title, cont: body },
        { where: { UserIdUser: id } }
      );
      return res
        .status(201)
        .send({ message: "Los datos se cambiaron exitosamente" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

UserR.post("/", async (req, res) => {
  try {
    let { username, email, pass, name, lastName, nPhone } = req.body;

    if (!username || !email) {
      return res.status(400).json({ error: "falta usuario o mail" });
    }
    if (pass === "") pass = null;
    if (name === "") name = null;
    if (lastName === "") lastName = null;
    if (nPhone === "") nPhone = null;

    await User.create({
      username,
      email,
      pass,
      name,
      lastName,
      nPhone,
    });
    const tUser = await User.findAll({ where: { email } });
    await DailyUser.create({
      UserIdUser: tUser[0].dataValues.idUser,
    });

    return res
      .status(201)
      .send({ message: `${username}, tu usuario fue creado con exito!` });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

UserR.get("/:email", async (req, res) => {
  const { email } = req.params;
  if (!email) {
    return res
      .status(400)
      .json({ error: "falta ingresar un usuario por email" });
  }
  const userTable = await User.findAll({ where: { email } });
  if (!userTable.length) {
    await User.create({ email: email, username: email });
    const userTableF = await User.findAll({ where: { email } });
    return res.status(200).json({
      username: userTableF[0].dataValues.username,
      email: userTableF[0].dataValues.email,
      id: userTableF[0].dataValues.idUser,
    });
  }
  return res.status(200).json({
    username: userTable[0].dataValues.username,
    email: userTable[0].dataValues.email,
    id: userTable[0].dataValues.idUser,
  });
});

UserR.post("/favorites/:idU/:idP", async (req, res) => {
  try {
    const { idU, idP } = req.params;
    if (!idU || !idP) {
      return res
        .status(400)
        .send({ error: "No eviaste la id del usuario o planta" });
    }
    const user = await User.findByPk(idU);
    const planta = await Plants.findByPk(idP);

    user.addPlants(planta);
    return res.status(201).send({
      message: `Se añadio ${planta.namePlant}, a los favoritos de ${user.username}`,
    });
  } catch (error) {
    return res.status(400).json({ error });
  }
});

UserR.get("/favorites/:idU", async (req, res) => {
  try {
    const { idU } = req.params;
    if (!idU) {
      return res.status(400).send({ error: "No eviaste el id del usuario" });
    }

    const favId = await Favorites.findAll({ where: { UserIdUser: idU } });

    let planstasFinal = []
    for (let i = 0; i < favId.length; i++) {
      let plantasF = await Plants.findAll({
        where: { codPlant: favId[i].dataValues.PlantCodPlant },
      });
      planstasFinal.push(plantasF[0])
    }
    res.status(200).send(planstasFinal);
  } catch (error) {
    return res.status(400).json({ error });
  }
});
UserR.delete("/favorites/delete/:idU/:idP", async (req, res) => {
  const { idU, idP } = req.params;
  try {
    await Favorites.destroy({
      where: { UserIdUser: idU, PlantCodPlant: idP },
    });
    const tabla = await Favorites.findAll({ where: { UserIdUser: idU } });
    res.status(200).send(tabla);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

//Modificar datos de un usuario
UserR.put("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;

    console.log(idUser);

    let { username, email, pass, name, lastName, nPhone } = req.body;


    if (!username || !email || !pass || !name || !lastName || !nPhone) {
      return res.status(400).json({ error: "Faltan datos" })
    }
    if (!idUser) {
      return res.status(400).json({ error: "No se encontro el id" });
    }

    if (idUser) {
      console.log("idUser: ", idUser);
      console.log("UserName: ", username);
      console.log("email: ", email);
      console.log("name: ", name);

      await User.update(
        {
          username: username,
          email: email,
          pass: pass,
          name: name,
          lastName: lastName,
          nPhone: nPhone,
        },
        {
          where: { idUser },
        }
      );
      res.status(200).json("Se modifico exitosamente el usuario");
    } else {
      throw new Error("ERROR /modify/:id");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//Borrado logico de user
UserR.delete("/:idUser", async (req, res) => {
  try {

    console.log("llego a delete user");
    const { idUser } = req.params;
    const eliminarUser = await User.findByPk(idUser);
    if (!eliminarUser) {
      return res.status(400).json({ error: "No se encontro el id en la DB" })
    }

    await User.update(
      {
        hidden: true
      },
      {
        where: { idUser }
      }
    )

    console.log("usuario a eliminar", eliminarUser);
    res.status(200).json("Usuario con borrado lógico");

  } catch (error) {
    res.status(400).json(error.message)
  }

})

//Crear user admin
UserR.post("/admin", async (req, res) => {
  try {

    console.log("entre a la ruta");
    const { username, email, pass, name, lastName, nPhone } = req.body;

    console.log(username, email, pass, name, lastName, nPhone);

    if (!username || !email || !pass || !name) {
      return res.send(400).json("mal perri")
    }

    !nPhone ? null : nPhone;
    !lastName ? null : lastName;

    const newAdmin = await User.create({
      username, email, pass, name, lastName, nPhone,
      admin: true
    })
    console.log(newAdmin);
    res.status(200).send(newAdmin)

  } catch (error) {
    res.status(404).json("Error en /user/admin", error.message)
  }
})

module.exports = UserR;
