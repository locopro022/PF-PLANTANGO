import React,{useEffect} from "react";
import { useDispatch, useSelector} from "react-redux"
import { getAllUsers, deleteUser } from "../../redux/actions";

const Usuarios = ()=> {

const dispatch = useDispatch();



const allUsers = useSelector(state=> state.usuarios)
const users= allUsers.filter( u => u.hidden === false)

useEffect(()=>{
 dispatch(getAllUsers());
 },[dispatch])

const borrarUsuario = (user)=> {
    
const algo = user.idUser?.length? user.idUser : null;

algo?.length&&dispatch(deleteUser(algo));
window.location. reload();

}

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
                    <button onClick={()=>borrarUsuario(user)} >borrar</button>
                    </tr>
                   
                    )) : (
                        <td>No hay usuarios</td>
                    )}
                
            </tbody>
        
        </table>
    )
}


export default Usuarios;