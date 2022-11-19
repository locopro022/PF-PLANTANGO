import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { recordatorio } from '../../redux/actions'

const Recordatorio = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.user)
    const [enviar, setEnviar] = useState({
        usuario: "",
        horario: ""
    })
    const changeValue = (e) => {
        let tiempo = e.target.value.split(":").join("")
        setEnviar({
            usuario: email.username,
            horario: tiempo
        })
    }
    console.log(enviar)
    const enviarRecordatorio = () => {
        if (enviar.usuario.length && enviar.horario.length) dispatch(recordatorio(enviar))
        else console.log("te falta cosas papito")
    }
    return (
        <div>
            <input
                type='time'
                onChange={changeValue}
                value={enviar.hora}
            />
            <button onClick={enviarRecordatorio} >envialo</button>
        </div>
    )
}

export default Recordatorio;
