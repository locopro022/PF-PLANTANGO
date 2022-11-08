import "./index.css";

const Cartas = (props) => (
  <div className="cartas">
    {/* <!-- producto... --> */}
    {props.productos &&
      props.productos.map((producto) => (
        <div className="carta">
          <img src={producto.img} alt="Un producto" className="imagen cabeza" />
          <div className="cuerpo">
            <div>
              <h3 className="cuerpo-titulo">
                <a href="#">
                  <span
                    aria-hidden="true"
                    className="cuerpo-descripcion"
                  ></span>
                  {producto.nombre}
                </a>
              </h3>
              <p className="cuerpo-caracteristica">
                {producto.caracteristica.map((caracteristica) => (
                  <span className="cuerpo-caracteristica-caracteristica">
                    {caracteristica}
                  </span>
                ))}
              </p>
            </div>
            <p className="cuerpo-precio">${producto.precio / 100}</p>
          </div>
        </div>
      ))}

    {/* <!-- More products... --> */}
  </div>
);

export default Cartas;
