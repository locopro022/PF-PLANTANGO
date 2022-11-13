import React from "react";
import { useState } from "react";
import { getSearch } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SearchBarHuerta =()=> {

    const dispatch = useDispatch();
    const [search, setSearch]= useState("")

    function handlechange(e){
       console.log(e.target.value);
        setSearch(e.target.value)
    }

    function handlesubmit(e){ 
       
dispatch(getSearch(search))
setSearch(" ")
    }

    return (
        <div className="searchbox">
            <input className="search-input" type="text" placeholder="Nombre de la planta" value={search} onchange={ e => handlechange(e)}/>
            
            <button className="search-button" type="submit" onClick={ e => handlesubmit(e)}>
                buscar
            </button>
        </div>
    )
}

export default SearchBarHuerta;