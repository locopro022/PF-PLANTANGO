import axios from 'axios'

export const GET_ARRAY_VIVERO = 'GET_ARRAY_VIVERO';
export const GET_ARRAY_HUERTA = 'GET_ARRAY_HUERTA';
export const GET_ARRAY_NOTIFICACIONES = 'GET_ARRAY_NOTIFICACIONES'
export const GET_ARRAY_CARRITO = 'GET_ARRAY_CARRITO'

export const plantaCreada = (planta) => async () => {
    await axios.post({/*Ruta de back*/ }, planta)
}