import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { traerProductos } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import "./CartasVivero.css";

const CartasVivero = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const arrayVivero = useSelector((state) => state.arrayVivero);
  console.log("ARRRAY", arrayVivero)
  useEffect(() => {
    dispatch(traerProductos());
  }, []);

  return (
    <div className="containerCardVivero">
      {
        arrayVivero.results?.length
          ?
          <>
            {arrayVivero.results?.map((produc, index) => {
              return (
                <div
                  key={index}
                  className="cardContainerVivero"
                  onClick={() => navigate(`/vivero/${produc.codProd}`)}
                >
                  <img src={produc.imageProd} alt="img" className="imgVivero" />
                  <h5 className="price">{`$${parseInt(produc.precio)}`}</h5>
                  <p className="nameProduc" style={{ textAlign: "center" }}>
                    {produc.nameProd}
                  </p>
                  <h5 className="cardcomprar"></h5>
                  <h6 className="vermas">Ver mas</h6>
                  <h6 className="stock">{`Stock actual / ${produc.stockActual}`}</h6>
                </div>
              );
            })}
          </>
          :
          <div className="containerNoHayNada">No se encontraron productos</div>
      }
    </div>
  );
};

export default CartasVivero;
