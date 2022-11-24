import React, { useState } from "react";
import Cards from "react-credit-cards";
import Notiflix from "notiflix";
import "react-credit-cards/lib/styles-compiled.css";
import s from "./ReactCreditCard.module.css";

const CreditCardForm = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState("");

  const xHandler = () => {
    Notiflix.Notify.success("NOTIFICACIÓN DE PAGO", {
      zindex: 999999999999999,
      position: "left-top",
      timeout: 1500,
    });
  };

  return (
    <div className={s.container}>
      <div>
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
      </div>
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Numero de tarjeta"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          maxLength="16"
        />
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          maxLength="30"
        />
        <input
          type="tel"
          name="expiry"
          placeholder="Valido hasta"
          value={expiry}
          onChange={(e) => setExpiry(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          maxLength="4"
        />
        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          value={cvc}
          onChange={(e) => setCvc(e.target.value)}
          onFocus={(e) => setFocus(e.target.name)}
          maxLength="4"
        />
      </form>

      <button className={s.btn} onClick={xHandler}>
        Comprar
      </button>
    </div>
  );
};

export default CreditCardForm;