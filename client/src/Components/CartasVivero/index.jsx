import React from "react";
import { useNavigate } from "react-router-dom";
import "./CartasVivero.css";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const CartasVivero = ({ productos }) => {
  const navigate = useNavigate();

  return (
    <div className="containerCardVivero">
      {productos.results?.length ? (
        <>
          {productos.results?.map((produc, index) => {
            return (
              <div
                key={index}
                className="cardContainerVivero"
                onClick={() => navigate(`/vivero/${produc.codProd}`)}
              >
                <img src={produc.imageProd} alt="img" className="imgVivero" />
                <h5 className="price">{`$${parseInt(produc.precio)}`}</h5>
                <p className="nameProduc" style={{ textAlign: "center" }}>
                  {produc.nameProd ===
                    "Hoz Hierbera Wolfpack Mango Vuelto 22 mm. Derecha (Diestros)"
                    ? "Hoz Hierbera Wolfpack Mango Vuelto 22 mm. Derecha"
                    : produc.nameProd}
                </p>
                {/*                 <div class="rating">
                  <FaStar
                    key={index}
                    size={18}
                    color={produc.starts >= 1 ? colors.orange : colors.grey}
                  />
                  <FaStar
                    key={index}
                    size={18}
                    color={produc.starts >= 2 ? colors.orange : colors.grey}
                  />
                  <FaStar
                    key={index}
                    size={18}
                    color={produc.starts >= 3 ? colors.orange : colors.grey}
                  />
                  <FaStar
                    key={index}
                    size={18}
                    color={produc.starts >= 4 ? colors.orange : colors.grey}
                  />
                  <FaStar
                    key={index}
                    size={18}
                    color={produc.starts >= 5 ? colors.orange : colors.grey}
                  />
                </div> */}
                <h5 className="cardcomprar"></h5>
                <h6 className="vermas">Ver mas</h6>
                <h6 className="stock">{`Stock actual / ${produc.stockActual}`}</h6>
              </div>
            );
          })}
        </>
      ) : (
        <div className="containerNoHayNada">No se encontraron productos</div>
      )}
    </div>
  );
};

export default CartasVivero;
