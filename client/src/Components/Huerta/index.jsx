import Cartas from "../Cartas";
import Filtros from "../Filtros";
import { filtros } from "../../dummyData.js";
import { useSelector } from "react-redux";
import Pagination from "../Pagination";
import { useState } from "react";

const Vivero = () => {
  const productos = useSelector((state) => state.arrayHuerta);
//////PROVISORIO_____________________________________
  const [currentPage, setCurrentPage] = useState(1);

  const [cartasPorPag] = useState(12);

  const indexLastCard = currentPage * cartasPorPag;
  const indexFirstCard = indexLastCard - cartasPorPag;

  // const [cartas, setCartas] = useState(productos.slice(indexFirstCard, indexLastCard))
  let cartas = productos.slice(indexFirstCard, indexLastCard);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    cartas = ([...productos].splice(indexFirstCard, cartasPorPag));
  };

  const totalCards = productos.length;

  const nextHandler = () => {
    const nextPage = currentPage + 1;
    // if(indexFirstCard === totalCards) return;
    paginate(nextPage)
  }

  const prevHandler = () => {
    const prevPage = currentPage - 1;
    if(prevPage < 1) return;
    paginate(prevPage)
  }
//////______________________________________________
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


{/* PAGINATION PROVISORIO */}
          <div className="col">
            <Pagination 
              paginate={paginate}
              currentPage={currentPage}
              cartasPorPag={cartasPorPag}
              totalCards={totalCards}
              prevHandler={prevHandler}
              nextHandler={nextHandler}
            />
            <Cartas items={cartas} />
          </div>


{/* 
          ORIGINAL
          <div className="col">
            <Cartas items={productos} />
          </div> */}

        </div>
      </div>
    </div>
  );
};

export default Vivero;
