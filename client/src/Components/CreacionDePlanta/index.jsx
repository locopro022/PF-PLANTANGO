import React from "react";
import { plantaCreada } from "../../redux/actions";
import ContainerFormPlanta from "../ContainerFormPlanta";
import "./CreacionDePlanta.css";

const CreacionDePlanta = () => {
  return (
    <div className="containerCreacionPlanta">
      <div className="card estilos" style={{ width: "60rem" }}>
        <h2
          className="card-img-top"
          style={{ background: "#28A745", color: "#fff" }}
        >
          Crea tu planta
        </h2>
        <div className="card-body">
          <ContainerFormPlanta />
        </div>
      </div>
    </div>
  );
};

export default CreacionDePlanta;
