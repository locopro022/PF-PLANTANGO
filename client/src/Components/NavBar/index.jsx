import React, { useState } from "react";
import platango from "../../img/plantangoIcono.png";
import "./NavBar.css";
import { ShoppingCart } from "@mui/icons-material";
import { IconButton, Badge } from "@mui/material";
import MenuDesplegable from "../MenuDesplegable";
import { NavLink, useNavigate } from "react-router-dom";
import Carrito from "../Carrito";
import MenuNotificaciones from "../MenuNotificaciones";
import MenuInicioSesion from "../MenuInicioSesion";
import MenuSesionIniciada from "../MenuSesionIniciada";
import { useAuth0 } from "@auth0/auth0-react";

const NavBar = () => {
  const {isAuthenticated} = useAuth0()
  const navigate = useNavigate();
  console.log("cuenta logueada?",isAuthenticated);
  return (
    <div className="containerNavBar">
      <div className="containerUl deshabilitadoUl">
        <ul className="containerSpan">
          <NavLink
            className={(isActive) =>
              isActive.isActive ? "itemActivo" : "item uno"
            }
            to="/home"
          >
            <span className="span">Home</span>
          </NavLink>
          <NavLink
            className={(isActive) =>
              isActive.isActive ? "itemActivo" : "item uno"
            }
            to="/vivero"
          >
            <span className="span">Vivero</span>
          </NavLink>
          <NavLink
            className={(isActive) =>
              isActive.isActive ? "itemActivo" : "item uno"
            }
            to="/huerta"
          >
            <span className="span">Huerta</span>
          </NavLink>
          <NavLink
            className={(isActive) =>
              isActive.isActive ? "itemActivo" : "item uno"
            }
            to="/recordatorio"
          >
            <span className="span">Recordatorio</span>
          </NavLink>
          <NavLink
            className={(isActive) =>
              isActive.isActive ? "itemActivo" : "item uno"
            }
            to="/favoritos"
          >
            <span className="span">Favoritos</span>
          </NavLink>
        </ul>
      </div>
      <MenuDesplegable />
      <img
        src={platango}
        alt="plantango"
        className="imgPlan"
        onClick={() => navigate("/home")}
      />
      <div className="containerBtns">
        <IconButton size="large" color="default">
          <Badge
            badgeContent={1}
            color="error"
            data-toggle="modal"
            data-target="#exampleModalCenter"
          >
            <Carrito />
            <ShoppingCart color="secondary" />
          </Badge>
        </IconButton>
        <MenuNotificaciones />
        {isAuthenticated ? <MenuSesionIniciada /> : <MenuInicioSesion />}
      </div>
    </div>
  );
};

export default NavBar;
