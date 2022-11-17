import AlPrincipio from "../AlPrincipio";
import FiltrosVivero from '../FiltrosVivero';
import CartasVivero from '../CartasVivero'
import './Vivero.css'

const Vivero = () => {
  const filtros = [
    "Semillas",
    "Macetas",
    "Fertilizantes",
    "Accesorios"
  ]
  return (
    <>
      <AlPrincipio />
      <div className="containerGlobalVivero">
        <FiltrosVivero options={filtros} />
        <div className='containerCartasSearch'>
          <CartasVivero />
        </div>
      </div>
    </>
  );
};

export default Vivero;