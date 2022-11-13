import React, { useEffect } from 'react'
import Carrousel from '../Carrousel';
import './Home.css'
import HomeApartadoVivero from '../HomeApartadoVivero';
import HomeApartadoHuerta from '../HomeApartadoHuerta'
import AlPrincipio from '../AlPrincipio'
import { useSelector } from 'react-redux';
import Loading from '../Loading'

const Home = () => {
    const huerta = useSelector(state => state.arrayHuerta)

    return (
        <>
            {
                huerta.results?.length
                    ?
                    <>
                        <AlPrincipio />
                        <div className='containerGlobalHome'>
                            <div className='containerCarro'>
                                <Carrousel />
                            </div>
                            <HomeApartadoVivero />
                            <div>
                                <h1>Somos plantango</h1>
                                <h4>Esto es plantango</h4>
                            </div>
                            <HomeApartadoHuerta />
                        </div>
                    </>
                    :
                    <Loading />
            }
        </>
    )
}

export default Home;
