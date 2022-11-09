import React from 'react'
import Carrousel from '../Carrousel';
import './Home.css'
import HomeApartadoVivero from '../HomeApartadoVivero';
import HomeApartadoHuerta from '../HomeApartadoHuerta'
import AlPrincipio from '../AlPrincipio'

const Home = () => {
    return (
        <>
            <AlPrincipio />
            <div className='containerGlobalHome'>
                <div className='containerCarro'>
                    <Carrousel />
                </div>
                <HomeApartadoVivero />
                <HomeApartadoHuerta />
            </div>
        </>
    )
}

export default Home;
