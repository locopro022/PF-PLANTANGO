import React from 'react'
import { plantaCreada } from '../../redux/actions';
import ContainerFormPlanta from '../ContainerFormPlanta'
import './CreacionDePlanta.css'

const CreacionDePlanta = () => {
    return (
        <div className='containerCreacionPlanta'>
            <div class="card estilos" style={{ width: "40rem" }}>
                <h2 class="card-img-top" style={{ background: '#28A745', color: '#fff' }} >Crea tu planta</h2>
                <div class="card-body">
                    <ContainerFormPlanta />
                </div>
            </div>
        </div>
    )
}

export default CreacionDePlanta;
