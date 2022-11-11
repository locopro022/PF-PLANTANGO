import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContainerCardHuertaHome = (props) => {
    const navigate = useNavigate()
    const { planta } = props
    let descripcion = planta.descripcion.split(' ');
    descripcion = descripcion.slice(0, 15).join(' ') + '...'
    return (
        <div className="card text-bg-dark estilos" style={{ width: '20rem', marginTop: '15px', display: 'block', height: '12rem', overflow: 'hidden' }}>
            <img src={planta.img} className="card-img" alt="img" style={{ height: 'auto' }} />
            <div className="card-img-overlay">
                <h5 className="card-title" style={{color: 'white', textShadow: '2px 2px 2px black'}}>{planta.nombre}</h5>
                <p className="card-text" style={{color: 'white', textShadow: '2px 2px 2px black'}}>{descripcion}</p>
                <button className='btn btn-success' onClick={() => navigate('/huerta')}>Visitar huerta</button>
            </div>
        </div>
    )
}

export default ContainerCardHuertaHome;
