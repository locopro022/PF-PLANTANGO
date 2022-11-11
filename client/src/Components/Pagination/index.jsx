import React from "react";
import s from './pagination.module.css'

const Pagination = (props) => {
  const paginate = props.paginate;

  if(Math.ceil(props.totalCards / props.cartasPorPag) < props.currentPage){
    paginate(1);
  }

  const numeroPagina = [];
  for(let i = 1; i <= Math.ceil(props.totalCards / props.cartasPorPag); i++){
    numeroPagina.push(i)
  }

  const items = props.items

  return(
    <div className={s.container}>
      {/* <h1>Pagina: {props.currentPage}</h1> */}
      {/* <button style={s.btn} onClick={props.prevHandler}>Prev</button> */}
      <div>
        <ul>
          {
            numeroPagina.length > 0 &&
            numeroPagina.map((p, index) => 
              p === props.currentPage ? (
                <li key={index}>
                  <button className={s.btn} onClick={() => paginate(p)}>{p}</button>
                </li>
              ) : (
                <li key={index}>
                  <button className={s.btn} onClick={() => paginate(p)}>{p}</button>
                </li>
              )
            )
          }
        </ul>

      </div>
      <div className={s.prevNext}>
        <button className={s.btn2} onClick={props.prevHandler}>Prev</button>
        <button className={s.btn2} onClick={props.nextHandler}>Next</button>
      </div>
    </div>
  )
}


export default Pagination;