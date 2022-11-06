import React from 'react'
import './Modal.css'
import { useSelector, useDispatch } from 'react-redux'

const Carrito = () => {

    const dispatch = useDispatch()
    const arrayCarrito = useSelector(state => state.arrayCarrito) // array para mapear y mostrar en el carrito

    const pararProp = (e) => { // funcion para para la propagación para el cerrado del carrito al tocar en partes del carrito.
        e.stopPropagation()
    }

    return (
        <div onClick={pararProp} class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">Carrito de compras</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body containerTextModal"> {/*Adentro de este div va el mapeo del array del redux. */}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit enim delectus sequi vel quos, optio eveniet suscipit laboriosam ipsa nesciunt iusto quaerat nobis minima ipsam quae quam facere ullam?
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat ullam cupiditate quidem animi, quae praesentium quibusdam amet, rem qui veritatis, est reprehenderit nesciunt voluptate maxime illum tempore ratione ut hic!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate. Esse officia, cumque blanditiis vitae voluptatibus excepturi exercitationem voluptate minima unde odio debitis consequuntur quae, quisquam maxime, rem atque ab.
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-danger" >Vaciar carrito</button>
                        <button type="button" class="btn btn-success">Hacer compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrito;
