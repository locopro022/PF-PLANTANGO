import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContainerCardHuertaHome = (props) => {
    const navigate = useNavigate()
    const { planta } = props
    return (
        <div className="card text-bg-dark estilos" style={{ width: '20rem', marginTop: '15px' }}>
            <img src={planta.IMAGEN} className="card-img" alt="img" style={{ height: 'auto' }} />
            <div className="card-img-overlay">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button className='btn btn-success' onClick={() => navigate('/huerta')}>Visitar huerta</button>
            </div>
        </div>
    )
}

export default ContainerCardHuertaHome;
