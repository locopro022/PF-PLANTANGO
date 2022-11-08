import { Card } from "@mui/material";

const options = null;
const question = null;

const Filtros = () => (
  <div className="card filtro">
    HOLA
    {options &&
      "checkbox" in options &&
      options.checkbox.map((option, index) => (
        <div key={index} className="m-2 mx-0 animate-instantiate">
          <input type="checkbox" id={option} className="peer hidden" />
          <label className="" htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    {options &&
      "radio" in options &&
      options.radio.map((option, index) => (
        <div key={index} className="">
          <input
            type="radio"
            id={option}
            name={question}
            className="peer hidden"
          />
          <label className="" htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
    {options &&
      "buttons" in options &&
      options.buttons.map((button, index) => (
        <div key={index} className="">
          <button onClick={() => button.callback(null)} className="">
            {button.name}
          </button>
        </div>
      ))}
    {/* {options && "reset" in options && (
      <div className="">
        <button
          onClick={() => {
            setCollected([]);
            setMessages([{ value: props.filters[0].question }]);
            setCurrent(0);
          }}
          className=""
        >
          {options.reset}
        </button>
      </div>
    )} */}
  </div>
);

export default Filtros;
