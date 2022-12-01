import "./Filtros.css";
import Loading from '../Loading'

const Filtros = (props) => {

  const cambio = (e) => {
    const selected = {
      type: e.target.name,
      value: e.target.value,
      checked: true,
    };
    props.apply(selected);
  };

  const borrar = (e) => {
    e.preventDefault();
    props.apply("clear");
  };

  return (
    <>
      <div>
        <div className="containerFiltrosHuer">
          <form
            onSubmit={borrar}
            className="altoCard"
          >
            {props.filtros?.map &&
              props.filtros.map(({ filter, options }, index) => (
                <div className="container-fluid mb-2" key={index}>
                  <h5 className='tituloHuer'>{filter === "localizacion" ? "ubicacion" : filter}</h5>
                  <select onChange={cambio} name={filter} className='selectHuer'>
                    {options.map &&
                      options.map(({ value, checked }, index) => (
                        <option
                          type="checkbox"
                          className="form-check-input"
                          checked={checked}
                          value={value}
                        >
                          {value}
                        </option>
                      ))}
                  </select>
                </div>
              ))}
            <button
              type="submit"
              className="botonBorrarHuer"
            >
              Borrar filtros
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filtros;
