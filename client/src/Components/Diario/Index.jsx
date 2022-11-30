import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createDaily,
  deleteDailyUser,
  editDaily,
  getDaily,
  selectDetailDaily,
} from "../../redux/actions";
import AlPrincipio from "../AlPrincipio";
import "./diario.css";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import FeedIcon from '@mui/icons-material/Feed';

function Diario() {
  const dispatch = useDispatch()
  const diario = useSelector((e) => e.diario);
  const user = useSelector((e) => e.user);
  const [stdD, setStdD] = useState("");
  const [input, setInput] = useState({
    title: "",
    body: "",
  });
  const diarioDetail = useSelector((e) => e.diarioDetail);
  useEffect(() => {
    if (user && !diario.length && stdD === "") {
      dispatch(getDaily(user.idUser));
      setStdD("hay");
    }
    setInput({ title: diarioDetail.title, body: diarioDetail.cont });
  }, [dispatch, user, diario, diarioDetail]);
  if (diario.length) {
    console.log(diario[0].title);
  }

  function createADaily() {
    dispatch(createDaily(user.idUser));
  }
  async function hidenONDetail(e, el) {
    el.preventDefault();
    dispatch(
      selectDetailDaily({
        title: e.title,
        cont: e.cont,
        codDaily: e.codDaily,
        updatedAt: e.updatedAt,
        hiden: true,
      })
    );
  }
  async function deleteListDaily(e, el) {
    el.preventDefault();
    dispatch(deleteDailyUser(user.idUser, e.codDaily));
  }
  let mostrarBTN = diario.length && diarioDetail.hiden === false ? (
    <Button variant="contained" onClick={createADaily} color="primary"><FeedIcon />Crear nuevo diario</Button>
  ) : null;
  let mostrarDiario =
    diario.length && diarioDetail.hiden === false ? (
      <ul>
        {diario.map((e) => (
          <>
            <li>
              <a href="#">
                <Button onClick={(el) => hidenONDetail(e, el)}><EditIcon /></Button>
                <Button onClick={(el) => deleteListDaily(e, el)}><DeleteIcon /></Button>
                <h2>{e.title}</h2>
                <p>{e.cont}</p>
              </a>
            </li>
          </>
        ))}
      </ul>
    ) : diario.length && diarioDetail.hiden === true ? (
      <form>
        <TextField id="outlined-basic" label="Titulo" variant="outlined" name="title" value={input.title} onChange={(e) => handleInputChange(e)} />
        <TextField id="outlined-multiline-static" label="Descripcion" multiline rows={4} name="body" value={input.body} onChange={(e) => handleInputChange(e)} />
        <Button variant="contained" onClick={(e) => onSubmit(e)} color="primary"><SaveAsIcon />Guardar</Button>
      </form>
    ) : (
      <>
        <h3>Debes crear un diario</h3>
        <br />
        <Button variant="contained" onClick={createADaily} color="primary"><FeedIcon />Crear nuevo diario</Button>
      </>
    );

  async function onSubmit(e) {
    e.preventDefault();
    await dispatch(editDaily(user.idUser, diarioDetail.codDaily, input));
    await dispatch(
      selectDetailDaily({
        title: "",
        cont: "",
        codDaily: "",
        updatedAt: "",
        hiden: false,
      })
    );
    await dispatch(getDaily(user.idUser));
  }
  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <div className="globalDailyContainer">
      <AlPrincipio />
      <div className="contenedorRutDiarioGnrl">
        <div className="seccionDiario_rutDiario">
          {mostrarDiario}
          <br />
          {mostrarBTN}
        </div>
      </div>
    </div>
  );
}

export default Diario;
