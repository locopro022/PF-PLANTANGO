import axios from "axios";
import { plantaADetalle } from "../utils";

export const GET_TIPOS_HUERTA = "GET_TIPOS_HUERTA";
export const CONSTRAIN_HUERTA = "CONSTRAIN_HUERTA";
export const GET_ARRAY_HUERTA = "GET_ARRAY_HUERTA";

export const GET_ARRAY_VIVERO = "GET_ARRAY_VIVERO";
export const GET_ARRAY_NOTIFICACIONES = "GET_ARRAY_NOTIFICACIONES";
export const GET_ARRAY_CARRITO = "GET_ARRAY_CARRITO";
export const GET_SEARCH = "GET_SEARCH";

const API_URL = "http://localhost:3001";

const get = async (url, parameter = {}) => {
  const response = await axios.get(`${API_URL}/${url}`, parameter);
  return response.data;
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
export const getTiposHuerta = () => (dispatch) => {
  return get(`plants/types`).then((data) => {
    console.log("Los tipos llegaron asi:", data);
    dispatch({
      type: GET_TIPOS_HUERTA,
      payload: data,
    });
  });
};

export const constrainHuerta = (e) => (dispatch) => {
  console.log("aplicando constrain a redux", e);
  dispatch({ type: CONSTRAIN_HUERTA, payload: e });
};

export const getHuertaDetail = async (id) => {
  const planta = await get(`plants/${id}`).then((planta) => {
    console.log("Recibiste la planta:", planta);
    return plantaADetalle(planta);
  });
  return planta;
};

export const getHuerta =
  (e = null) =>
    (dispatch) => {
      return get(`plants`, { params: e }).then((data) => {
        console.log("las Plantas llegaron asi:", data);
        dispatch({
          type: GET_ARRAY_HUERTA,
          payload: data,
        });
      });
    };

export const crearPlanta = (planta) => async () => {
  await axios.post(`${API_URL}/plants/creacion`, planta)
};

export const getSearch = (search)=> {
  try {
    return(dispatch)=>{
      fetch(`http://localhost:3001/plants?search=${search}`)
      .then ((response)=> response.json())
      .then((data)=> dispatch({ type: GET_SEARCH, payload: data}))
    }
  } catch (error) {
    throw new Error("Error en actions  -> getSearch")
  }
}
