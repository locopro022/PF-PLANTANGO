import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './chat.css'
import groot from '../../img/plantago.png'
import carrito from '../../img/carrito-de-compras.png'
import lavanda from '../../img/lavanda.png'
import { useAuth0 } from "@auth0/auth0-react";

const Chat = () => {
    const navigate = useNavigate()
    const { loginWithRedirect } = useAuth0();

    const [pregunta, setPregunta] = useState({
        primer: false,
        segundo: false,
        tercero: false
    });
    const [elegido, setElegido] = useState({
        segundo: false,
        tercero: false
    })

    const primeraEjecucion = () => {
        setTimeout(() => {
            setPregunta({
                ...pregunta,
                primer: true
            })
        }, 1500)
    }

    const opcionElegida = (e) => {
        setElegido({
            ...elegido,
            [e.target.name]: true
        })
        setTimeout(() => {
            setPregunta({
                ...pregunta,
                [e.target.name]: true
            })
        }, 1500)
    }

    const final = () => {
        const destino = document.getElementById('ultimo')
        destino.scrollIntoView({
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        primeraEjecucion()
    }, [])

    return (
        <div className='containerChat'>
            <h1 className='tituloChat'>La mejor información de plantas en toda la Argentina</h1>
            <div className='containerPreguntas'>
                {
                    pregunta.primer
                        ?
                        <div className='containerOpcion'>
                            <div className='containerGrootH'>
                                <div className='containerText'>
                                    <img src={groot} alt='groot' className='imgGroot' />
                                    <h6>¡Bienvenido a plantango!, te interesaria responder algunas preguntas?</h6>
                                </div>
                            </div>
                            <div className='containerButtons'>
                                <div className='cardButton'>
                                    <button
                                        onClick={opcionElegida}
                                        name='segundo'
                                        value='color1'
                                        type='button'
                                        className='button-tam'
                                    >Si</button>
                                    <button
                                        onClick={() => navigate("/home")}
                                        type='button'
                                        className='button-tam'
                                    >No</button>
                                </div>
                                <div className='ocultarOpciones' hidden={elegido.segundo ? false : true}>
                                </div>
                            </div>
                        </div>
                        :
                        <div className='containerPuntitos'>
                            <img src={groot} alt='groot' className='imgGrootPuntitos' />
                            <div className='containerh3'>
                                <h3 className='h3Puntitos'>...</h3>
                            </div>
                        </div>
                }
                {
                    elegido.segundo
                        ?
                        pregunta.segundo
                            ?
                            <div className='containerOpcion'>
                                <div className='containerGrootH'>
                                    <div className='containerText'>
                                        <img src={groot} alt='groot' className='imgGroot' />
                                        <h6>Quieres registrate en nuestra pagina?</h6>
                                    </div>
                                </div>
                                <div className='containerButtons'>
                                    <div className='cardButton'>
                                        <button
                                            onClick={() => loginWithRedirect()}
                                            name='tercero'
                                            value='color1'
                                            type='button'
                                            className='button-tam'
                                        >Si</button>
                                        <button
                                            onClick={opcionElegida}
                                            name='tercero'
                                            value='color3'
                                            type='button'
                                            className='button-tam'
                                        >No</button>
                                    </div>
                                    <div className='ocultarOpciones' hidden={elegido.tercero ? false : true}>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='containerPuntitos'>
                                <img src={groot} alt='groot' className='imgGrootPuntitos' />
                                <div className='containerh3'>
                                    <h3 className='h3Puntitos'>...</h3>
                                </div>
                            </div>
                        :
                        null
                }
                {
                    elegido.tercero
                        ?
                        pregunta.tercero
                            ?
                            <div className='containerOpcion'>
                                <div className='containerGrootH'>
                                    <div className='containerText'>
                                        <img src={groot} alt='groot' className='imgGroot' />
                                        <h6>Que apartado te gustaria visitar primero?</h6>
                                    </div>
                                </div>
                                <div className='containerButtons'>
                                    <div className='cardButton'>
                                        <button
                                            onClick={() => navigate('/vivero')}
                                            name='tercero'
                                            value='color1'
                                            type='button'
                                            className='button-tam'
                                        >Vivero
                                            <img src={carrito} alt='carrito' className='carritoLa' />
                                        </button>
                                        <button
                                            onClick={() => navigate('/huerta')}
                                            name='tercero'
                                            value='color2'
                                            type='button'
                                            className='button-tam'
                                        >Huerta
                                            <img src={lavanda} alt='lavanda' className='carritoLa' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='containerPuntitos'>
                                <img src={groot} alt='groot' className='imgGrootPuntitos' />
                                <div className='containerh3'>
                                    <h3 className='h3Puntitos'>...</h3>
                                </div>
                            </div>
                        :
                        null
                }
                <div id='ultimo' ref={final}></div>
            </div>
        </div>
    )
}

export default Chat;
