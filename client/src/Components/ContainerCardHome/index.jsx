import React, { useEffect } from 'react'
import './ContainerCardHome.css'
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { traerProductos } from "../../redux/actions";

const ContainerCardHome = (props) => {
    const navigate = useNavigate()
    const { produc } = props
    const dispatch = useDispatch()
    const arrayVivero = useSelector(state => state.arrayVivero)
    useEffect(() => {
        dispatch(traerProductos())
    }, [])
    console.log("PRODUCTOOOO", produc)
    return (
        <>
            {
                arrayVivero?.results?.slice(0, 6).map(produc => {
                    return (
                        <div className="card text-center estilos mediaCard">
                            <div className="card-body" style={{ cursor: 'pointer' }}>
                                <img className='card-img-top tamanoImg' src={produc.imageProd} />
                                <h6 className="card-title" style={{ marginTop: '10px' }}>{produc.nameProd}</h6>
                                <a className="btn btnn" onClick={() => navigate('/vivero')} >Visitar vivero</a>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ContainerCardHome;
