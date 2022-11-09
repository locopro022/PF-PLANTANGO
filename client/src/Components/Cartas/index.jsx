import { Link } from "react-router-dom";
import "./index.css";

const Cartas = (props) => {
  return (
    <div className="cartas">
      {/* <!-- producto... --> */}
      {props.items &&
        props.items.map((item) => (
          <Link
            to={`${window.location.pathname}/${item.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="card carta">
              {item.caracteristica && (
                <img
                  src={item.img}
                  alt="Un producto"
                  className="imagen cabeza"
                />
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
                      {item.caracteristica.map((caracteristica) => (
                        <span className="cuerpo-caracteristica-caracteristica">
                          {caracteristica}
                        </span>
                      ))}
                    </p>
                  )}
                </div>
                {item.precio && (
                  <p className="cuerpo-precio">${item.precio / 100}</p>
                )}
              </div>
            </div>
          </Link>
        ))}

      {/* <!-- More products... --> */}
    </div>
  );
};

export default Cartas;
