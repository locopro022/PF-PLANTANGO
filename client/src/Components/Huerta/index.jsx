import Cartas from "../Cartas";
import Filtros from "../Filtros";
import { filtros } from "../../dummyData.js";
import { useSelector } from "react-redux";

const Vivero = () => {
  const productos = useSelector((state) => state.arrayVivero);
  return (
    <div className="container-fluid">
      <h3 className="">Bienvenido la huerta!</h3>
      <div className="">
        <div className="row">
          <div className="col-2">
            <Filtros
              filtros={filtros}
              apply={(filtros) => console.log(filtros)}
            />
          </div>
          <div className="col">
            <Cartas items={productos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vivero;
