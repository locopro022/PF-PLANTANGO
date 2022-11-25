import React from 'react'
import './Obligatorio.css'

export const Obligatorio = (props) => {
    const { tipo } = props
    let dependeLaProp = (tipo) => {
        switch (tipo) {
            case "1":
                return (
                    <div className='altoCase'>
                        <div className='warning'>
                            Se requiere un nombre.
                        </div>
                    </div>
                )
            case "2":
                return (
                    <div className='altoCase'>
                        <div className='warning'>
                            Se requiere una ubicación.
                        </div>
                    </div>
                )
            case "3":
                return (
                    <div className='altoCase'>
                        <div className='warning'>
                            Se requiere luminosidad.
                        </div>
                    </div>
                )
            case "4":
                return (
                    <div className='altoCase'>
                        <div className='warning'>
                            Se requiere un tipo riego.
                        </div>
                    </div>
                )
            case "5":
                return (
                    <div className='altoCase'>
                        <div className='warning'>
                            Se requiere un tamaño.
                        </div>
                    </div>
                )
            case "6":
                return (
                    <div className='altoCase'>
                        <div className='warning'>
                            Se requiere un tipo.
                        </div>
                    </div>
                )
            case "7":
                return (
                    <div className='altoCase'>
                        <div className='warning'>
                            Se quiere un clima.
                        </div>
                    </div>
                )
            case "8":
                return (
                    <div className='altoCase2'>
                        <div className='warning'>
                            Se quiere un clima.
                        </div>
                    </div>
                )
            default:
                return (
                    <div className='altoCase'>
                        <div className='warning2'>
                            Se requiere un nombre.
                        </div>
                    </div>
                )
        }
    }
    return dependeLaProp(tipo)
}
