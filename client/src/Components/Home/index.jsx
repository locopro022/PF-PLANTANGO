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
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            
                            <HomeApartadoVivero />
                            
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
