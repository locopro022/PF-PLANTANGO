import React, {useState}from "react";
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";

const Formulario = ()=> {

    const dispatch = useDispatch();
const [admin, setAdmin]= useState({
    
    username:"",
    email:"",
    name:"",
    pass:"",
    lastName:"",
    nPhone:""

})

const addAdmin = (newAdmin)=> {
dispatch(addAdmin(newAdmin))
}

    const {register, errors, handlesubmit}= useForm();

    const onsubmit = (input, e)=>{
        console.log(input);
        e.target.reset()
    }

    return (
        <form onSubmit={handlesubmit(onsubmit)}>

<label>Nombre</label>
<input type="text" autofocus name="name" ref={
    register({
        required: {value:true, message: "Campo requerido"}
    })
}/>
<span>{errors?.name?.mesagge}</span>

<label>UserName</label>
<input type="text" name="username" ref={
    register({
        required: {value:true, message: "Campo requerido"}
    })
}/>
<span>{errors?.username?.mesagge}</span>

<label>Email</label>
<input type="email" name="email" ref={
    register({
        required: {value:true, message: "Campo requerido"}
    })
}/>
<span>{errors?.email?.mesagge}</span>

<label>Apellido</label>
<input type="text" name="lastName"/>
<span>{errors?.lastName?.mesagge}</span>

<label>Contraseña</label>
<input type="password" name="pass" ref={
    register({
        required: {value:true, message: "Campo requerido"}
    })
}/>
<span>{errors?.pass?.mesagge}</span>

<label>Repetir contraseña</label>
<input type="password" name="pass2" ref={
    register({
        required: {value:true, message: "Campo requerido"}
    })
}/>
<span>{errors?.pass2?.mesagge}</span>

<label>Telefono</label>
<input type="tel" name="nPhone"/>
<span>{errors?.nPhone?.mesagge}</span>

<button>Agregar administrador</button>
        </form>
    )
}

export default Formulario;