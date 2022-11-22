import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createDaily,
  editDaily,
  getDaily,
  selectDetailDaily,
} from "../../redux/actions";
import Recordatorio from "../Recordatorio";
import AlPrincipio from "../AlPrincipio";
import "./Diario.css";

function Diario() {
  const dispatch = useDispatch();
  const diario = useSelector((e) => e.diario);
  const user = useSelector((e) => e.user);
  const [stdD, setStdD] = useState("");
  const [input, setInput] = useState({
    title: "",
    body: "",
  });
  const diarioDetail = useSelector((e) => e.diarioDetail);
  useEffect(() => {
    if (user.id && !diario.length && stdD === "") {
      dispatch(getDaily(user.id));
      setStdD("hay");
    }
    setInput({ title: diarioDetail.title, body: diarioDetail.cont });
  }, [dispatch, user, diario, diarioDetail]);
  if (diario.length) {
    console.log(diario[0].title);
  }

  function createADaily() {
    dispatch(createDaily(user.id));
    dispatch(getDaily(user.id));
  }
  function hidenONDetail(e, el) {
    el.preventDefault();
    dispatch(selectDetailDaily({ title: e.title, cont: e.cont,codDaily:e.codDaily, updatedAt:e.updatedAt, hiden: true }));
  }
  let mostrarDiario =
    diario.length && diarioDetail.hiden === false ? (
      diario.map((e) => (
        <>
          <span>{e.title}</span>
          <button onClick={(el) => hidenONDetail(e, el)}>editar</button>
          <button>delete</button>
          <span>{e.updatedAt}</span>
        </>
      ))
    ) : diario.length && diarioDetail.hiden === true ? (
      <form onSubmit={(e) => onSubmit(e)}>
        <input
          type="title"
          name="title"
          id="inputTitleDaily"
          value={input.title}
          onChange={(e) => handleInputChange(e)}
          autoComplete="off"
        />
        <input type="submit" value="editar" id="buttomGuardarDaily" />
        <textarea
          name="body"
          id="inputContDaily"
          value={input.body}
          onChange={(e) => handleInputChange(e)}
          autoComplete="off"
        />
      </form>
    ) : (
      <>
        <h3>Debes crear un diario</h3>
        <br />
        <button onClick={createADaily}>Crear nuevo diario</button>
      </>
    );

  async function onSubmit(e) {
    e.preventDefault();
    await dispatch(editDaily(user.id,diarioDetail.codDaily, input));
    await dispatch(selectDetailDaily({ title: "", cont: "",codDaily:"", updatedAt:"", hiden: false }));
    await dispatch(getDaily(user.id));
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
        {console.log(diarioDetail)}
        <div className="seccionDiario_rutDiario">{mostrarDiario}</div>
        <div className="seccionRecordatorio_rutDiario">
          <Recordatorio />
        </div>
      </div>
    </div>
  );
}

export default Diario;
