import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { traerProducto, clearProducto } from '../../redux/actions'
import { carritoStorage } from '../../redux/actions'
import './DetailVivero.css'
import Notiflix from 'notiflix';

const DetailVivero = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [numero, setNumero] = useState(1)
    const producto = useSelector(state => state.producto)
    const carritoSto = useSelector(state => state.carrito)
    const [agregado, setAgregado] = useState(false)
    console.log("PRODUCTO", producto)

    const changeValue = (e) => {
        if (numero === 1 && e.target.name === 'resta') setNumero(numero)
        else if (e.target.name === 'suma' && numero === producto.maxStock) setNumero(numero)
        else if (e.target.name === 'resta') setNumero(numero - 1)
        else setNumero(numero + 1)
    }

    const addStorage = (producto) => {
        carritoSto?.find(ele => ele.nameProd === producto.nameProd)
            ?
            localStorage.setItem("carrito", JSON.stringify(carritoSto?.map(ele => ele.nameProd === producto.nameProd ? { ...ele, cantidad: numero } : ele)))
            :
            localStorage.setItem("carrito", JSON.stringify(
                carritoSto?.length
                    ?
                    [...carritoSto, { ...producto, cantidad: numero }]
                    :
                    [{ ...producto, cantidad: numero }]
            ))
        dispatch(carritoStorage(JSON.parse(localStorage.getItem("carrito"))))
        setAgregado(!agregado)
        Notiflix.Notify.success('Producto agregado con exito.', {
            zindex: 999999999999999,
            position: "left-top",
            timeout: 1500
        })
    }
    useEffect(() => {
        dispatch(traerProducto(id))
        return () => dispatch(clearProducto())
    }, [agregado])
    return (
        <div className='containerAtrasVivero'>
            <div className='containerDetailVivero'>
                <div className='containerTituloImg'>
                    <h4>{producto?.nameProd}</h4>
                    <img src={producto?.imageProd} />
                </div>
                <div className='containerDescripcion'>
                    <p>{producto?.descripProd}</p>
                    <div className='containerAgregarCarro'>
                        <div className='containerBotones'>
                            <button className='btnClick' name='resta' onClick={changeValue}>-</button>
                            <h5>{numero}</h5>
                            <button className='btnClick' name='suma' onClick={changeValue}>+</button>
                        </div>
                        <button className='botonAgregar' onClick={() => addStorage(producto)}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailVivero