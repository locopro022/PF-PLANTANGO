import Cartas from "../Cartas";
import Filtros from "../Filtros";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../Pagination";
import { constrainHuerta, getHuerta } from "../../redux/actions";
import { useEffect, useState } from "react";
import { plantaACarta } from "../../redux/utils";
import AlPrincipio from '../AlPrincipio'
import Loading from "../Loading";
import SearchBarHuerta from "../SearchBarHuerta/SearchBarHuerta.jsx";

const Vivero = () => {
  const [iniciarPagina, setIniciarPagina] = useState(true)
  const filtros = useSelector((state) => state.tiposHuerta);
  const productos = useSelector((state) => state.arrayHuerta);
  const filtrosAplicados = useSelector((state) => state.constrainHuerta);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHuerta(filtrosAplicados));
  }, [filtrosAplicados]);

  useEffect(() => {
    console.log("En la huerta los filtros son", filtros);
    setIniciarPagina(false)
  }, []);

  const applyFilters = (e) => {
    //nos llega un array de objetos
    console.log(e);
    dispatch(constrainHuerta({ type: "filter", value: e }));
  }

  return (
    <>
      {
        !iniciarPagina
          ?
          <>
            {
              iniciarPagina || productos.results?.length <= 6
                ?
                <AlPrincipio />
                :
                null
            }
            <div className="container-fluid">
              <h3 className="">Bienvenido la huerta!</h3>
              <div className="">
         
                <div className="row">
                  <div className="col-2">
                    <Filtros filtros={filtros} apply={applyFilters} />
                  </div>
                  {/* El que tenga muchisimas ganas, le pone estilos. */}
                  <div className="col">
                  <div className="container-fluid"><SearchBarHuerta/></div>
                    <Pagination
                      max={productos.page_count}
                      curr={productos.page}
                      apply={(e) =>
                        dispatch(constrainHuerta({ type: "page", value: e }))
                      }
                    />
                    <Cartas items={productos.results?.map(plantaACarta)} />
                  </div>
                </div>
              </div>
            </div>
          </>
          :
          <Loading />
      }
    </>
  );
};

export default Vivero;
