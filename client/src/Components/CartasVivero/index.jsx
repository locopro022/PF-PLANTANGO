import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { traerProductos } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import './CartasVivero.css'

const CartasVivero = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const arrayVivero = useSelector(state => state.arrayVivero)
    
    
    useEffect(() => {
        dispatch(traerProductos())
        console.log("VIVERO PRODUCTOS:", arrayVivero); 
    }, [])

    return (
        <div className='containerCardVivero'> 
            {
                arrayVivero?.results?.map((produc, index) => {
                    return (
                        <div key={index} className='cardContainerVivero estilos' onClick={() => navigate(`/vivero/${produc.codProd}`)}>
                            <p style={{ textAlign: 'center' }}>{produc.nameProd}</p>
                            <img src={produc.imageProd} alt='img' className='imgVivero' />
                            <h4 className='price'>{`$${parseInt(produc.precio)}`}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartasVivero;