import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { activaciones } from '../../redux/actions'
import Profile from '../Profile'
import CreacionPlanta from '../CreacionDePlanta'

import { NavLink } from 'react-router-dom'

const Ajustes = () => {
    const dispatch = useDispatch()
    const nombre = useSelector(state => state.nombre)
    console.log(nombre)
    const activar = (e) => {
        dispatch(activaciones(e.target.name))
    }
    return (
        <div className="card text-center">
            <div className="card-header">
                <div>
                    <ul className="nav nav-tabs card-header-tabs">
                        <li style={{ width: '150px', cursor: 'pointer' }} className="nav-item">
                            <a className={nombre === "perfil" ? 'nav-link active' : 'nav-link'} name="perfil" onClick={activar}>Perfil</a>
                        </li>
                        <li style={{ width: '150px', cursor: 'pointer' }} className='nav-item'>
                            <a className={nombre === "creacion" ? 'nav-link active' : 'nav-link'} name='creacion' onClick={activar}>Crear planta</a>
                        </li>
                    </ul>
                </div>
            </div>
            {
                nombre === "perfil" ?
                    <div style={{ marginTop: '10px' }}>
                        <Profile />
                    </div>
                    :
                    <div style={{ marginTop: '10px' }}>
                        <CreacionPlanta />
                    </div>
            }
            <div>

                <NavLink to="/ajustes/administrar">
                        <button >
                            Administrar usuarios
                        </button>
                </NavLink>
            </div>
        </div>
       
    )
}

export default Ajustes;
