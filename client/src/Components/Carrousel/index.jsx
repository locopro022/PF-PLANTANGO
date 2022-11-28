import React from "react";
import logito from "../../img/plantaCarro.png";
import logito2 from "../../img/Paisaje.png";
import "./Carrousel.css";
import { useNavigate } from "react-router-dom";

const Carrousel = () => {
  const navigate = useNavigate();
  return (
    <div
      id="carouselExample"
      className="carousel slide p-4"
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
            
       
          </div>
        </div>
        <div className="carousel-item object">
          <img src={logito2} className="d-block w-100 itemImg" alt="img1" />
          <div className="carousel-caption d-none d-md-block">
          
         <div className="buttons">
         <button
              className="btn btn-lg degrade buttonn"
              onClick={() => navigate("/huerta")}
            >
              Huerta
            </button>
            <button
              className="btn  btn-lg degrade buttonn"
              onClick={() => navigate("/vivero")}
            >
              Vivero
            </button>
         </div>

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
