import React from "react";
import { useSelector } from "react-redux";
import ContainerCardHome from "../ContainerCardHome";
import "./HomeApartadoTienda.css";

const HomeApartadoVivero = () => {
  /* const arrayVivero = useSelector(state => state.arrayVivero).slice(0, 4) */
  const arrayVivero = [
    {
      NOMBRE: "Special title treatment",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
    {
      NOMBRE: "Special title treatment",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
    {
      NOMBRE: "Special title treatment",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
    {
      NOMBRE: "Special title treatment",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
    {
      NOMBRE: "Special title treatment",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
    {
      NOMBRE: "Special title treatment",
      TIPO: "With supporting text below as a natural lead-in to additional content.",
      IMAGEN:
        "https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg",
    },
  ];
  return (
    <>
      {arrayVivero.length ? (
        <div className="containerGlobalCardHomeApartado">
          <h1 style={{ textAlign: "center" }}>
            Mira nuestros productos en el vivero
          </h1>
          <div className="containerCardHomeApartado">
            {arrayVivero.map((produc, i) => {
              return <ContainerCardHome produc={produc} key={i} />;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default HomeApartadoVivero;
