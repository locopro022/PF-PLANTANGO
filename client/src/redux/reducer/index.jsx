import { GET_ARRAY_VIVERO, GET_ARRAY_HUERTA, GET_ARRAY_NOTIFICACIONES, GET_ARRAY_CARRITO } from '../actions'

const initialState = {
    arrayVivero: [],
    arrayHuerta: [],
    arrayNotificaciones: [],
    arrayCarrito: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARRAY_VIVERO:
            return {
                ...state,
                arrayVivero: [...action.payload]
            }
        case GET_ARRAY_HUERTA:
            return {
                ...state,
                arrayHuerta: [...action.payload]
            }
        case GET_ARRAY_NOTIFICACIONES:
            return {
                ...state,
                arrayNotificaciones: [...action.payload]
            }
        case GET_ARRAY_CARRITO:
            return {
                ...state,
                arrayCarrito: [...action.payload]
            }
        default:
            return state
    }
}

export default rootReducer;