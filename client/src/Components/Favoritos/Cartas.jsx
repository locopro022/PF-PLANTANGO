import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFav } from "../../redux/actions";
import "./Favoritos.css";

const CartasFavoritos = (props) => {
  const user = useSelector((e) => e.user);
  const dispatch = useDispatch();
  function eliminarFav(e, item) {
    e.preventDefault();
    dispatch(deleteFav(user.id, item.id));
  }
  return (
    <div className="contenedorCartasFavoritos">
      <div className="cartas">
        {/* <!-- producto... --> */}
        {props.items?.map &&
          props.items.map((item, i) => (
            <div className="card carta">
              {item.img && (
                <Link
                  key={i}
                  to={`/huerta/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src={item.img}
                    alt="Un producto"
                    loading="lazy"
                    className="imagen cabeza"
                  />
                </Link>
              )}
              <div className="cuerpo">
                <div>
                  {item.nombre && (
                    <h3 className="cuerpo-titulo">{item.nombre}</h3>
                  )}
                  {item.subnombre && (
                    <h4 className="cuerpo-subtitulo">{item.subnombre}</h4>
                  )}
                  {item.caracteristica && (
                    <p className="cuerpo-caracteristica">
                      {item.caracteristica.map((caracteristica, i) => (
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
                {item.precio && (
                  <p className="cuerpo-precio">${item.precio / 100}</p>
                )}
                <button
                  className="favOFF"
                  onClick={(e) => eliminarFav(e, item)}
                />
              </div>
            </div>
          ))}

        {/* <!-- More products... --> */}
      </div>
    </div>
  );
};

export default CartasFavoritos;
