import axios from "axios";
/* import { response } from "../../../../api/src/app"; */
import { plantaADetalle } from "../utils";

export const GET_TIPOS_HUERTA = "GET_TIPOS_HUERTA";
export const SET_FILTROS_HUERTA = "SET_FILTROS_HUERTA";
export const SET_PAG_HUERTA = "SET_PAG_HUERTA";
export const GET_ARRAY_HUERTA = "GET_ARRAY_HUERTA";
export const GET_ARRAY_PRODUCTS = "GET_ARRAY_PRODUCTS";
export const GET_PRODUCT = "GET_PRODUCT";
export const GET_ARRAY_CARRITO = "GET_ARRAY_CARRITO";
export const EDIT_LIKE_PLANT = "EDIT_LIKE_PLANT"

export const GET_ARRAY_VIVERO = "GET_ARRAY_VIVERO";
export const GET_ARRAY_NOTIFICACIONES = "GET_ARRAY_NOTIFICACIONES";
export const ACTIVAR = "ACTIVAR";

export const URL = "URL";
export const GET_SEARCH = "GET_SEARCH";

export const GET_ALL_FAVORITES = "GET_ALL_FAVORITES";
export const DELETE_FAVORITES = "DELETE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const GET_USER = "GET_USER";
export const GET_DAILY_USER = "GET_DAILY_USER";
export const EDIT_DAILY_USER = "EDIT_DAILY_USER";
export const DELETE_DAILY_USER = "DELETE_DAILY_USER";
export const CREATE_DAILY_USER = "CREATE_DAILY_USER";
export const SELECT_DETAIL_DAILY = "SELECT_DETAIL_DAILY";

export const GET_ALL_USERS = "GET_ALL_USERS";
export const CREATE_ADMIN = "CREATE_ADMIN";
export const DELETE_USER = "DELETE_USER";
export const CLEAR_CARRITO = "CLEAR_CARRITO";
export const GET_NOTIFICACIONES = "GET_NOTIFICACIONES";
export const TRAER_RECOR = "TRAER_RECOR";

export const GET_BILL = "GET_BILL";

export const SET_PAGE_VIVERO = "SET_PAGE_VIVERO";
export const SET_FILTROS_VIVERO = "SET_FILTROS_VIVERO";
export const GET_CATEGORIAS_VIVERO = "GET_CATEGORIAS_VIVERO";
export const GET_SEARCH_VIVERO = "GET_SEARCH_VIVERO";
//MZ
export const CREATE_REVIEW = "CREATE_REVIEW";
export const GET_RATING_PRODUCT = "GET_RATING_PRODUCT";
export const PUT_RATING_PRODUCT = "PUT_RATING_PRODUCT";

const API_URL = "http://localhost:3001";

export const eliminandoRecor = (horario, usuario) => async (dispatch) => {
  const respuesta = await axios.delete(
    `${API_URL}/user/delete?horario=${horario}&&usuario=${usuario}`
  );
  return dispatch({ type: TRAER_RECOR, payload: respuesta.data });
};

export const traerRecordatorios = (usuario) => async (dispatch) => {
  const response = await axios.get(
    `${API_URL}/user/traer/notifi/noti?usuario=${usuario}`
  );
  return dispatch({ type: TRAER_RECOR, payload: response.data });
};

export const getSearchVivero = (search) => {
  return (dispatch) => {
    try {
      fetch(`http://localhost:3001/products?search=${search}`)
        .then((response) => response.json())
        .then((data) => dispatch({ type: GET_SEARCH_VIVERO, payload: data }));
    } catch (error) {
      throw new Error("Error en actions  -> getSearch");
    }
  };
};

export const traerNotificaciones = (arr) => (dispatch) => {
  if (arr === null) arr = [];
  return dispatch({ type: GET_NOTIFICACIONES, payload: arr });
};

export const actualizarNotificaciones = (arr) => (dispatch) => {
  return dispatch({ type: GET_NOTIFICACIONES, payload: arr });
};

