import React from 'react'
import './ContainerCardHome.css'
import { useNavigate } from 'react-router-dom'

const ContainerCardHome = (props) => {
    const navigate = useNavigate()
    const { produc } = props
    return (
        <div className="card text-center estilos" style={{
            width: '18rem',
            fontSize: '10px',
            marginTop: '10px'
        }}>
            <div className="card-body" style={{ cursor: 'pointer' }}>
                <img className='card-img-top' src={produc.IMAGEN} />
                <h5 className="card-title" style={{ marginTop: '10px' }}>{produc.NOMBRE}</h5>
                <p className="card-text" >{produc.TIPO}</p>
                <a className="btn degrade" onClick={() => navigate('/vivero')} >Visitar vivero</a>
            </div>
        </div>
    )
}

export default ContainerCardHome;
