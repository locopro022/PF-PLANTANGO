import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { traerProducto, clearProducto } from '../../redux/actions'
import { carritoStorage } from '../../redux/actions'
import './DetailVivero.css'
import Notiflix from 'notiflix';
import { FaStar } from 'react-icons/fa';

//MZ
import { creaReview } from "../../redux/actions";
import { ratingproductupdate } from "../../redux/actions";

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

    //MZ
    const initialState = {
        codProd: 0,
        stars: 0,    
        textReview: ""
    };
    const [review, setReview] = React.useState(initialState);

    const colors = {
        orange : "#FFBA5A",
        grey : "#a9a9a9"
    }
    const starsA = Array(5).fill(0);
    const [currentStar, setCurrentStar] = useState(0);
    const [hoverStar, setHoverStar] = useState(undefined);

    const handleClickStar = value => {
        setCurrentStar(value)
        setReview({...review, codProd: producto.codProd, stars: value});
    }
    const handleMouseOverStar =  value => {
        setHoverStar(value)
    }
    const handleMouseLeaveStar = () => {
        setHoverStar(undefined)
    }

    let handleOnChange = (e) => {
        setReview({...review, [e.target.name]: e.target.value});
    };
    
    const sendReview = (e) => {
        e.preventDefault();
        if ( review.stars>0 && review.textReview.length>2) {
            dispatch(creaReview(review));
            dispatch(ratingproductupdate(review.codProd));
            alert("Review creado y Rating actualizado..!")
            setReview(initialState);
        //navigate("/vivero");
        }
        else alert("Por favor marque una cantidad de estrellas e ingrese un comentario")
        
    };




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

                    <div style={styles.container}>
                        <h2 >Califica este producto:</h2>
                        <div style={styles.stars}>
                            {starsA.map((_, index) => {
                            return(
                                <FaStar
                                    key={index}
                                    size={24}
                                    style={{
                                        marginRight: 10,
                                        cursor: "pointer"
                                    }}
                                    color={(hoverStar || currentStar) > index ? colors.orange : colors.grey}
                                    onClick={() => handleClickStar(index + 1)}
                                    onMouseOver={() => handleMouseOverStar(index + 1)}
                                    onMouseLeave={() => handleMouseLeaveStar}
        
                                />

                            )
                        })}
                        </div>
                        
                        <textarea 
                            placeholder="Dejanos tu comentario" 
                            style={styles.textarea} 
                            name="textReview"
                            value={review.textReview}
                            onChange={(e) => handleOnChange(e)}
                        ></textarea>
                        
                        <button 
                            styles={styles.button} 
                            onClick={sendReview}
                        >
                        Grabar
                        </button>                 
                    </div>

                    
                </div>
            </div>
        </div>
    )
};

const styles = {
    container : {
        display: "flex",
        flexDirection: "column",
        alignItems:"center" 
    },
    textarea:{
        border: "1px solid #a9a9a9",
        borderRadius:5,
        width: 300,
        margin: "20px 0",
        minHeight: 100, 
        padding:10
    },
    button:{
        border: "1px solid #a9a9a9",
        borderRadius:5,
        width: 300,
        padding:10
    }
}
export default DetailVivero

