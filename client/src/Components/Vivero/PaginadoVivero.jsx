
import "./paginado.css"
const PaginadoVivero = ({enviarPagina, page, max})=> {


    
const movimientos = {
        prev: ()=>  ( page > 0 ? parseInt(page) - 1 : parseInt(page)),
        next: ()=> (page < max -1 ? parseInt(page) +1 : parseInt(page))
    }

const pasarPagina =(index)=>{
    console.log("index",index);
    enviarPagina(movimientos[index]? movimientos[index]() : index)
}


// obj : {
//     search: null,
//     filter: {codCategory:[ 1, 2], price: {min: Num, max: num}},
//     page: num
//     }

// obj : {
//     search: null,
//     filter: {codCategory:[ 1, 2], price: null},
//     page: 2
//     }
return (

    <div className="pag"> 
            {/* Boton anterior */}
            <button onClick={()=> pasarPagina("prev")} className="items">
            {"<"}
            </button>
{
    //Aca creo un array con el num de max y hago un mapeo para crear la cantidad de paginas  BOTONES DE NUMEROS DE PAGINAS
    [...Array(max).keys()].map((index)=> (
      <button onClick={() => pasarPagina(index)} className="items">
        {index+1}
      </button>  
    ))
}

          {/* Boton siguiente */}
        <button onClick={()=> pasarPagina("next")} className="items">
                {">"}
        </button>
    </div>
    )
}


export default PaginadoVivero;