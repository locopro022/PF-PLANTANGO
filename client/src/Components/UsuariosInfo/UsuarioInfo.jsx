import React from "react";
import Usuarios from "./Usuarios";
import { useDispatch, useEffect } from "react-redux";
import { useState } from "react";
import Formulario from "./Formulario";

const UsuariosInfo = () => {
  return (
    <div style={{ display: "table", textAlign: 'center' }} className="container">
      <h1 style={{color: '#21825c'}}>Administrar usuarios</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2 style={{color: '#424141'}}>Agregar usuario administrador</h2>
          <Formulario />
        </div>
        <div className="flex-large" style={{display: 'flex', flexDirection: 'column', border: 'solid 2px #42414187', borderRadius: '6px'}}>
          <h2 style={{marginTop: '0px', fontSize: 'x-large'}}>Usuarios activos</h2>
          <Usuarios />
        </div>
      </div>
    </div>
  );
};

export default UsuariosInfo;