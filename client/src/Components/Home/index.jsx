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
                            <div className='containerPlantango estilos'>
                                <h2>Somos Plantango</h2>
                                <h6>Somos una empresa que se dedica a vender los mejores productos para el mantenimiento de tus plantas, tambien brindamos un apartado en el cual podes investigar los tipos de plantas existentes en Argentina.</h6>
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
