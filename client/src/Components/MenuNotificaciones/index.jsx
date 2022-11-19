import React, { useEffect } from "react";
import { Notifications } from "@mui/icons-material";
import { Badge } from "@mui/material";

//Menu despegable de las notificaciones

const MenuNotificaciones = () => {
  const cantidadStorage = JSON.parse(localStorage.getItem("Notificaciones"))
  const deleteNoti = (noti) => {
    let deleteNotiStorage = cantidadStorage.filter(ele => `${ele.hora}${ele.minutos}` !== `${noti.hora}${noti.minutos}`)
    localStorage.setItem("Notificaciones", JSON.stringify(!deleteNotiStorage.length ? [] : deleteNotiStorage))
  }

  useEffect(() => {

  }, [cantidadStorage])

  return (
    <div className="btn-group dropleft">
      <button
        className="btn btn-light backgroundBtn"
        type="button"
        aria-expanded="false"
        id="dropdownMenu1"
        data-toggle="dropdown"
      >
        <Badge badgeContent={cantidadStorage.length} color="error">
          <Notifications color="secondary" />
        </Badge>
      </button>
      {
        !cantidadStorage.length ?
          <div className="dropdown-menu">
            <p className="dropdown-item">No tiene ninguna notificación</p>
          </div>
          :
          <div className="dropdown-menu" style={{ height: '400px' }}>
            {
              cantidadStorage?.map((noti, index) => {
                return (
                  <div key={index}>
                    <button onClick={() => deleteNoti(noti)} >x</button>
                    <h5 className="dropdown-item">{`No olvides el riego de las ${noti.hora}:${noti.minutos}`}</h5>
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
