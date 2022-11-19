import AlPrincipio from "../AlPrincipio";
import FiltrosVivero from '../FiltrosVivero';
import CartasVivero from '../CartasVivero';
import SearchBarVivero from './SearchBarVivero'
import './Vivero.css'
import { useDispatch, useSelector } from "react-redux";
import PaginadoVivero from "./PaginadoVivero";
import { getCategoriasVivero, setNumPage, traerProductos, setFiltrosProductos } from "../../redux/actions";
import { useEffect } from "react";
import { useState } from "react";

const Vivero = () => {


  //traer la pagina que setie en el paginado
  const page = useSelector((state) => state.pagVivero);
  const productos = useSelector((state)=> state.arrayVivero)
  const categorias = useSelector(state => state.tiposCategoria );
  const filter = useSelector(state=> state.filtrosVivero);



  //dispatch
  const dispatch = useDispatch();

  // let filter = {codCategory:[1,3]};
  
  
  const enviarPagina=(numPage)=>{
    dispatch(setNumPage(numPage))
  };
  
  const enviarFiltros = (filtro)=> {
    dispatch(setFiltrosProductos(filtro))
    console.log("CALUUUUU:",filtro);
  };
  
  useEffect(()=> {
    dispatch(getCategoriasVivero())
  },[]);
  
  useEffect( ()=>{

    dispatch(traerProductos({page,filter}))
    
  },[page,filter]);
  
  


  return (
    <>
      <AlPrincipio />
      <div><PaginadoVivero enviarPagina={enviarPagina} page={productos.page} max={productos.page_count}/>
      </div>
      <div><SearchBarVivero/></div>
      <div className="containerGlobalVivero">
        <FiltrosVivero options={categorias} enviarFiltros={enviarFiltros}/>
        
        <div className='containerCartasSearch'>
          <CartasVivero />
        </div>
      </div>
    </>
  );
};

export default Vivero;