import React, { useState } from 'react'
import platango from '../../img/plantangoIcono.png'
import './NavBar.css'
import { ShoppingCart } from '@material-ui/icons'
import { IconButton, Badge } from '@material-ui/core'
import MenuDesplegable from '../MenuDesplegable'
import { NavLink, useNavigate } from 'react-router-dom'
import Carrito from '../Carrito'
import MenuNotificaciones from '../MenuNotificaciones'
import MenuInicioSesion from '../MenuInicioSesion'
import MenuSesionIniciada from '../MenuSesionIniciada'

const NavBar = () => {
    const navigate = useNavigate()
    const [condicionInicioSesion, setCondicionInicioSesion] = useState(false)
    return (
        <div className='containerNavBar'>
            <div className='containerUl deshabilitadoUl'>
                <ul className='containerSpan'>
                    <NavLink className={isActive => isActive.isActive ? 'itemActivo' : 'item uno'} to='/'>
                        <span className='span'>Home</span>
                    </NavLink>
                    <NavLink className={isActive => isActive.isActive ? 'itemActivo' : 'item uno'} to='/vivero'>
                        <span className='span'>Vivero</span>
                    </NavLink>
                    <NavLink className={isActive => isActive.isActive ? 'itemActivo' : 'item uno'} to='/huerta'>
                        <span className='span'>Huerta</span>
                    </NavLink>
                    <NavLink className={isActive => isActive.isActive ? 'itemActivo' : 'item uno'} to='/recordatorio'>
                        <span className='span'>Recordatorio</span>
                    </NavLink>
                    <NavLink className={isActive => isActive.isActive ? 'itemActivo' : 'item uno'} to='/contacto'>
                        <span className='span'>Contacto</span>
                    </NavLink>
                </ul>
            </div>
            <MenuDesplegable />
            <img src={platango} alt='plantango' className='imgPlan' onClick={() => navigate('/')} />
            <div className='containerBtns'>
                <IconButton size='large' color='default'>
                    <Badge badgeContent={1} color='error' data-toggle="modal" data-target="#exampleModalCenter">
                        <Carrito />
                        <ShoppingCart color='secondary' />
                    </Badge>
                </IconButton>
                <MenuNotificaciones />
                {
                    condicionInicioSesion ?
                        <MenuSesionIniciada />
                        :
                        <MenuInicioSesion />
                }
            </div>
        </div>
    )
}

export default NavBar;
