import React from "react";
import Usuarios from "./Usuarios";
import Formulario from "./Formulario";

const UsuariosInfo = () => {
  return (
    <div style={{ display: "table", textAlign: 'center' }} className="container">
      <h1 style={{ color: '#57652a' }}>Administrar usuarios</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2 style={{ color: '#57652a' }}>Agregar usuario administrador</h2>
          <Formulario />
        </div>
        <div className="flex-large" style={{ display: 'flex', flexDirection: 'column', border: 'solid 1px #57652a', borderRadius: '30px' }}>
          <h2 style={{ marginTop: '0px', fontSize: 'x-large', color: '#57652a' }}>Usuarios activos</h2>
          <Usuarios />
        </div>
      </div>
    </div >
  );
};

export default UsuariosInfo;