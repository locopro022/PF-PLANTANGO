import AlPrincipio from "../AlPrincipio";
import FiltrosVivero from '../FiltrosVivero';
import CartasVivero from '../CartasVivero'
import './Vivero.css'
import { useDispatch, useSelector } from "react-redux";
import PaginadoVivero from "./PaginadoVivero";
import { setNumPage } from "../../redux/actions";

const Vivero = () => {
  const filtros = [
    "Semillas",
    "Macetas",
    "Fertilizantes",
    "Accesorios"
  ]

  //traer la pagina que setie en el paginado
  const page = useSelector((state) => state.pagVivero);
  const productos = useSelector((state)=> state.arrayVivero)
console.log("PRODUCTOS: ",productos);
console.log("PRODUCTOS.page: ",productos.page)

  //dispatch
  const dispatch = useDispatch();

  const enviarPagina=(numPage)=>{
dispatch(setNumPage(numPage))
  };

  return (
    <>
      <AlPrincipio />
      <div><PaginadoVivero enviarPagina={enviarPagina} page={productos.page}/></div>
      <div className="containerGlobalVivero">
        <FiltrosVivero options={filtros} />
        <div className='containerCartasSearch'>
          <CartasVivero />
        </div>
      </div>
    </>
  );
};

export default Vivero;