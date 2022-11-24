import React from "react";
import { useState } from "react";
import { getSearchVivero } from "../../redux/actions";
import { useDispatch } from "react-redux";

const SearchBarVivero = () => {

    const dispatch = useDispatch();
    const [search, setSearch] = useState("")

    function handlechange(e) {
        console.log("VALUE DEL INPUT:", e.target.value);
        setSearch(e.target.value)
    }

    function handlesubmit(e) {
        dispatch(getSearchVivero(search))
        setSearch("")
    }

    return (
        <div className="searchbox">
            <input className="search-input" type="text" placeholder="Busca un producto" value={search} onChange={e => handlechange(e)} />
            <button className="search-button" type="submit" onClick={e => handlesubmit(e)}>
                buscar
            </button>
        </div>
    )
}

export default SearchBarVivero;