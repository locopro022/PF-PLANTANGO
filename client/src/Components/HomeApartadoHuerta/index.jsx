import React from "react";
import ContainerCardHuertaHome from "../ContainerCardHuertaHome";
import { useSelector } from "react-redux";
import "./HomeApartadoHuerta.css";

const HomeApartadoHuerta = () => {
  const arrayHuerta = useSelector((state) => state.arrayHuerta);
  const arrayRecortado = arrayHuerta.results?.slice(0, 6)
  return (
    <>
      {
        arrayRecortado?.length ?
          <>
            <div style={{ marginTop: "20px" }}>
              <h1 style={{ textAlign: "center" }}>
                Investiga plantas en nuestra huerta
              </h1>
              <div className="containerHuertaHome">
                {arrayRecortado?.map((planta, i) => {
                  return (
                    <ContainerCardHuertaHome planta={planta} key={i} />
                  )
                }
                )}
              </div>
            </div>
          </>
          :
          null
      }
    </>
  );
};

export default HomeApartadoHuerta;
