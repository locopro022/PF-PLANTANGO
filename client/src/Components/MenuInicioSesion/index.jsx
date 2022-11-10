import React from "react";
import { AccountCircle } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./MenuInicioSesion.css";

//Menu despegable que aparece cuando el usuario no esta con la sesion iniciada.

const MenuInicioSesion = () => {
  const navigate = useNavigate();
  return (
    <div className="dropstart">
      <button
        className="btn btn-light backgroundBtn"
        type="button"
        aria-expanded="false"
        id="dropdownMenu1"
        data-toggle="dropdown"
      >
        <Badge>
          <AccountCircle color="secondary" />
        </Badge>
      </button>
      <div className="dropdown-menu">
        <span
          className="dropdown-item edit"
          onClick={() => navigate("/iniciarSesion")}
        >
          Iniciar sesión
        </span>
      </div>
    </div>
  );
};

export default MenuInicioSesion;
