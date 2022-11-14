import { useEffect, useState } from "react";
import './Filtros.css'

const Filtros = (props) => {
  const [filters, setFilters] = useState([]);

  const cambio = (e) => {
    const selected = {
      type: e.target.name,
      value: e.target.id,
    };
    e.target.checked
      ? setFilters([...(filters || []), selected])
      : setFilters(filters.filter((item) => item.value !== selected.value));
  };
  const borrar = (e) => {
    e.preventDefault();
    e.target.reset();
    setFilters([]);
  };

  useEffect(() => {
    let objComparacion = {};
    for (let filtro of filters) {
      objComparacion[filtro.type] = [
        ...(objComparacion[filtro.type] ? objComparacion[filtro.type] : []),
        filtro.value,
      ];
    }
    console.log(
      "este es el objeto de comparacion para filtros",
      objComparacion
    );
    props.apply(objComparacion);
  }, [filters]);
  return (
    <div>
      <div className="container">
        <div
          className="mb-2"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <h3 className="text-center d-inline filtroText">Filtros</h3>
        </div>
        <form onChange={cambio} onSubmit={borrar} className="container-fluid altoCard">
          <button
            type="submit"
            className="btn btn-outline-danger d-inline mb-3"
          >
            Borrar Filtros
          </button>
          {Object.entries(props.filtros).map &&
            Object.entries(props.filtros).map(([question, options], index) => (
              <div className="container-fluid" key={index}>
                <h5>{question}</h5>
                {options.map &&
                  options.map((option, index) => (
                    <div className="form-group form-check" key={index}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        name={question}
                        id={option}
                      />
                      <label className="form-check-label" htmlFor={option}>
                        {option}
                      </label>
                    </div>
                  ))}
              </div>
            ))}
        </form>
      </div>
    </div>
  );
};

export default Filtros;
