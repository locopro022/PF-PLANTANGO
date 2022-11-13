import React from "react";
import { AccountCircle } from "@mui/icons-material";
import { Badge } from "@mui/material";
import "./MenuInicioSesion.css";
import { useAuth0 } from "@auth0/auth0-react";

//Menu despegable que aparece cuando el usuario no esta con la sesion iniciada.

const MenuInicioSesion = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="btn-group dropleft">
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
          onClick={() => loginWithRedirect()}
        >
          Iniciar sesión
        </span>
      </div>
    </div>
  );
};

export default MenuInicioSesion;
