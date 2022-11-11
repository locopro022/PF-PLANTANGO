const { Router } = require("express");
const { DailyUser, User } = require("../db");


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
  const { id } = req.params;
  const { title, body } = req.body;

  if (!id) {
    return res.status(400).send({ error: "No se encontro la id" });
  } else {
    const daily = await DailyUser.findAll({ where: { UserIdUser: id } });
    await DailyUser.destroy({ where: { UserIdUser: id }, force: true });
    await DailyUser.create({
      codDaily: daily.codDaily,
      title: title,
      cont: body,
    });
    return res
      .status(201)
      .send({ message: "Los datos se cambiaron exitosamente" });
  }
});

UserR.post("/", async (req, res) => {
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
});

UserR.get("/", async(req, res)=>{
  const {username} = req.body;

  if(!username){
    return res.status(400).json({ error: "falta ingresar un usuario" });
  }
  const userTable = await User.findAll({where:{username}})
  return res.status(200).json(userTable);

})

UserR.put("/:idUser", async (req,res)=>{

  try {
    const {idUser} = req.params;

    console.log(idUser);

    let { username, email, pass, name, lastName, nPhone } = req.body;

    if (!idUser) {
      return res.status(400).send({ error: "No se encontro la id" });}

if(idUser){
  console.log("idUser: ",idUser);
  console.log("UserName: ",username);
  console.log("email: ",email);
  console.log("name: ",name);

await User.update({ username: username, email :email, pass : pass, name: name, lastName: lastName, nPhone:nPhone }, {
  where: { idUser}
})
res.status(200).json("Se modifico exitosamente el ususario")
} else {
  throw new Error("ERROR /modify/:id")
}

  } catch (error) {
    res.status(400).json(error.message)
  }

})

module.exports = UserR;