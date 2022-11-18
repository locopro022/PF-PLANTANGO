const PaginadoVivero = ({enviarPagina, page})=> {
const max = 11;

    
const movimientos = {
        prev: ()=>  ( page > 0 ? parseInt(page) - 1 : parseInt(page)),
        next: ()=> (page < max -1 ? parseInt(page) +1 : parseInt(page))
    }

const pasarPagina =(index)=>{
    console.log("index",index);
    enviarPagina(movimientos[index]? movimientos[index]() : index)
}




return (

    <div> 
            {/* Boton anterior */}
            <button onClick={()=> pasarPagina("prev")}>
            {"<"}
            </button>
{
    //Aca creo un array con el num de max y hago un mapeo para crear la cantidad de paginas  BOTONES DE NUMEROS DE PAGINAS
    [...Array(max).keys()].map((index)=> (
      <button onClick={() => pasarPagina(index)} >
        {index+1}
      </button>  
    ))
}

          {/* Boton siguiente */}
        <button onClick={()=> pasarPagina("next")}>
                {">"}
        </button>
    </div>
    )
}


export default PaginadoVivero;