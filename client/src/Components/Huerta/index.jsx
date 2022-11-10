import Cartas from "../Cartas";
import Filtros from "../Filtros";
import { filtros } from "../../dummyData.js";
import { useDispatch, useSelector } from "react-redux";
import { getHuerta } from "../../redux/actions";

const Vivero = () => {
  const productos = useSelector((state) => state.arrayHuerta);
  const dispatch = useDispatch();
  const applyFilters = (e) => {
    //nos llega un array de objetos
    console.log(e);
    dispatch(getHuerta({ filtros: e }));
    console.log(e);
  };
  return (
    <div className="container-fluid">
      <h3 className="">Bienvenido la huerta!</h3>
      <div className="">
        <div className="row">
          <div className="col-2">
            <Filtros filtros={filtros} apply={applyFilters} />
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
