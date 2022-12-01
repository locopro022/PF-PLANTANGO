import React, { useState } from "react";
import "./FiltrosVivero.css";
import { Slider, Box } from "@mui/material";

const FiltrosVivero = ({ options, apply, activos }) => {
  const [value, setValue] = useState([1, 399]);
  const slider = (event, value) => {
    setValue(value);
  };
  const precio = (event, value) => {
    apply({ ...activos, precio: { min: value[0], max: value[1] } });
  };

  const category = ({ target }) => {
    if (!target.checked) {
      apply({
        ...activos,
        codCategory:
          activos.codCategory?.filter((i) => i != target.value) || [],
      });
    } else {
      apply({
        ...activos,
        codCategory: [target.value, ...(activos.codCategory || [])],
      });
    }
  };
  return (
    <>
      <div className="containerBarra">
        <div className="containerFiltrosVivero">
          <p style={{ fontWeight: "600" }}>Categorias</p>
          {options.codCategoria?.map((option, index) => (
            <div
              className="form-group form-check"
              key={index}
              style={{
                margin: "0",
                padding: "0",
                height: "auto",
                display: "flex",
                alignItems: "center",
              }}
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
                  defaultChecked={activos?.codCategory?.some(
                    (cod) => cod == option.codCategory
                  )}
                />
                {option.descripCategory}
              </label>
            </div>
          ))}
        </div>
        <Box
          sx={{
            width: 180,
            marginRight: "80px",
            textAlign: "center",
            display: "flex",
          }}
        >
          <label
            style={{ fontWeight: "600", position: "absolute", left: "65%" }}
          >
            Precio
          </label>
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
