import Cartas from "../Cartas";
import Filtros from "../Filtros";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination";
import { getHuerta, setFiltrosHuerta, setPagHuerta } from "../../redux/actions";
import { useEffect, useState } from "react";
import { plantaACarta } from "../../redux/utils";
import AlPrincipio from "../AlPrincipio";
import Loading from "../Loading";
import SearchBarHuerta from "../SearchBarHuerta/SearchBarHuerta.jsx";
import "./index.css";

const Vivero = () => {
  const [iniciarPagina, setIniciarPagina] = useState(true);
  const filtros = useSelector((state) => state.filtrosHuerta);
  const page = useSelector((state) => state.pagHuerta);
  const productos = useSelector((state) => state.arrayHuerta);
  const dispatch = useDispatch();


  
  useEffect(() => {
    let filter = {};

    
    
    for (let item of filtros) {
      let slice = item.options.some(({ checked }) => checked)
        ? {
            [item.filter]: item.options
              .filter(({ checked }) => checked)
              .map(({ value }) => value),
          }
        : {};
      filter = { ...filter, ...slice };
    }


    
    dispatch(getHuerta({ page, filter }));
  }, [filtros, page, dispatch]);

  useEffect(() => {
    setIniciarPagina(false);
  }, []);

  const applyFilters = (e) => {
    dispatch(setFiltrosHuerta(e));
  };
  const applyPage = (e) => {
    dispatch(setPagHuerta(e));
  };
console.log("current: ", productos.page);
  return (
    <>
      {!iniciarPagina ? (
        <>
          {iniciarPagina || productos.results?.length <= 6 ? (
            <AlPrincipio />
          ) : null}
          <div className="container-fluid">
            <div className="alto-row">
              <div className="row alto-row">
                <div className="col-2">
                  <Filtros filtros={filtros} apply={applyFilters} />
                </div>
                {/* El que tenga muchisimas ganas, le pone estilos. */}
                <div className="col">
                  <div className="container-fluid">
                    <SearchBarHuerta />
                  </div>
                  <Pagination
                    max={productos.page_count}
                    curr={productos.page}
                    apply={applyPage}
                  />
                  <Cartas items={productos.results?.map(plantaACarta)} />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Vivero;
