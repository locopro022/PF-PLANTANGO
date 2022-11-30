import React, { useEffect, useState } from "react";
import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";
import { carritoStorage, getUser } from "../../redux/actions";
import Notiflix from "notiflix";
import axios from "axios";

import { useAuth0 } from "@auth0/auth0-react";

const Carrito = () => {
  const { user } = useAuth0()
  const [aux, setAux] = useState("");
  const dispatch = useDispatch();
  const arrayCarrito = useSelector((state) => state.carrito); // array para mapear y mostrar en el carrito
  const userCheck = useSelector((state) => state.user); // DEVUELVE TRUE(LOGGEADO) O array vacío.
  const borrarCarrito = () => {
    Notiflix.Confirm.show(
      "Vaciar carrito",
      "Quieres vaciar el carrito?",
      "Si",
      "No",
      () => {
        localStorage.removeItem("carrito");
        dispatch(carritoStorage([]));
        Notiflix.Notify.success("Carrito vaciado con exito", {
          zindex: 999999999999999,
          position: "left-top",
          timeout: 1500,
        });
      },
      () => { },
      {
        zindex: 99999999,
      }
    );
  };

  const pararProp = (e) => {
    // funcion para para la propagación para el cerrado del carrito al tocar en partes del carrito.
    e.stopPropagation();
  };

  const eliminarProduct = (product) => {
    let nuevoCarrito = arrayCarrito?.filter((ele) => ele.nameProd !== product);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    dispatch(carritoStorage(nuevoCarrito));
    Notiflix.Notify.success("Producto eliminado con exito", {
      zindex: 999999999999999,
      position: "left-top",
      timeout: 1500,
    });
  };

  const changeValue = (e, ele) => {
    if (e.target.name === "mas") {
      let carritoNuevoValor = arrayCarrito?.map((el) =>
        el.nameProd === ele.nameProd
          ? {
            ...el,
            cantidad:
              ele.cantidad === ele.maxStock ? ele.cantidad : ele.cantidad + 1,
          }
          : el
      );
      localStorage.setItem("carrito", JSON.stringify(carritoNuevoValor));
      dispatch(carritoStorage(carritoNuevoValor));
    } else {
      let carritoNuevoValor = arrayCarrito?.map((el) =>
        el.nameProd === ele.nameProd
          ? {
            ...el,
            cantidad: ele.cantidad > 1 ? ele.cantidad - 1 : ele.cantidad,
          }
          : el
      );
      localStorage.setItem("carrito", JSON.stringify(carritoNuevoValor));
      dispatch(carritoStorage(carritoNuevoValor));
    }
  };

  const handleCheckout = async () => {
    if (user) {
      if (arrayCarrito.length) {
        const items = arrayCarrito.map((i) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: i.nameProd,
            },
            unit_amount: i.precio * 10,
          },
          quantity: i.cantidad,
        }));
        const email = user.email;
        const response = await axios.post(
          "/pagos/create-checkout-session",
          { items, email }
        ).then((res) => {
          if (res.data) {
            window.location.href = res.data// force de URL
            localStorage.removeItem("carrito");
            dispatch(carritoStorage([]));
          }
        }).catch((err) => console.log(err));
      } else {
        const response = await axios.post("/pagos/create-checkout-session")
        Notiflix.Notify.failure(response.data.info, {
          zindex: 999999999999999,
          position: "left-top",
          timeout: 2000,
        });
      }
    } else {
      Notiflix.Notify.failure('Debes iniciar sesión para poder comprar!!', {
        zindex: 999999999999999,
        position: "left-top",
        timeout: 2000,
      });
    }
  };

  return (
    <div
      onClick={pararProp}
      className="modal fade ejeZ"
      id="exampleModalCenter"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
        style={{ zIndex: "999999999" }}
      >
        <div className="modal-content" style={{ zIndex: "999999999" }}>
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle" style={{ color: '#b4be9f' }}>
              Carrito de compras
            </h5>
            <button className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body containerTextModal">
            <>
              {arrayCarrito?.length ? (
                <>
                  {arrayCarrito?.map((ele, index) => {
                    return (
                      <div key={index} className="cartitasCarrito">
                        <img src={ele.imageProd} alt="img" />
                        <div className="containerBotonsitos">
                          <button
                            name="menos"
                            className="btnRestaSuma"
                            onClick={(e) => changeValue(e, ele)}
                          >
                            -
                          </button>
                          <p className="precioMap">{ele.cantidad}</p>
                          <button
                            name="mas"
                            className="btnRestaSuma"
                            onClick={(e) => changeValue(e, ele)}
                          >
                            +
                          </button>
                        </div>
                        <h5 className="precioApartado">{`$${ele.cantidad * parseInt(ele.precio)
                          }`}</h5>
                        <button
                          className="btnMapeo"
                          onClick={() => eliminarProduct(ele.nameProd)}
                        >
                          X
                        </button>
                      </div>
                    );
                  })}
                </>
              ) : (
                <div style={{ color: '#b4be9f' }}>Sin productos en el carrito</div>
              )}
            </>
          </div>
          <div className="modal-footer" style={{ position: "relative" }}>
            <p
              style={{
                position: "absolute",
                left: "20px",
                bottom: "0%",
                color: "#b4be9f",
              }}
            >{`$${arrayCarrito?.reduce(
              (ant, des) => ant + parseInt(des.precio) * des.cantidad,
              0
            )}`}</p>
            <button className="btn colorVaciar" onClick={borrarCarrito}>
              Vaciar carrito
            </button>
            <button className="btn colorComprar" onClick={() => handleCheckout()}>
              Comprar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
