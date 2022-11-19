import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { traerProductos } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import './CartasVivero.css'
import {Link} from 'react-router-dom'


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
                            <p className='nameProduc' style={{ textAlign: 'center' }}>{produc.nameProd}</p>
                            <h5 className='price' >{`$${parseInt(produc.precio)}`}</h5>
                            <Link to = {`/vivero/${produc.codProd}`}>
                                  <h5 className='cardcomprar'> Comprar </h5>
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CartasVivero;