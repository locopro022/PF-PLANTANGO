import React from "react";
import { AccountCircle } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "../MenuInicioSesion/MenuInicioSesion.css";
import { Badge } from "@mui/material";
import { useAuth0 } from "@auth0/auth0-react";

//Menu desplegable que aparece cuando la sesion esta iniciada.

const MenuSesionIniciada = () => {
  const {logout} = useAuth0()
  const navigate = useNavigate();
  return (
    <div className="dropdown-center">
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
          onClick={() => navigate("/ajustes")}
        >
          Ajustes
        </span>
        <span
          type="button"
          className="dropdown-item edit cerrarSe"
          onClick={() => logout()}
        >
          Cerrar sesion
        </span>
      </div>
    </div>
  );
};

export default MenuSesionIniciada;
