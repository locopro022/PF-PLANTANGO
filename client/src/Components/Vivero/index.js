import Cartas from "../Cartas";
import { productos } from "../../dummyData.js";

const Vivero = () => (
  <div>
    <div>Bienvenido al Vivero</div>
    <div></div>
    <div>
      <Cartas productos={productos} />
    </div>
  </div>
);

export default Vivero;
