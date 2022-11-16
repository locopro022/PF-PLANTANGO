import React from "react";
import Usuarios from "./Usuarios";
import { useDispatch, useEffect } from "react-redux";
import { useState } from "react";
import Formulario from "./Formulario";

const UsuariosInfo = ()=> {


    return ( 
        <div className="container">
        <h1>Administrar usuarios</h1>
        <div className="flex-row">
            <div className="flex-large">
                <h2>Agregar usuario administrador</h2>
                <Formulario />
            </div>
            <div className="flex-large">
                <h2>Usuarios activos</h2>
                <Usuarios/>
            </div>
        </div>
        </div>
    )
}

export default UsuariosInfo;