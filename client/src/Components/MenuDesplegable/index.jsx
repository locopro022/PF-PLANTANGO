import React from 'react'
import './MenuDesplegable.css'
import list from '../../img/list.svg'
import { useNavigate } from 'react-router-dom'

const MenuDesplegable = () => {
    const navigate = useNavigate()
    return (
        <div class="dropdown ancho deshabilitado">
            <img src={list} alt="Bootstrap" width="70" height="70" type='button' class="btn dropdown-toggle" id="dropdownMenu1" data-toggle="dropdown" />
            <ul class="dropdown-menu pull-right" role="menu" aria-labelledby="dropdownMenu1">
                <li role="presentation" onClick={() => navigate('/home')}>
                    Home
                </li>
                <li role="presentation" onClick={() => navigate('/vivero')}>
                    Vivero
                </li>
                <li role="presentation" onClick={() => navigate('/huerta')}>
                    Huerta
                </li>
                <li role="presentation" onClick={() => navigate('/recordatorio')}>
                    Recordatorio
                </li>
                <li role="presentation" onClick={() => navigate('contacto')}>
                    Contacto
                </li>
            </ul>
        </div>
    )
}

export default MenuDesplegable;