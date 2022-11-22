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
  GET_ALL_FAVORITES,
  GET_USER,
  GET_SEARCH,
  GET_SEARCH_VIVERO,
  GET_ALL_USERS,
  CREATE_ADMIN,
  DELETE_FAVORITES,
  ADD_FAVORITES,
  DELETE_USER,
  GET_ARRAY_PRODUCTS,
  GET_PRODUCT,
  GET_BILL,
  SET_PAGE_VIVERO,
  GET_DAILY_USER,
  EDIT_DAILY_USER,
  CLEAR_CARRITO,
  SET_FILTROS_VIVERO,
  GET_CATEGORIAS_VIVERO,
  GET_NOTIFICACIONES,
  TRAER_RECOR,
} from "../actions";

// import { plantaACarta } from "../utils";

const initialState = {
  arrayVivero: [],
  arrayHuerta: {},
  filtrosHuerta: [],
  filtrosVivero: {},
  pagHuerta: 0,
  pagVivero: 0,
  arrayNotificaciones: [],
  arrayCarrito: [],
  url: "",
  nombre: "perfil",
  favoritos: [],
  diario: [],
  user: {},
  usuarios: [],
  producto: {},
  tiposCategoria: [],
  bill: [],
  notificaciones: [],
  arrayRecor: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRAER_RECOR:
      return {
        ...state,
        arrayRecor: [...action.payload],
      };
    case GET_NOTIFICACIONES:
      return {
        ...state,
        notificaciones: [...action.payload],
      };
    // case GET_SEARCH_VIVERO:
    //   return {
    //     ...state,
    //     arrayVivero: action.payload,
    //   };
    case CLEAR_CARRITO:
      return {
        ...state,
        producto: { ...action.payload },
      };
    case GET_ARRAY_CARRITO:
      return {
        ...state,
        carrito: [...action.payload],
      };
    case GET_ARRAY_PRODUCTS:
      return {
        ...state,
        arrayVivero: action.payload,
      };
    case GET_PRODUCT:
      return {
        ...state,
        producto: { ...action.payload },
      };
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
    case GET_CATEGORIAS_VIVERO:
      return {
        ...state,
        tiposCategoria: action.payload,
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
    case SET_FILTROS_VIVERO:
      return {
        ...state,
        filtrosVivero: action.payload,
      };
    case SET_PAG_HUERTA:
      return { ...state, pagHuerta: action.payload };
    case GET_ARRAY_HUERTA:
      return {
        ...state,
        arrayHuerta: { ...action.payload },
      };

    case SET_PAGE_VIVERO:
      return {
        ...state,
        pagVivero: action.payload,
      };
    case GET_ARRAY_NOTIFICACIONES:
      return {
        ...state,
        arrayNotificaciones: [...action.payload],
      };
    case URL:
      return {
        ...state,
        url: action.payload,
      };
    case GET_SEARCH:
      return {
        ...state,
        arrayHuerta: action.payload,
      };
      case GET_SEARCH_VIVERO:
        return {
          ...state,
          arrayVivero: action.payload,
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
    case ACTIVAR:
      return {
        ...state,
        nombre: `${action.payload}`,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        usuarios: action.payload,
      };
    case CREATE_ADMIN:
      return {
        ...state,
      };
    case DELETE_FAVORITES:
      return {
        ...state,
        favoritos: action.payload,
      };
    case ADD_FAVORITES:
      return {
        ...state,
        favoritos: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
      };
    case GET_BILL:
      return {
        ...state,
        bill: action.payload,
      };
    case GET_DAILY_USER:
      return {
        ...state,
        diario: action.payload,
      };
    case EDIT_DAILY_USER:
      return {
        ...state,
        diario: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
