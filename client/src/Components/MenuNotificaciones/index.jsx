import React from "react";
import { Notifications } from "@mui/icons-material";
import { Badge } from "@mui/material";

//Menu despegable de las notificaciones

const MenuNotificaciones = () => {
  return (
    <div className="dropstart">
      <button
        className="btn btn-light backgroundBtn"
        type="button"
        aria-expanded="false"
        id="dropdownMenu1"
        data-toggle="dropdown"
      >
        <Badge badgeContent={1} color="error">
          <Notifications color="secondary" />
        </Badge>
      </button>
      <div className="dropdown-menu">
        <p className="dropdown-item">No tiene ninguna notificación</p>
      </div>
    </div>
  );
};

export default MenuNotificaciones;
