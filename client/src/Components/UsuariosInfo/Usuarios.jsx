import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers, deleteUser } from "../../redux/actions";

const Usuarios = () => {
    const dispatch = useDispatch();
    const allUsers = useSelector(state => state.usuarios)
    const users = allUsers.filter(u => u.hidden === false)
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])
    const borrarUsuario = (user) => {
        const algo = user.idUser?.length ? user.idUser : null;
        algo?.length && dispatch(deleteUser(algo));
        window.location.reload();
    }
    return (
        <table>
            <thead>
                <tr>
                    <th style={{ color: '#57652a' }}>UserName</th>
                    <th style={{ color: '#57652a' }}>Mail</th>
                    <th style={{ color: '#57652a' }}>Id</th>
                </tr>
            </thead>
            <tbody>
                {users.length > 0 ? (
                    users.map(user =>
                        <tr key={user.idUser}>
                            <td style={{ color: '#b4be9f' }}>{user.username}</td>
                            <td style={{ color: '#b4be9f' }}>{user.email}</td>
                            <td style={{ color: '#b4be9f' }}>{user.idUser}</td>
                            <button onClick={() => borrarUsuario(user)} style={{
                                margin: '10px 0',
                                border: '1px solid #b4be9f',
                                borderRadius: '10px',
                                background: 'transparent',
                                cursor: 'pointer',
                                color: '#b4be9f'
                            }} >borrar</button>
                        </tr>
                    )) : (
                    <td>No hay usuarios</td>
                )}
            </tbody>
        </table>
    )
}
export default Usuarios;