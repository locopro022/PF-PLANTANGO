import React, { useState } from 'react'
import './FiltrosVivero.css'
import { Slider, Box } from '@mui/material'
import { useEffect } from 'react';

const FiltrosVivero = ({options, enviarFiltros}) => {
    
const [value, setValue] = useState( [0,18000]);
const [cod, setCod] =useState([])
const [filter, setFilter] = useState({codCategory:[], precio: {min: 0 , max: 18000 }})


    const handleChange = (event, newValue) => {
        console.log("ACA NEW VALUE",newValue)
        setValue(newValue);
        setFilter({...filter, precio: {min:value[0] , max: value[1]}})

    };
console.log("VALUE:",value);

    const seleccionFiltro = (e)=>{
        if(cod.includes(e.target.value)){
             setCod(cod.filter(ele=> ele !== e.target.value))
        }else{
         setCod([...cod, e.target.value])

        console.log("valor de seleccion filtro", e.target.value);}
        const codd = cod
       setFilter({...filter, codCategory: codd})
    }

       useEffect(()=>{
        console.log("ENTRE AL USEEFECT Y ENVIO:", filter);
        return ()=>enviarFiltros(filter)
    
       },[filter])

//    if(filter.codCategory.length!== 0 || filter.precio.min>0 || filter.precio.max<18000){
//         enviarFiltros(filter)
//     }
console.log("COD:",cod);
console.log("filtro:", filter);

console.log("isEmpty? :",filter.precio.min>0)
    return (
        <>
            <div className='containerBarra'>
                <span className='spanFiltros'>Filtros</span>
                <div className='containerFiltrosVivero'>
                    {
                        options.codCategoria?.map((option, index) => {
                            return (
                                <div className="form-group form-check optionSelec"
                                    key={index}
                                    style={{ marginLeft: '10px' }}
                                    name={option.descripCategory}
                                >
                                    <label
                                        className="form-check-label"
                                        htmlFor={option.descripCategory}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        
                                    
                                    <input
                                    selected={option.descripCategory}
                                        type="checkbox"
                                        className="form-check-input"
                                        name={option.descripCategory}
                                        value={option.codCategory}
                                        onClick={seleccionFiltro}
                                        id={option.codCategory}
                                        style={{ cursor: 'pointer' }}
                                    />{option.descripCategory}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
                <Box sx={{ width: 180, marginLeft: '18px' }}>
                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value}
                        min={0}
                        max={18000}
                        onChangeCommitted={handleChange}
                        valueLabelDisplay="auto"
                        color='secondary'
                    />
                </Box>
            </div>
        </>
    )
}

export default FiltrosVivero;