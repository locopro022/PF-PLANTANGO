import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51M4r6KE0RaxicoafTRWrCWLyFxJMLQhwyNyU7NvvWCa0Po4nlXqWaHsCVX60J3whxM941zIoSepcjHuhKv5PdhqR00sH8mav3B"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      try{
        const { data } = await axios.post("http://localhost:3001/pagos/stripe", {
          id,
          amount: 10000,
        });
        console.log(data);
        // elements.getElement(CardElement).clear();   // Para borrar datos del input 
      }catch(e){
        console.log(e);
        // res.json({error: e})
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div className="form-group">
        <CardElement className="form-control" />
      </div>
      <button className="btn btn-success">Comprar</button>
    </form>
  );
};

const PagoStripe = () => {
  return (
    <Elements stripe={stripePromise}>
      {/* <div className="container p-4 "> */}
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <CheckoutForm />
        </div>
      </div>
      {/* </div> */}
    </Elements>
  );
};

export default PagoStripe;
