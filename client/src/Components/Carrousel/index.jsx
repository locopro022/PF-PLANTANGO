import React from "react";
import logito from "../../img/plantaCarro.jpg";
import logito2 from "../../img/Paisaje.jpg";
import "./Carrousel.css";
import { useNavigate } from "react-router-dom";

const Carrousel = () => {
  const navigate = useNavigate();
  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-ride="carousel"
      data-interval="5000"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExample"
          data-slide-to="0"
          className="active"
          style={{ cursor: "pointer" }}
        ></li>
        <li
          data-target="#carouselExample"
          data-slide-to="1"
          style={{ cursor: "pointer" }}
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active object">
          <img src={logito} className="d-block w-100 itemImg" alt="img" />
          <div className="carousel-caption d-none d-md-block">
            <h1>Visita nuestro vivero</h1>
            <p>Encuentra los mejores productos para tus plantas.</p>
            <button
              className="btn btn-success btn-lg"
              onClick={() => navigate("/vivero")}
            >
              Visitar vivero
            </button>
          </div>
        </div>
        <div className="carousel-item object">
          <img src={logito2} className="d-block w-100 itemImg" alt="img1" />
          <div className="carousel-caption d-none d-md-block">
            <h1>Ven a investigar a nuestra huerta</h1>
            <p>Podes encontrar todo tipo de información en nuestra huerta.</p>
            <button
              className="btn btn-success btn-lg"
              onClick={() => navigate("/huerta")}
            >
              Visitar huerta
            </button>
          </div>
        </div>
      </div>
      <a
        href="#carouselExample"
        className="carousel-control-prev"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a
        href="#carouselExample"
        className="carousel-control-next"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
  );
};

export default Carrousel;
