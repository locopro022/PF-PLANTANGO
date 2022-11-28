import React, { useState } from "react";
import "./FiltrosVivero.css";
import { Slider, Box } from "@mui/material";
import { useEffect } from "react";

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


  const [checkedState, setCheckedState] = useState([false, false, false, false]);

  // const handleChange = (position) => {
  //   const updatedCheckedState = checkedState.map((item, index) =>
  //   index === position ? !item : item
  //   );

  // setCheckedState(updatedCheckedState);
  // window.localStorage.setItem('checkbox', updatedCheckedState);
  // }

  // const [aux, setAux] = useState(false)
  // const handleChange = (position, id) => {
  //   position + 1 === id ? (
      
  //   ) : ()
  // }

  return (
    <>
      <div className="containerBarra">
        <div className="containerFiltrosVivero">
          <p style={{ fontWeight: '600' }}>Categorias</p>
          {options.codCategoria?.map((option, index) => (
            <div
              className="form-group form-check"
              key={index}
              style={{ margin: "0", padding: '0', height: 'auto', display: 'flex', alignItems: 'center' }}
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
                  checked={checkedState[index]}
                  onChange={() => handleChange(index)}
                />
                {option.descripCategory}
              </label>
            </div>
          ))}
        </div>
        <Box sx={{ width: 180, marginRight: "80px", textAlign: 'center', display: 'flex' }}>
          <label style={{ fontWeight: '600', position: 'absolute', left: '65%' }}>Precio</label>
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
