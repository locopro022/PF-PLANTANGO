import {
  GET_ARRAY_VIVERO,
  GET_ARRAY_HUERTA,
  GET_TIPOS_HUERTA,
  SET_FILTROS_HUERTA,
  SET_PAG_HUERTA,
  GET_ARRAY_NOTIFICACIONES,
  GET_ARRAY_CARRITO,
  URL,
  ACTIVAR,
  GET_SEARCH,
  GET_ALL_FAVORITES,
  GET_USER,
  DELETE_FAVORITES,
  ADD_FAVORITES,
} from "../actions";

// import { plantaACarta } from "../utils";

const initialState = {
  arrayVivero: [],
  arrayHuerta: {},
  filtrosHuerta: [],
  pagHuerta: 0,
  arrayNotificaciones: [],
  arrayCarrito: [],
  url: "",
  nombre: "perfil",
  favoritos: [],
  user: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARRAY_VIVERO:
      return {
        ...state,
        arrayVivero: [...action.payload],
      };
    case GET_TIPOS_HUERTA:
      let filtrosHuerta = [];
      for (let key in action.payload)
        filtrosHuerta = [
          ...filtrosHuerta,
          {
            filter: key,
            options: action.payload[key].map((value) => ({
              value,
              checked: false,
            })),
          },
        ];
      console.log(filtrosHuerta);
      return {
        ...state,
        tiposHuerta: action.payload,
        filtrosHuerta,
      };

    case SET_FILTROS_HUERTA:
      return {
        ...state,
        pagHuerta: 0,
        filtrosHuerta:
          action.payload === "clear"
            ? state.filtrosHuerta.map((item) => ({
                ...item,
                options: item.options.map((option) => ({
                  ...option,
                  checked: false,
                })),
              }))
            : state.filtrosHuerta.map((item) =>
                item.filter !== action.payload.type
                  ? item
                  : {
                      ...item,
                      options: item.options.map((option) =>
                        option.value !== action.payload.value
                          ? option
                          : { ...option, checked: action.payload.checked }
                      ),
                    }
              ),
      };

    case SET_PAG_HUERTA:
      return { ...state, pagHuerta: action.payload };
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
        url: action.payload,
      };
    case ACTIVAR:
      return {
        ...state,
        nombre: `${action.payload}`,
      };
    case GET_SEARCH:
      return {
        ...state,
        arrayHuerta: action.payload,
      };
    case GET_ALL_FAVORITES:
      return {
        ...state,
        favoritos: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_FAVORITES:
      return {
        ...state,
        favoritos: action.payload,
      };
    case ADD_FAVORITES:
      return{
        ...state,
        favoritos: action.payload
      }
    default:
      return state;
  }
};

export default rootReducer;
