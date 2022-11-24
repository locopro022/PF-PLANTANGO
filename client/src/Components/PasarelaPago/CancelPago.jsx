import React from "react";
import { Link } from "react-router-dom";
import cancel from './img/cancel.gif'
import s from './pagos.module.css'

const CancelPago = () => {
  return(
    <div className={s.container}>
      <h3>Error de pago</h3>
      <div>
        <img className={s.gif} src={cancel} alt="aa" />
      </div>
      <Link to={'/vivero'}><button className="btn btn-danger">Volver</button></Link>
    </div>
  )
};

export default CancelPago;