export const recordatorio = (hora) => async (dispatch) => {
  const { usuario, horario } = hora;
  await axios
    .post(`${API_URL}/user/recordatorio?usuario=${usuario}&&horario=${horario}`)
    .then(async (res) => {
      const respuesta = await axios.get(
        `${API_URL}/user/noti/notifi?usuario=${usuario}`
      );
      const NotiStora =
        JSON.parse(localStorage.getItem("Notificaciones")) === null
          ? []
          : JSON.parse(localStorage.getItem("Notificaciones"));
      localStorage.setItem(
        "Notificaciones",
        JSON.stringify([...NotiStora, respuesta.data])
      );
      dispatch(
        traerNotificaciones(
          JSON.parse(localStorage.getItem("Notificaciones"))
        ) === null
          ? []
          : traerNotificaciones(
              JSON.parse(localStorage.getItem("Notificaciones"))
            )
      );
      const response2 = await axios.get(
        `${API_URL}/user/traer/notifi/noti?usuario=${usuario}`
      );
      return dispatch({ type: TRAER_RECOR, payload: response2.data });
    });
};

export const carritoStorage = (arr) => (dispatch) => {
  if (arr === null) arr = [];
  return dispatch({ type: GET_ARRAY_CARRITO, payload: arr });
};

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

export const setNumPage = (num) => (dispatch) => {
  dispatch({ type: SET_PAGE_VIVERO, payload: num });
};

export const getHuertaDetail = async (id) => {
  const planta = await get(`plants/${id}`).then((planta) => {
    return plantaADetalle(planta);
  });
  return planta;
};

export const getHuerta =
  (e = null) =>
  (dispatch) => {
    return get(`plants`, { params: e }).then((data) => {
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

export function editPlantforLike(obj){
  return dispatch => axios.put(`${API_URL}/plants`, obj).then(res=>res.data).then(payload=> dispatch({type:EDIT_LIKE_PLANT, payload}))
}
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

// export const getSearchVivero = (search) => {
//   return (dispatch) => {
//     try {
//       fetch(`http://localhost:3001/products?search=${search}`)
//         .then((response) => response.json())
//         .then((data) => dispatch({ type: GET_SEARCH_VIVERO, payload: data }));
//     } catch (error) {
//       throw new Error("Error en actions  -> getSearch");
//     }
//   };
// };

export function getFav(idU) {
  return (dispatch) =>
    axios(`http://localhost:3001/user/favorites/${idU}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: GET_ALL_FAVORITES, payload }));
}

export function deleteFav(idU, idP) {
  return (dispatch) =>
    axios
      .delete(`http://localhost:3001/user/favorites/delete/${idU}/${idP}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: DELETE_FAVORITES, payload }));
}
export function addFav(idU, idP) {
  return (dispatch) =>
    axios
      .post(`http://localhost:3001/user/favorites/${idU}/${idP}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: ADD_FAVORITES, payload }));
}
export function getDaily(idU) {
  return (dispatch) =>
    axios(`http://localhost:3001/user/daily/${idU}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: GET_DAILY_USER, payload }));
}
export function createDaily(idU) {
  return dispatch => axios.post(`http://localhost:3001/user/daily/${idU}`).then((res) => res.data)
  .then((payload) => dispatch({ type: CREATE_DAILY_USER, payload }));
}
export function selectDetailDaily(obj) {
  return (dispatch) => dispatch({ type: SELECT_DETAIL_DAILY, payload: obj });
}
export function editDaily(idU, idD, obj) {
  return (dispatch) =>
    axios
      .put(`http://localhost:3001/user/daily/${idU}/${idD}`, obj)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: EDIT_DAILY_USER, payload }));
}
export function deleteDailyUser(idU, idD) {
  return (dispatch) =>
    axios
      .delete(`http://localhost:3001/user/daily/${idU}/${idD}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: DELETE_DAILY_USER, payload }));
}
export function getUser(user) {
  return (dispatch) =>
    axios(`http://localhost:3001/user/${user}`)
      .then((res) => res.data)
      .then((payload) => dispatch({ type: GET_USER, payload }));
}

export const getAllUsers = () => {
  return (dispatch) => {
    fetch(`http://localhost:3001/user/all`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_ALL_USERS, payload: data });
      });
  };
};

