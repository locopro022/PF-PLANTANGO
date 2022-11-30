const { Router } = require("express");
const { where } = require("sequelize");
const { DailyUser, User, Plants, Favorites, Notification } = require("../db");
const cron = require("node-cron");
const notifier = require("node-notifier");
const UserR = Router();
const nodemailer = require("nodemailer");
const path = require("path");
//Traer todos los usuarios

UserR.delete("/delete", async (req, res) => {
  const { horario, usuario } = req.query;
  try {
    await Notification.destroy({ where: { horario: horario } });
    const nuevo = await Notification.findAll({ where: { usuario: usuario } });
    res.status(200).json(nuevo);
  } catch (error) {
    res.status(404).json(error.message)
  }
});

UserR.get("/traer/notifi/noti", async (req, res) => {
  const { usuario } = req.query;
  try {
    const respuesta = await Notification.findAll({
      where: { usuario: usuario },
    });
    res.status(200).json(respuesta);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

UserR.post("/recordatorio", async (req, res) => {
  const { usuario, horario } = req.query;
  try {
    await Notification.create({
      usuario,
      horario,
    });
    res.status(200).json("creado con exito");
  } catch (error) {
    res.status(400).json(error.message);
  }
});

UserR.get("/noti/notifi", async (req, res) => {
  const { usuario } = req.query;
  try {
    let horarios = await Notification.findAll({ where: { usuario: usuario } });
    let array = horarios.map((ele) => ele.dataValues.horario);
    let devuelve = array.map((ele) => {
      let hora = parseInt(ele.split("").slice(0, 2).join(""));
      let minutos = parseInt(ele.split("").slice(2, 4).join(""));
      return cron.schedule(`${minutos} ${hora} * * *`, () => {
        notifier.notify(
          {
            title: "Recordatorio de riego",
            message: `No olvide su recordatorio a las ${hora}:${minutos}`,
            icon: path.join(
              "https://res.cloudinary.com/doycjj3gx/image/upload/v1668973270/imagen/lv1ucxo4pqdp7jwlsbdn.png"
            ),
          },
          async function (err, response, metadata) {
            let transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 465,
              secure: true,
              auth: {
                user: "lean.damianflorentin@gmail.com",
                pass: "cllqcuhrqrwypvoz",
              },
            });
            await transporter.sendMail({
              from: '"Plantango" <Platango@gmail.com>',
              to: `${usuario}`,
              subject: `Recordatorio de riego`,
              html: `
            <b>No olvides tu recordatorio a las ${hora}:${minutos}</b><br>
            <a href='http://localhost:3000/vivero'>Visita nuestro vivero</a><br>
            <a href='http://localhost:3000/huerta'>Investiga en nuestra huerta</a>
            `,
            });
          }
        );
        res.status(200).json({ hora: hora, minutos: minutos });
      });
    });
    devuelve.forEach((ele) => ele);
  } catch (error) {
    res.status(404).json(error.message);
  }
});

UserR.get("/all", async (req, res) => {
  try {

    const allUsers = await User.findAll();

    if (!allUsers) {
      return res.status(400).json({ error: "Error en ruta get /user/all" });
    }

    return res.status(200).json(allUsers);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

UserR.get("/daily/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id) {
      let diario = await DailyUser.findAll({
        where: { idUD: id },
      });
      return res.status(200).send(diario);
    } else {
      return res.status(400).send({ error: "No se encontro la id" });
    }
  } catch (error) {
    res.status(400).send({ error: error });
  }
});
UserR.post("/daily/:idU", async (req, res) => {
  const { idU } = req.params;
  try {
    if (!idU) {
      return res.status(400).send({ error: "No se encontro la id" });
    }
    await DailyUser.create({ idUD: idU });
    let resp = await DailyUser.findAll({ where: { idUD: idU } });
    return res.status(201).send(resp)
  } catch (error) {
    res.status(400).send({ error: error });
  }
});

UserR.put("/daily/:idU/:idD", async (req, res) => {
  try {
    const { idU, idD } = req.params;
    const { title, body } = req.body;

    if (!idU || !idD) {
      return res.status(400).send({ error: "No se encontro la id" });
    } else {
      await DailyUser.update(
        { title: title, cont: body },
        { where: { idUD: idU, codDaily: idD } }
      );
      return res
        .status(201)
        .send({ message: "Los datos se cambiaron exitosamente" });
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
});

UserR.delete("/daily/:idU/:idD", async (req, res) => {
  try {
    const { idU, idD } = req.params;

    if (!idU || !idD) {
      return res.status(400).send({ error: "No se encontro la id" });
    } else {
      await DailyUser.destroy({ where: { idUD: idU, codDaily: idD } })
      let resp = await DailyUser.findAll({ where: { idUD: idU } });
      return res.status(200).send(resp)
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
  try {
    const { email } = req.params;
    const [found, created] = await User.findOrCreate({
      where: { email },
      defaults: { email, username: email },
    });
    res.status(201).json(created || found);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }
  // const userTable = await User.findAll({ where: { email } });
  // if (!userTable.length) {
  //   await User.create({ email: email, username: email });
  //   const userTableF = await User.findAll({ where: { email } });
  //   return res.status(200).json({
  //     username: userTableF[0].dataValues.username,
  //     email: userTableF[0].dataValues.email,
  //     id: userTableF[0].dataValues.idUser,
  //   });
  // }
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

    let planstasFinal = [];
    for (let i = 0; i < favId.length; i++) {
      let plantasF = await Plants.findAll({
        where: { codPlant: favId[i].dataValues.PlantCodPlant },
      });
      planstasFinal.push(plantasF[0]);
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
      return res.status(400).json({ error: "Faltan datos" });
    }
    if (!idUser) {
      return res.status(400).json({ error: "No se encontro el id" });
    }

    if (idUser) {
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
      return res.status(400).json({ error: "No se encontro el id en la DB" });
    }

    await User.update(
      {
        hidden: true,
      },
      {
        where: { idUser },
      }
    );

    console.log("usuario a eliminar", eliminarUser);
    res.status(200).json("Usuario con borrado lógico");
  } catch (error) {
    res.status(400).json(error.message);
  }
});

//Crear user admin
UserR.post("/admin", async (req, res) => {
  try {
    console.log("entre a la ruta");
    const { username, email, pass, name, lastName, nPhone } = req.body;

    console.log(username, email, pass, name, lastName, nPhone);

    if (!username || !email || !pass || !name) {
      return res.send(400).json("mal perri");
    }

    !nPhone ? null : nPhone;
    !lastName ? null : lastName;

    const newAdmin = await User.create({
      username,
      email,
      pass,
      name,
      lastName,
      nPhone,
      admin: true,
    });
    console.log(newAdmin);
    res.status(200).send(newAdmin);
  } catch (error) {
    res.status(404).json("Error en /user/admin", error.message);
  }
});

module.exports = UserR;
