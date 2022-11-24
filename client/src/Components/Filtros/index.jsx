import "./Filtros.css";

const Filtros = (props) => {
  const cambio = (e) => {
    console.log("CHECK", e.target.checked)
    console.log("NAME", e.target.name)
    const selected = {
      type: e.target.name,
      value: e.target.value,
      checked: true,
    };
    console.log("SELECT", selected)
    props.apply(selected);
  };
  const borrar = (e) => {
    e.preventDefault();
    props.apply("clear");
  };

  return (
    <div>
      <div className="containerFiltrosHuer">
        <form
          onSubmit={borrar}
          className="altoCard"
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <h3 className=" text-left filtroText">Filtros</h3>
          {props.filtros?.map &&
            props.filtros.map(({ filter, options }, index) => (
              <div className="container-fluid mb-2" key={index}>
                <h5>{filter}</h5>
                <select onChange={cambio} name={filter}>
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
            className="btn btn-outline-danger d-inline mb-3"
          >
            Borrar Filtros
          </button>
        </form>
      </div>
    </div>
  );
};

export default Filtros;
