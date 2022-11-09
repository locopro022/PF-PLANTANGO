import Cartas from "../Cartas";
import Filtros from "../Filtros";
import { productos } from "../../dummyData.js";
import AlPrincipio from '../AlPrincipio'

const Vivero = () => (
  <>
    <AlPrincipio />
    <div className="container-fluid">
      <h3 className="">Bienvenido al Vivero</h3>
      <div className="">
        <div className="row">
          <div className="col-2">
            <Filtros />
          </div>
          <div className="col">
            <Cartas productos={productos} />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Vivero;
