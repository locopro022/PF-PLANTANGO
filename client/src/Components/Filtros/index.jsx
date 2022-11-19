import "./Filtros.css";

const Filtros = (props) => {
  
  const cambio = (e) => {
    const selected = {
      type: e.target.name,
      value: e.target.id,
      checked: e.target.checked,
    };

    props.apply(selected);
  };
  const borrar = (e) => {
    e.preventDefault();
    props.apply("clear");
  };
  // useEffect(() => {
  //   let objComparacion = {};
  //   for (let filtro of filters) {
  //     objComparacion[filtro.type] = [
  //       ...(objComparacion[filtro.type] ? objComparacion[filtro.type] : []),
  //       filtro.value,
  //     ];
  //   }
  //   console.log(
  //     "este es el objeto de comparacion para filtros",
  //     objComparacion
  //   );
  //   props.apply(objComparacion);
  // }, [filters]);

  return (
    <div>
      <div className="container">
        <form
          onSubmit={borrar}
          className="container-fluid altoCard"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h3 className=" text-left filtroText">Filtros</h3>
          <button
            type="submit"
            className="btn btn-outline-danger d-inline mb-3"
          >
            Borrar Filtros
          </button>
          {props.filtros?.map &&
            props.filtros.map(({ filter, options }, index) => (
              <div className="container-fluid mb-2" key={index}>
                <h5>{filter}</h5>
                {options.map &&
                  options.map(({ value, checked }, index) => (
                    <div className="form-group form-check ml-4" key={index}>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        onChange={cambio}
                        checked={checked}
                        name={filter}
                        id={value}
                      />
                      <label className="form-check-label" htmlFor={value}>
                        {value}
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
