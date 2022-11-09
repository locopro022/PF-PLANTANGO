import { useEffect, useState } from "react";

const Filtros = (props) => {
  const [renderer, setRenderer] = useState(true);
  const [filters, setFilters] = useState(null);
  const cambio = (e) => {
    const selected = {
      type: e.target.name,
      value: e.target.id,
    };
    e.target.checked
      ? setFilters([...(filters || []), selected])
      : setFilters(filters.filter((item) => item.value !== selected.value));
  };
  const borrar = () => {
    setFilters([]);
    setRenderer(false);
    setTimeout(() => setRenderer(true), 0);
  };
  useEffect(() => {
    if (filters !== null) props.apply(filters);
  });
  return (
    renderer && (
      <div className="card filtro">
        <div className="container">
          <div
            className="container pt-4 mb-2"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h3 className="text-center d-inline">Filtros</h3>
            <button
              type="button"
              class="btn btn-outline-danger d-inline mb-3"
              onClick={borrar}
            >
              Borrar Filtros
            </button>
          </div>
          {props.filtros?.map(({ options, question }, index) => (
            <div className="container-fluid" key={index}>
              <h5>{question}</h5>
              <form
                onChange={cambio}
                onSubmit={cambio}
                className="container-fluid"
              >
                {options &&
                  "checkbox" in options &&
                  options.checkbox.map((option, index) => (
                    <div className="form-group form-check" key={index}>
                      <input
                        type="checkbox"
                        class="form-check-input"
                        name={question}
                        id={option}
                      />
                      <label class="form-check-label" htmlFor={option}>
                        {option}
                      </label>
                    </div>
                  ))}
                {options &&
                  "radio" in options &&
                  options.radio.map((option, index) => (
                    <div key={index} className="form-group form-check">
                      <input
                        type="radio"
                        id={option}
                        name={question}
                        className="form-check-input"
                      />
                      <label className="form-check-label" htmlFor={option}>
                        {option}
                      </label>
                    </div>
                  ))}
              </form>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Filtros;
