import React from 'react'

const ContainerFormPlanta = () => {
    return (
        <div className='containerPlanta'>
            <form className='text-center'>
                <div className="mb-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '800px', justifyContent: 'space-around' }}>
                    <div>
                        <label for="exampleInputEmail1" className="form-label">Ingrese el nombre de la planta</label>
                        <input type="email" className="form-control anchoInput" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div>
                        <label for="exampleInputPassword1" className="form-label">Ingrese una descripcion</label>
                        <input type="password" className="form-control anchoInput" id="exampleInputPassword1" />
                    </div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Luminosidad</label>
                    <input type="password" className="form-control anchoInput" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Riego</label>
                    <input type="password" className="form-control anchoInput" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Tamaño</label>
                    <input type="password" className="form-control anchoInput" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Toxicidad</label>
                    <input type="password" className="form-control anchoInput" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Elige una especie de planta</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-success btn-sm witdhBtn">Submit</button>
            </form>
        </div>
    )
}

export default ContainerFormPlanta;
