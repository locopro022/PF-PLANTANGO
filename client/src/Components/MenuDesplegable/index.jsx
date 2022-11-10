import React from "react";
import "./MenuDesplegable.css";
import list from "../../img/list.svg";
import { useNavigate } from "react-router-dom";

//Menu desplegable que aparece en la NavBar cuando los pixeles sean de 1024.

const MenuDesplegable = () => {
  const navigate = useNavigate();
  return (
    <div className="dropdown ancho deshabilitado">
      <img
        src={list}
        alt="Bootstrap"
        width="70"
        height="70"
        type="button"
        className="btn dropdown-toggle"
        id="dropdownMenu1"
        data-toggle="dropdown"
      />
      <ul
        className="dropdown-menu pull-right"
        role="menu"
        aria-labelledby="dropdownMenu1"
      >
        <li role="presentation" onClick={() => navigate("/home")}>
          Home
        </li>
        <li role="presentation" onClick={() => navigate("/vivero")}>
          Vivero
        </li>
        <li role="presentation" onClick={() => navigate("/huerta")}>
          Huerta
        </li>
        <li role="presentation" onClick={() => navigate("/recordatorio")}>
          Recordatorio
        </li>
        <li role="presentation" onClick={() => navigate("contacto")}>
          Contacto
        </li>
      </ul>
    </div>
  );
};

export default MenuDesplegable;
