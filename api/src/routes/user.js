const { Router } = require("express");
const { DailyUser, User, Plants, Favorites } = require("../db");

const UserR = Router();

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

// UserR.post("/", async (req, res) => {
//   try {
//     let { username, email, pass, name, lastName, nPhone } = req.body;

//     if (!username || !email) {
//       return res.status(400).json({ error: "falta usuario o mail" });
//     }
//     if (pass === "") pass = null;
//     if (name === "") name = null;
//     if (lastName === "") lastName = null;
//     if (nPhone === "") nPhone = null;

//     await User.create({
//       username,
//       email,
//       pass,
//       name,
//       lastName,
//       nPhone,
//     });
//     const tUser = await User.findAll({ where: { email } });
//     await DailyUser.create({
//       UserIdUser: tUser[0].dataValues.idUser,
//     });

//     return res
//       .status(201)
//       .send({ message: `${username}, tu usuario fue creado con exito!` });
//   } catch (error) {
//     return res.status(400).json({ error });
//   }
// });

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
    where: { UserIdUser: idU , PlantCodPlant: idP },
  });
  const tabla = await Favorites.findAll({ where: { UserIdUser: idU } });
  res.status(200).send(tabla);
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

UserR.put("/:idUser", async (req, res) => {
  try {
    const { idUser } = req.params;

    console.log(idUser);

    let { username, email, pass, name, lastName, nPhone } = req.body;

    if (!idUser) {
      return res.status(400).send({ error: "No se encontro la id" });
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
      res.status(200).json("Se modifico exitosamente el ususario");
    } else {
      throw new Error("ERROR /modify/:id");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = UserR;
