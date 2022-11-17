import React, {useState}from "react";
import {useForm} from "react-hook-form"
import { useDispatch } from "react-redux";
import { addAdmin, getAllUsers } from "../../redux/actions";

const Formulario = ()=> {

    const dispatch = useDispatch();


     const {register, formState: {errors}, handleSubmit, watch}= useForm({mode:'onTouched'});

    const onSubmit = (data)=>{
        dispatch(addAdmin(data))
        window.location. reload();
    }


    const pass= watch('pass')
    return (
        
<form onSubmit={handleSubmit(onSubmit)}>

<div>
<label>Nombre</label>
<input type="text" name="name"  {...register("name", {required: true, maxLength: 10})}/>
{errors?.name?.type === 'required' && <span><small>El campo nombre es requerido</small></span>}
{errors?.name?.type === 'maxLength' && <span><small>Debe tener máximo 10 caracteres</small></span>}
</div>

<div>
<label>UserName</label>
<input type="text" name="username" 
    {...register("username", {required: true, maxLength: 10})}/>
    {errors?.username?.type === 'required' && <span><small>El campo UserName es requerido</small></span>}
    {errors?.username?.type === 'maxLength' && <span><small>Debe tener máximo 10 caracteres</small></span>}

</div>

<div>
<label>Email</label>
<input type="email" name="email" {...register("email", {required: true, pattern: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ })}/>
{errors?.email?.type === 'required' && <span><small>El campo email es requerido</small></span>}
{errors?.email?.type === 'pattern' && <span><small>El formato del email es incorrecto</small></span>}
</div>

<div>
<label>Apellido</label>
<input type="text" name="lastName" {...register("lastName", {maxLength:10})}/>
{errors?.lasName?.type === 'maxLength' && <span><small>Debe tener máximo 10 caracteres</small></span>}
</div>

<div>
<label>Contraseña</label>
<input type="password" name="pass" {...register("pass", {required: true})}/>
{errors?.pass?.type === 'required' && <span><small>El campo contraseña es requerido</small></span>}
</div>

<div>
<label>Repetir contraseña</label>
<input type="password" name="pass2" {...register("pass2", {required: true, 
validate: (value)=> 
value===pass || "Las contraseñas no coinciden" })}/>
{errors?.pass2?.type === 'required' && <span><small>El campo `Repetir contraseña` es requerido</small></span>}
{errors.pass2 && <span><small>{errors.pass2.message}</small></span> }
</div>

<div>
<label>Telefono</label>
<input type="tel" name="nPhone"/>
</div>

<button>Agregar administrador</button>
        </form>
    )
}

export default Formulario;