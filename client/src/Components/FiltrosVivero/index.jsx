import React, { useState } from 'react'
import './FiltrosVivero.css'
import { Slider, Box } from '@mui/material'

const FiltrosVivero = (props) => {
    const { options } = props;
    const [value, setValue] = useState([0, 18000]);

    const handleChange = (event, newValue) => {
        console.log("ACA NEW VALUE",newValue)
        setValue(newValue);
    };

    console.log("VALOR: ",value);
    return (
        <>
            <div className='containerBarra'>
                <span className='spanFiltros'>Filtros</span>
                <div className='containerFiltrosVivero'>
                    {
                        options.map((option, index) => {
                            return (
                                <div className="form-group form-check optionSelec"
                                    key={index}
                                    style={{ marginLeft: '10px' }}
                                    name={option}
                                >
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name={option}
                                        id={option}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    <label
                                        className="form-check-label"
                                        htmlFor={option}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {option}
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
                        min={8000}
                        max={18000}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        color='secondary'
                    />
                </Box>
            </div>
        </>
    )
}

export default FiltrosVivero;