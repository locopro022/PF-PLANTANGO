import axios from "axios";
import { plantaADetalle } from "../utils";

export const GET_ARRAY_VIVERO = "GET_ARRAY_VIVERO";
export const GET_ARRAY_HUERTA = "GET_ARRAY_HUERTA";
export const GET_ARRAY_NOTIFICACIONES = "GET_ARRAY_NOTIFICACIONES";
export const GET_ARRAY_CARRITO = "GET_ARRAY_CARRITO";

const API_URL = "http://localhost:3001";

const api = async (url, parameter = {}) => {
  const response = await fetch(`${API_URL}/${url}`, parameter);
  return response.json();
};

// const postApi = async (url, content, parameter = {}) => {
//   const response = await fetch(`${API_URL}/${url}`, {
//     ...parameter,
//     method: "POST",
//     body: JSON.stringify(content),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   });
//   return response.json();
// };

export const getHuertaDetail = (id) => {
  console.log("Buscando la planta a la que le diste click!");
  return api(`plants/${id}`).then((planta) => {
    let detalle = plantaADetalle(planta);
    return detalle;
  });
};

export const getHuerta = () => (dispatch) => {
  console.log("Consiguiendo todas las plantas guacho!");

  return api(`plants`).then((data) =>
    dispatch({
      type: GET_ARRAY_HUERTA,
      payload: data,
    })
  );
};

export const plantaCreada = (planta) => async () => {
  await axios.post(
    {
      /*Ruta de back*/
    },
    planta
  );
};
