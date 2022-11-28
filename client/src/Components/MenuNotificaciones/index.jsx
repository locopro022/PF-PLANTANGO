import React, { useEffect } from "react";
import { Notifications } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux'
import { traerNotificaciones, actualizarNotificaciones } from "../../redux/actions";
import './MenuNotificaciones.css'

//Menu despegable de las notificaciones

const MenuNotificaciones = () => {
  const dispatch = useDispatch()
  const cantidadStorage = useSelector(state => state.notificaciones)

  const deleteNoti = (noti) => {
    let deleteNotiStorage = cantidadStorage?.filter(ele => `${ele.hora}${ele.minutos}` !== `${noti.hora}${noti.minutos}`)
    localStorage.setItem("Notificaciones", JSON.stringify(!deleteNotiStorage.length ? [] : deleteNotiStorage))
    dispatch(actualizarNotificaciones(deleteNotiStorage.length ? deleteNotiStorage : []))
  }

  const pararProp = (e) => {
    // funcion para para la propagación para el cerrado del carrito al tocar en partes del carrito.
    e.stopPropagation();
  };

  return (
    <div className="btn-group dropleft">
      <button
        className="btn btn-light backgroundBtn"
        type="button"
        aria-expanded="false"
        id="dropdownMenu1"
        data-toggle="dropdown"
      >
        <Badge badgeContent={cantidadStorage?.length} color="error">
          <Notifications color="secondary" />
        </Badge>
      </button>
      {
        !cantidadStorage?.length ?
          <div className="dropdown-menu">
            <p className="dropdown-item">No tiene ninguna notificación</p>
          </div>
          :
          <div className="dropdown-menu" style={{
            height: '400px',
            overflow: 'auto',
          }}>
            {
              cantidadStorage?.map((noti, index) => {
                return (
                  <div key={index} onClick={pararProp} className='containerAlerta'>
                    <button onClick={() => deleteNoti(noti)} className='btnX' >x</button>
                    <p className="dropdown-item itemRiego">{`No olvides el riego de las ${noti.hora}:${noti.minutos}`}</p>
                  </div>
                )
              })
            }
          </div>
      }
    </div >
  );
};

export default MenuNotificaciones;
