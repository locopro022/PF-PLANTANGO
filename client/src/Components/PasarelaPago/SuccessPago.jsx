import React from "react";
import { Link } from "react-router-dom";
import success from './img/success.gif'
import s from './pagos.module.css'

const SuccessPago = () => {
  return(
    <div className={s.container}>
      <h3>Pago exitoso</h3>
      <div>
        <img className={s.gif} src={success} alt="aa" />
      </div>
      <Link to={'/vivero'}><button className="btn btn-success">Volver</button></Link>
    </div>
  )
};

export default SuccessPago;