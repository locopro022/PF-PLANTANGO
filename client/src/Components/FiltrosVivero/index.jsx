import React, { useState } from "react";
import "./FiltrosVivero.css";
import { Slider, Box } from "@mui/material";

const FiltrosVivero = ({ options, apply }) => {
  const [filter, setFilter] = useState({
    codCategory: [],
    precio: { min: options.price?.min, max: options.price?.max },
  });
  const [value, setValue] = useState([0, 399]);
  const slider = (event, value) => {
    setValue(value);
  };
  const precio = (event, value) => {
    setFilter({ ...filter, precio: { min: value[0], max: value[1] } });
    apply({ ...filter, precio: { min: value[0], max: value[1] } });
  };

  const category = ({ target }) => {
    if (!target.checked) {
      setFilter({
        ...filter,
        codCategory: filter.codCategory.filter((i) => i !== target.value),
      });
      apply({
        ...filter,
        codCategory: filter.codCategory.filter((i) => i !== target.value),
      });
    } else {
      setFilter({
        ...filter,
        codCategory: [target.value, ...filter.codCategory],
      });
      apply({
        ...filter,
        codCategory: [target.value, ...filter.codCategory],
      });
    }
  };

  return (
    <>
      <div className="containerBarra">
        <span className="spanFiltros">Filtros</span>
        <div className="containerFiltrosVivero">
          <p>Categoria</p>
          {options.codCategoria?.map((option, index) => (
            <div
              className="form-group form-check optionSelec"
              key={index}
              style={{ marginLeft: "10px" }}
              name={option.descripCategory}
            >
              <label
                className="form-check-label"
                name={option.descripCategory}
                style={{ cursor: "pointer" }}
              >
                <input
                  selected={option.descripCategory}
                  type="checkbox"
                  className="form-check-input"
                  name={option.descripCategory}
                  value={option.codCategory}
                  onClick={category}
                  id={option.codCategory}
                  style={{ cursor: "pointer" }}
                />
                {option.descripCategory}
              </label>
            </div>
          ))}
        </div>
        <Box sx={{ width: 180, marginLeft: "18px" }}>
          <label>Precio</label>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            min={0}
            max={400}
            onChange={slider}
            onChangeCommitted={precio}
            valueLabelDisplay="auto"
            color="secondary"
          />
        </Box>
      </div>
    </>
  );
};

export default FiltrosVivero;
