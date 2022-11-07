import React from 'react';
import ContainerCardHuertaHome from '../ContainerCardHuertaHome';
import { useSelector } from 'react-redux'
import './HomeApartadoHuerta.css'

const HomeApartadoHuerta = () => {
    /*     const arrayHuerta = useSelector(state => state.arrayHuerta) */
    const arrayHuerta = [
        {
            NOMBRE: 'Special title treatment',
            TIPO: 'With supporting text below as a natural lead-in to additional content.',
            IMAGEN: 'https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg'
        },
        {
            NOMBRE: 'Special title treatment',
            TIPO: 'With supporting text below as a natural lead-in to additional content.',
            IMAGEN: 'https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg'
        },
        {
            NOMBRE: 'Special title treatment',
            TIPO: 'With supporting text below as a natural lead-in to additional content.',
            IMAGEN: 'https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg'
        },
        {
            NOMBRE: 'Special title treatment',
            TIPO: 'With supporting text below as a natural lead-in to additional content.',
            IMAGEN: 'https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg'
        },
        {
            NOMBRE: 'Special title treatment',
            TIPO: 'With supporting text below as a natural lead-in to additional content.',
            IMAGEN: 'https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg'
        },
        {
            NOMBRE: 'Special title treatment',
            TIPO: 'With supporting text below as a natural lead-in to additional content.',
            IMAGEN: 'https://previews.123rf.com/images/thvideo/thvideo2209/thvideo220903005/191917616-3d-render-of-a-gate-wall-to-a-beautiful-enchanted-garden.jpg'
        }
    ]
    return (
        <>
            {arrayHuerta.length ?
                <div style={{ marginTop: '20px' }}>
                    <h1 style={{ textAlign: 'center' }}>Investiga plantas en nuestra huerta</h1>
                    <div className='containerHuertaHome'>
                        {
                            arrayHuerta.map(planta => {
                                return (
                                    < ContainerCardHuertaHome planta={planta} />
                                )
                            })
                        }
                    </div>
                </div>
                :
                null
            }
        </>
    )
}

export default HomeApartadoHuerta;
