import React from "react";
import ContainerCardHome from "../ContainerCardHome";
import "./HomeApartadoTienda.css";

const HomeApartadoVivero = () => {
  return (
    <>
      <div className="containerGlobalCardHomeApartado">
        <h1 style={{ textAlign: "center" }}>
         Productos destacados
        </h1>
        <div className="containerCardHomeApartado">
          <ContainerCardHome />
        </div>
      </div>
    </>
  );
};

export default HomeApartadoVivero;