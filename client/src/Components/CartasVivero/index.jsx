import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { traerProductos } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import "./CartasVivero.css";
import { FaStar } from 'react-icons/fa';

const colors = {
  orange : "#FFBA5A",
  grey : "#a9a9a9"
}

const CartasVivero = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const arrayVivero = useSelector((state) => state.arrayVivero);

  useEffect(() => {
    dispatch(traerProductos());
    console.log("VIVERO PRODUCTOS:", arrayVivero);
  }, []);

  return (
    <div className="containerCardVivero">
      {arrayVivero.results?.map((produc, index) => {
        return (
          <div
            key={index}
            className="cardContainerVivero estilos"
            onClick={() => navigate(`/vivero/${produc.codProd}`)}
          >
            <img src={produc.imageProd} alt="img" className="imgVivero" />
            <p className="nameProduc" style={{ textAlign: "center" }}>
              {produc.nameProd}
            </p>

            <div class="rating">
            <FaStar key={index} size={18} color={ produc.starts >= 1 ? colors.orange : colors.grey}/>
            <FaStar key={index} size={18} color={ produc.starts >= 2 ? colors.orange : colors.grey}/>
            <FaStar key={index} size={18} color={ produc.starts >= 3 ? colors.orange : colors.grey}/>
            <FaStar key={index} size={18} color={ produc.starts >= 4 ? colors.orange : colors.grey}/>
            <FaStar key={index} size={18} color={ produc.starts >= 5 ? colors.orange : colors.grey}/>
            </div>


            <h5 className="price">{`$${parseInt(produc.precio)}`}</h5>
            <h5 className="cardcomprar">Ver mas</h5>
          </div>
        );
      })}
    </div>
  );
};

export default CartasVivero;

