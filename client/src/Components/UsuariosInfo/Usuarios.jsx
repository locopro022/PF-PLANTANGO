import React,{useState, useEffect} from "react";
import { useDispatch, useSelector} from "react-redux"
import { getAllUsers } from "../../redux/actions";

const Usuarios = ()=> {

const dispatch = useDispatch();

useEffect(()=>{
    dispatch(getAllUsers())
},[])

const allUsers = useSelector(state=> state.usuarios)
const users= allUsers.filter( u => u.hidden === false)

    return ( 
        <table>
            <thead>
            <tr>
                <th>UserName</th>
                <th>Mail</th>
                <th>Id</th>
                
            </tr>
            </thead>
            <tbody>
                
                    { users.length > 0? (
                        users.map(user => 
                    <tr key={user.idUser}>
                    <td>{user.username}</td>
                   <td>{user.email}</td>
                   <td>{user.idUser}</td>
                   <button className="button muted-button">editar</button>
                   <button className="button muted-button">borrar</button>
                    </tr>
                    )) : (
                        <td>No hay usuarios</td>
                    )}
                
            </tbody>
        
        </table>
    )
}


export default Usuarios;