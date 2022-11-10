import React from 'react'
import './Obligatorio.css'

export const Obligatorio = (props) => {
    const { tipo } = props
    let dependeLaProp = (tipo) => {
        switch (tipo) {
            case "1":
                return (
                    <div className='warning'>
                        Se requiere un nombre.
                    </div>
                )
            case "2":
                return (
                    <div className='warning'>
                        Se requiere una ubicación.
                    </div>
                )
            case "3":
                return (
                    <div className='warning'>
                        Se requiere luminosidad.
                    </div>
                )
            case "4":
                return (
                    <div className='warning'>
                        Se requiere un tipo riego.
                    </div>
                )
            case "5":
                return (
                    <div className='warning'>
                        Se requiere un tamaño.
                    </div>
                )
            case "6":
                return (
                    <div className='warning'>
                        Se requiere un tipo.
                    </div>
                )
            case "7":
                return (
                    <div className='warning'>
                        Se quiere un clima.
                    </div>
                )
            default:
                return (
                    <div className='warning'>
                        Se requiere un nombre.
                    </div>
                )
        }
    }
    return dependeLaProp(tipo)
}
