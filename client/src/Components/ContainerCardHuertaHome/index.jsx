import React from 'react';
import './homeHuerta.css'
import { useNavigate } from 'react-router-dom';

const ContainerCardHuertaHome = (props) => {
    const navigate = useNavigate()
    const { planta, key } = props
    let descripcion = planta.descripPlant?.split(' ').slice(0, 10).join(' ') + '...'
    return (
        <div key={key} className="card-container" style={{ cursor: 'pointer' }} onClick={() => navigate('/huerta')}>
            <img src={planta.imagePlant} className="imagenn" alt="img" />
            <div className="containerr">
                <h6 className="text-homeHuerta" >{planta.namePlant}</h6>
                <p className="text-2-homeHuerta" >Descubre mas sobre esta planta</p>
                <button className='botonn' style={{ cursor: 'pointer' }}>Visitar huerta</button>
            </div>
        </div>
    )
}

export default ContainerCardHuertaHome;
