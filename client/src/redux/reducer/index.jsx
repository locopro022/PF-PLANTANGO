import {
  GET_ARRAY_VIVERO,
  GET_ARRAY_HUERTA,
  GET_TIPOS_HUERTA,
  CONSTRAIN_HUERTA,
  GET_ARRAY_NOTIFICACIONES,
  GET_ARRAY_CARRITO,
  URL,
  ACTIVAR,
  GET_SEARCH,
  GET_ALL_USERS,
  CREATE_ADMIN
} from "../actions";

import { plantaACarta } from "../utils";

const initialState = {
  arrayVivero: [],
  arrayHuerta: {},
  tiposHuerta: {},
  constrainHuerta: {},
  arrayNotificaciones: [],
  arrayCarrito: [],
  url: '',
  nombre: 'perfil',
  usuarios: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARRAY_VIVERO:
      return {
        ...state,
        arrayVivero: [...action.payload],
      };
    case GET_TIPOS_HUERTA:
      return {
        ...state,
        tiposHuerta: action.payload,
      };
    case CONSTRAIN_HUERTA:
      return {
        ...state,
        constrainHuerta:
          action.payload === "clear"
            ? {}
            : {
              ...state.constrainHuerta,
              page: 0,
              [action.payload.type]: action.payload.value,
            },
      };
    case GET_ARRAY_HUERTA:
      return {
        ...state,
        arrayHuerta: { ...action.payload },
      };
    case GET_ARRAY_NOTIFICACIONES:
      return {
        ...state,
        arrayNotificaciones: [...action.payload],
      };
    case GET_ARRAY_CARRITO:
      return {
        ...state,
        arrayCarrito: [...action.payload],
      };
    case URL:
      return {
        ...state,
        url: action.payload
      }
    case ACTIVAR:
      return {
        ...state,
        nombre: `${action.payload}`
      }
      case GET_SEARCH: 
      return {
        ...state,
        arrayHuerta: action.payload
      }
      case GET_ALL_USERS: 
      return {
        ...state,
        usuarios: action.payload
      }
      case CREATE_ADMIN:
        return{
          ...state
        }
    default:
      return state;
  }
};

export default rootReducer;
