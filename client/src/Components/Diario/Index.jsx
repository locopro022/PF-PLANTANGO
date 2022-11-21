import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editDaily, getDaily } from "../../redux/actions";
import Recordatorio from '../Recordatorio'
import './Diario.css'

function Diario() {
  const dispatch = useDispatch();
  const diario = useSelector((e) => e.diario);
  const user = useSelector((e) => e.user);

  const [input, setInput] = useState({
    title: "",
    body: "",
  });
  useEffect(() => {
    if (user.id && !diario.length) {
      dispatch(getDaily(user.id));
    }
    if (diario.length) {
      setInput({ title: diario[0].title, body: diario[0].cont });
    }
  }, [dispatch, user, diario]);
  if (diario.length) {
    console.log(diario[0].title);
  }

  async function onSubmit(e) {
    e.preventDefault();
    dispatch(editDaily(user.id, input))
  }
  function handleInputChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    console.log(input)
  }
  return (
    <div className="contenedorRutDiarioGnrl">
      <div className="seccionDiario_rutDiario">
        <form onSubmit={(e) => onSubmit(e)}>
          <input
            type="title"
            name="title"
            value={input.title}
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"
          />
          <input
            type="text"
            name="body"
            value={input.body}
            onChange={(e) => handleInputChange(e)}
            autoComplete="off"
          />
          <input type="submit" value="editar" />
        </form>
      </div>
      <div className="seccionRecordatorio_rutDiario">
        <Recordatorio />
      </div>
    </div>
  );
}

export default Diario;
