import AlPrincipio from "../AlPrincipio";
import FiltrosVivero from "../FiltrosVivero";
import CartasVivero from "../CartasVivero";
import "./Vivero.css";
import { useDispatch, useSelector } from "react-redux";
import PaginadoVivero from "./PaginadoVivero";
import {
  getCategoriasVivero,
  setNumPage,
  traerProductos,
  setFiltrosProductos,
} from "../../redux/actions";
import { useEffect } from "react";
import { useState } from "react";
import SearchBarVivero from "./SearchBaVivero";

const Vivero = () => {
  //traer la pagina que setie en el paginado
  const page = useSelector((state) => state.pagVivero);
  const productos = useSelector((state) => state.arrayVivero);
  const categorias = useSelector((state) => state.tiposCategoria);
  const filter = useSelector((state) => state.filtrosVivero);

  //dispatch
  const dispatch = useDispatch();

  // let filter = {codCategory:[1,3]};

  const enviarPagina = (numPage) => {
    dispatch(setNumPage(numPage));
  };

  const apply = (filtro) => {
    dispatch(setFiltrosProductos(filtro));
    console.log("Funcion apply es esta:", filtro);
  };

  useEffect(() => {
    dispatch(getCategoriasVivero());
  }, []);

  useEffect(() => {
    dispatch(traerProductos({ page, filter }));
  }, [page, filter]);

  return (
    <>
      <AlPrincipio />
      <div>
        <div className="containerSearch">
          <SearchBarVivero />
        </div>
        <div className="containerGlobalVivero">
          <FiltrosVivero options={categorias} apply={apply} />
          <div className="containerCartasSearch">
            <CartasVivero />
          </div>
        </div>
        <div className="container-fluid">
          <PaginadoVivero
            enviarPagina={enviarPagina}
            page={productos.page}
            max={productos.page_count}
          />
        </div>
      </div>
    </>
  );
};

export default Vivero;
