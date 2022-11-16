import axios from "axios";
import { plantaADetalle } from "../utils";

export const GET_TIPOS_HUERTA = "GET_TIPOS_HUERTA";
export const SET_FILTROS_HUERTA = "SET_FILTROS_HUERTA";
export const SET_PAG_HUERTA = "SET_PAG_HUERTA";
export const GET_ARRAY_HUERTA = "GET_ARRAY_HUERTA";

export const GET_ARRAY_VIVERO = "GET_ARRAY_VIVERO";
export const GET_ARRAY_NOTIFICACIONES = "GET_ARRAY_NOTIFICACIONES";
export const GET_ARRAY_CARRITO = "GET_ARRAY_CARRITO";
export const ACTIVAR = "ACTIVAR";

export const URL = "URL";
export const GET_SEARCH = "GET_SEARCH";

export const GET_ALL_FAVORITES = "GET_ALL_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES"
export const ADD_FAVORITES = "ADD_FAVORITES"
export const GET_USER = "GET_USER";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const CREATE_ADMIN ="CREATE_ADMIN"

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

export const setFiltrosHuerta = (e) => (dispatch) => {
  dispatch({ type: SET_FILTROS_HUERTA, payload: e });
};

export const setPagHuerta = (e) => (dispatch) => {
  dispatch({ type: SET_PAG_HUERTA, payload: e });
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
  await axios.post(`${API_URL}/plants/creacion`, planta);
};

export const urlPlantaCreada = (url) => (dispatch) => {
  return dispatch({ type: URL, payload: url });
};

export const activaciones = (nombre) => (dispatch) => {
  return dispatch({ type: ACTIVAR, payload: nombre });
};

export const getSearch = (search) => {
  return (dispatch) => {
    try {
      fetch(`http://localhost:3001/plants?search=${search}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_SEARCH, payload: data }));
    } catch (error) {
      throw new Error("Error en actions  -> getSearch");
    }
  };
};

export function getFav(idU) {
  return (dispatch) =>
    axios(`http://localhost:3001/user/favorites/${idU}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: GET_ALL_FAVORITES, payload }));
}

export function deleteFav(idU,idP) {
  return (dispatch) =>
    axios.delete(`http://localhost:3001/user/favorites/delete/${idU}/${idP}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: DELETE_FAVORITES, payload }));
}
export function addFav(idU,idP) {
  return (dispatch) =>
    axios.post(`http://localhost:3001/user/favorites/${idU}/${idP}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: ADD_FAVORITES, payload }));
}
export function getUser(user) {
  return (dispatch) =>
    axios(`http://localhost:3001/user/${user}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: GET_USER, payload }));
}

export const getAllUsers = ()=> {
  console.log("LLEGUE A LA ACTION");
  return(dispatch)=> {
    fetch(`http://localhost:3001/user/all`)
    .then((response)=>  response.json())
    .then( (data)=> {
      console.log("DATA: ",data);
      dispatch ({ type: GET_ALL_USERS, payload: data})
    })
    
  }}

  export const addAdmin= (newAdmin)=> {
return async(dispatch)=>{
   await axios.post(`http://localhost:3001/user/`,newAdmin);
   return dispatch({type: CREATE_ADMIN})}
    
  }