export const addAdmin = (newAdmin) => {
  return async (dispatch) => {
    await axios.post(`http://localhost:3001/user/admin`, newAdmin);
    return dispatch({ type: CREATE_ADMIN });
  };
};

export const deleteUser = (idUser) => {
  return async function (dispatch) {
    const user = await axios.delete(`http://localhost:3001/user/${idUser}`);

    return dispatch({
      type: DELETE_USER,
      payload: user.data,
    });
  };
};

export const traerProductos =
  (e = null) =>
  async (dispatch) => {
    console.log("action traer productos", e);
    return await axios
      .get("http://localhost:3001/products", { params: e })
      .then((productos) => {
        dispatch({ type: GET_ARRAY_PRODUCTS, payload: productos.data });
      });
  };

export const setFiltrosProductos = (e) => (dispatch) => {
  console.log("asi llega el filtro a la action", e);
  dispatch({ type: SET_FILTROS_VIVERO, payload: e });
};

export const traerProducto = (id) => async (dispatch) => {
  return await axios
    .get(`http://localhost:3001/products/${id}`)
    .then((producto) =>
      dispatch({ type: GET_PRODUCT, payload: producto.data })
    );
};

export const clearProducto = () => (dispatch) => {
  return dispatch({ type: CLEAR_CARRITO, payload: {} });
};

export const getBill = () => async (dispatch) => {
  const kpi1 = await axios(`http://localhost:3001/bill/getKPI1`);
  const kpi2 = await axios(`http://localhost:3001/bill/getKPI2`);
  const kpi3 = await axios(`http://localhost:3001/bill/getKPI3`);
  const kpi4 = await axios(`http://localhost:3001/bill/getKPI4`);
  const kpi5 = await axios(`http://localhost:3001/bill/getKPI5`);

  const kpiTotal = [
    kpi1.data.datos[0],
    kpi2.data.datos[0],
    kpi3.data.datos[0],
    kpi4.data.datos,
    kpi5.data.datos,
  ];
  console.log(kpiTotal, "kpiTotal");
  return dispatch({ type: GET_BILL, payload: kpiTotal });
};

export const getCategoriasVivero = () => {
  return (dispatch) => {
    fetch(`http://localhost:3001/products/types`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: GET_CATEGORIAS_VIVERO, payload: data });
      });
  };
};
// export const setFiltrosHuerta = (e) => (dispatch) => {
//   dispatch({ type: SET_FILTROS_HUERTA, payload: e });
// };


//MZ

export function creaReview(review){

  return function (dispatch){
      return fetch('http://localhost:3001/bill/createReview',{
              method:'POST',
              headers: {'Content-Type': 'application/json',},
              body: JSON.stringify({
                  codProd: review.codProd,
                  starsReview: review.stars,
                  textReview: review.textReview
              })
      })
      .then(res => res.json())
      .then(res => {  
          dispatch({
              type: "CREATE_REVIEW",
              payload: res
          })
      })
  }   
};

export const getRatingproduct = (codprod) => {
  return (dispatch) => {
    fetch(`http://localhost:3001/bill/ratingproduct/${codprod}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("rating:", Math.round(data.datos[0].Rating))
        dispatch({ type: GET_RATING_PRODUCT, payload: data.datos[0].Rating });
      });
  };
};

export const ratingproductupdate = (codprod) => {
  return (dispatch) => {
    //fetch(`http://localhost:3001/bill/ratingproductupdate/${codprod}`)
    axios
      .put(`http://localhost:3001/bill/ratingproductupdate/${codprod}`)  
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: PUT_RATING_PRODUCT, payload: data });
      });
  };
};

