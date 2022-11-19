import React from 'react'
import { useSelector } from 'react-redux'

const Recordatorio = () => {
    const email = useSelector(state => state.user)
    console.log(email)
    return (
        <div>
            <input type='text' placeholder='Ingresa el horario de recordatorio' />
        </div>
    )
}

export default Recordatorio;
