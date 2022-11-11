import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContainerCardHuertaHome = (props) => {
    const navigate = useNavigate()
    const { planta, key } = props
    console.log("planta", planta)
    let descripcion = planta.descripPlant?.split(' ').slice(0, 10).join(' ') + '...'
    console.log(descripcion)
    return (
        <div key={key} className="card text-bg-dark estilos" style={{ width: '20rem', marginTop: '15px', display: 'block', height: '12rem', overflow: 'hidden', cursor: 'pointer' }}>
            <img src={planta.imagePlant} className="card-img" alt="img" style={{ height: 'auto' }} />
            <div className="card-img-overlay">
                <h6 className="card-title" style={{ color: 'white', textShadow: '2px 2px 2px black' }}>{planta.namePlant}</h6>
                <p className="card-text" style={{ color: 'white', textShadow: '2px 2px 2px black', fontSize: '14px' }}>{descripcion}</p>
                <button className='btn btn-success' onClick={() => navigate('/huerta')}>Visitar huerta</button>
            </div>
        </div>
    )
}

export default ContainerCardHuertaHome;
