import React, { useState } from 'react'
import './ContainerFormPlanta.css'

const ContainerFormPlanta = () => {
    const [planta, setPlanta] = useState({
        namePlant: '',
        descripPlant: '',
        ubication: [],
        luminosidad: [],
        riego: [],
        tamano: [],
        tipo: [],
        clima: [],
        toxicidad: '',
        imagePlant: ''
    })
    const changeValue = (e) => {
        if (e.target.name === 'namePlant' || e.target.name === "descripPlant" || e.target.name === "toxicidad") {
            setPlanta({
                ...planta,
                [e.target.name]: e.target.value
            })
        }
        else {
            if (!(planta[e.target.name].includes(e.target.value))) {
                setPlanta({
                    ...planta,
                    [e.target.name]: [...planta[e.target.name], e.target.value]
                })
            }
        }
    }

    console.log(planta)

    return (
        <div className='containerPlanta'>
            <form className='text-center'>
                <div className="mb-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '800px', justifyContent: 'space-around' }}>
                    <div>
                        <label for="exampleInputEmail1" className="form-label">Nombre</label>
                        <input
                            type="text"
                            className="form-control anchoInput"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            name='namePlant'
                            value={planta.namePlant}
                            onChange={changeValue}
                        />
                    </div>
                    <div>
                        <label for="exampleInputPassword1" className="form-label">Descripción</label>
                        <textarea
                            type="text"
                            className="form-control anchoInput"
                            id="exampleInputPassword1"
                            name='descripPlant'
                            value={planta.descripPlant}
                            onChange={changeValue}
                        />
                    </div>
                </div>
                <div className="mb-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '800px', justifyContent: 'space-around' }}>
                    <div className='directionColumna'>
                        <label for="exampleInputEmail1" className="form-label">Ubicación</label>
                        <select
                            value={planta.ubication}
                            onChange={changeValue}
                            className="form-select"
                            aria-label="Default select example"
                            name='ubication'
                        >
                            <option selected>Ubicación</option>
                            <option value="Afuera">Afuera</option>
                            <option value="Adentro">Adentro</option>
                        </select>
                    </div>
                    <div className='directionColumna'>
                        <label for="exampleInputPassword1" className="form-label">Luminosidad</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            name='luminosidad'
                            value={planta.luminosidad}
                            onChange={changeValue}
                        >
                            <option selected>Luminosidad</option>
                            <option value="Mucha">Mucha</option>
                            <option value="Poca">Poca</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '800px', justifyContent: 'space-around' }}>
                    <div className='directionColumna'>
                        <label for="exampleInputEmail1" className="form-label">Riego</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            name='riego'
                            value={planta.riego}
                            onChange={changeValue}
                        >
                            <option selected>Riego</option>
                            <option value="Mucho">Mucho</option>
                            <option value="Poco">Poco</option>
                            <option value="Masomenos">Masomenos</option>
                        </select>
                    </div>
                    <div className='directionColumna'>
                        <label for="exampleInputPassword1" className="form-label">Tamaño</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            name='tamano'
                            value={planta.tamano}
                            onChange={changeValue}
                        >
                            <option selected>Tamaño</option>
                            <option value="Chico">Chico</option>
                            <option value="Mediano">Mediano</option>
                            <option value="Grande">Grande</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3" style={{ display: 'flex', alignItems: 'center', width: '800px', justifyContent: 'space-around' }}>
                    <div className='directionColumna'>
                        <label for="exampleInputEmail1" className="form-label">Tipo</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={changeValue}
                            value={planta.tipo}
                            name='tipo'
                        >
                            <option selected>Tipo</option>
                            <option value="Arbol">Arbol</option>
                            <option value="Planta">Planta</option>
                            <option value="Berdolada">Berdolada</option>
                        </select>
                    </div>
                    <div className='directionColumna'>
                        <label for="exampleInputPassword1" className="form-label">Preferencia climatica</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            value={planta.clima}
                            onChange={changeValue}
                            name='clima'
                        >
                            <option selected>Preferencia climatica</option>
                            <option value="Lluvia">Lluvia</option>
                            <option value="Soleado">Soleado</option>
                            <option value="Templado">Templado</option>
                        </select>
                    </div>
                </div>
                <div className="mb-3" style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '800px', justifyContent: 'space-around' }}>
                    <div className='directionColumna'>
                        <label for="exampleInputEmail1" className="form-label">Toxicidad</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            name='toxicidad'
                            onChange={changeValue}
                            value={planta.toxicidad}
                        >
                            <option selected>Toxicidad</option>
                            <option value="True">True</option>
                            <option value="False">False</option>
                        </select>
                    </div>
                    <div className='directionColumna'>
                    </div>
                </div>
                <button type="submit" className="btn btn-success btn-sm witdhBtn">Submit</button>
            </form>
        </div>
    )
}

export default ContainerFormPlanta;
