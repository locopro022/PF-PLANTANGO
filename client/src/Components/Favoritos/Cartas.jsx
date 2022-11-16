import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFav, getFav } from "../../redux/actions";
import "./Favoritos.css";

const CartasFavoritos = ({items}) => {
  const user = useSelector((e) => e.user);
  const dispatch = useDispatch();
  function eliminarFav(e, items) {
    e.preventDefault();
    dispatch(deleteFav(user.id, items.codPlant));
    dispatch(getFav(user.id))
  }
  return (
    <div className="contenedorCartasFavoritos">
      <div className="cartas">
        {/* <!-- producto... --> */}
            <div className="card carta">
              {items.imagePlant && (
                <Link
                  key={items.codPlant}
                  to={`/huerta/${items.codPlant}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={items.imagePlant}
                    alt="Un producto"
                    loading="lazy"
                    className="imagen cabeza"
                  />
                </Link>
              )}
              <div className="cuerpo">
                <div>
                  {items.namePlant && (
                    <h3 className="cuerpo-titulo">{items.namePlant}</h3>
                  )}
                  {items.namePlant?.split(",").slice(1) && (
                    <h4 className="cuerpo-subtitulo">{items.namePlant?.split(",").slice(1)}</h4>
                  )}
                  {items.tipo && (
                    <p className="cuerpo-caracteristica">
                      {items.tipo.map((caracteristica, i) => (
                        <span
                          className="cuerpo-caracteristica-caracteristica"
                          key={i}
                        >
                          {caracteristica}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
                {items.precio && (
                  <p className="cuerpo-precio">${items.precio / 100}</p>
                )}
                <button
                  className="favOFF"
                  onClick={(e) => eliminarFav(e, items)}
                />
              </div>
            </div>
        {/* <!-- More products... --> */}
      </div>
    </div>
  );
};

export default CartasFavoritos;
