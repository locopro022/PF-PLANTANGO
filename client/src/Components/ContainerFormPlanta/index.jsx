import React, { useState } from "react";
import "./ContainerFormPlanta.css";
import { crearPlanta } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Obligatorio } from "../Obligatorio";

const ContainerFormPlanta = () => {
  const dispatch = useDispatch();
  const [ocultar, setOcultar] = useState({
    namePlant: false,
    descripPlant: false,
    ubication: false,
    luminosidad: false,
    riego: false,
    tamano: false,
    tipo: false,
    clima: false,
  });
  const [planta, setPlanta] = useState({
    namePlant: "",
    descripPlant: "",
    ubication: [],
    luminosidad: [],
    riego: [],
    tamano: [],
    tipo: [],
    clima: [],
    toxicidad: "",
    imagePlant: "",
  });
  const changeValue = (e) => {
    if (
      e.target.name === "namePlant" ||
      e.target.name === "descripPlant" ||
      e.target.name === "toxicidad" ||
      e.target.name === "imagePlant"
    ) {
      setPlanta({
        ...planta,
        [e.target.name]: e.target.value,
      });
      if (![...planta[e.target.name], e.target.value].at(-1).length)
        setOcultar({
          ...ocultar,
          [e.target.name]: false,
        });
      if ([...planta[e.target.name], e.target.value].at(-1).length)
        setOcultar({
          ...ocultar,
          [e.target.name]: true,
        });
    } else {
      if (!planta[e.target.name].includes(e.target.value)) {
        setPlanta({
          ...planta,
          [e.target.name]: [...planta[e.target.name], e.target.value],
        });
        if (![...planta[e.target.name], e.target.value].length)
          setOcultar({
            ...ocultar,
            [e.target.name]: false,
          });
        if ([...planta[e.target.name], e.target.value].length)
          setOcultar({
            ...ocultar,
            [e.target.name]: true,
          });
      }
    }
  };

  const sendPlant = () => {
    dispatch(crearPlanta(planta));
    /*         cloudinary.createUploadWidget({
                    cloudName: 'doycjj3gx',
                    uploadPreset: 'preset_pabs',
                }, (err, result) => {
                    if (!err && result & result.event === 'success') {
                        console.log('Imagen subida con exito', result.info)
                    }
                }) */
    /*Enviamos el coso */
    //   Imaginate usar lenguaje apropiado incluso por accidente. >:(
  };
  const eliminar = (e) => {
    e.preventDefault();
    console.log(planta[e.target.name]);
    if (
      !planta[e.target.name].filter((quedan) => quedan !== e.target.value)
        .length
    )
      setOcultar({
        ...ocultar,
        [e.target.name]: false,
      });
    setPlanta({
      ...planta,
      [e.target.name]: [...planta[e.target.name]].filter(
        (quedan) => quedan !== e.target.value
      ),
    });
  };

  return (
    <div className="containerPlanta">
      <form className="text-center">
        <div className="mb-3 containerFlex">
          <div>
            <div>
              <label for="exampleInputEmail1" className="form-label">
                Nombre
              </label>
              <input
                style={{ width: "25rem" }}
                type="text"
                className="form-control anchoInput"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="namePlant"
                value={planta.namePlant}
                onChange={changeValue}
              />
            </div>
            <div hidden={ocultar.namePlant}>
              <Obligatorio ocultar={planta.ubication.length} />
            </div>
          </div>
        </div>
        <div className="mb-3 containerFlex">
          <div class="input-group mb-3 directionColumna">
            <div>
              <div className="anchoDeInput">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Ubicación
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  value={planta.ubication}
                  onChange={changeValue}
                  name="ubication"
                >
                  <option selected>Ubicación</option>
                  <option value="Afuera">Afuera</option>
                  <option value="Adentro">Adentro</option>
                </select>
              </div>
              <div>
                {!ocultar.ubication ? (
                  <Obligatorio ocultar={planta.ubication.length} tipo={"2"} />
                ) : (
                  <div className="containerSelec">
                    {planta.ubication.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            type="button"
                            className="btn-success btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="ubication"
                          >
                            X
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="input-group mb-3 directionColumna">
            <div>
              <div className="anchoDeInput">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Luminosidad
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  name="luminosidad"
                  value={planta.luminosidad}
                  onChange={changeValue}
                >
                  <option selected>Luminosidad</option>
                  <option value="Mucha">Mucha</option>
                  <option value="Poca">Poca</option>
                </select>
              </div>
              <div>
                {!ocultar.luminosidad ? (
                  <Obligatorio ocultar={planta.luminosidad.length} tipo={"3"} />
                ) : (
                  <div className="containerSelec">
                    {planta.luminosidad.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            type="button"
                            className="btn-success btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="luminosidad"
                          >
                            X
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 containerFlex">
          <div class="input-group mb-3 directionColumna">
            <div>
              <div className="anchoDeInput">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Riego
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  name="riego"
                  value={planta.riego}
                  onChange={changeValue}
                >
                  <option selected>Riego</option>
                  <option value="Mucho">Mucho</option>
                  <option value="Poco">Poco</option>
                  <option value="Masomenos">Masomenos</option>
                </select>
              </div>
              <div>
                <div>
                  {!ocultar.riego ? (
                    <Obligatorio ocultar={planta.tamano.length} tipo={"4"} />
                  ) : (
                    <div className="containerSelec">
                      {planta.riego.map((elem) => {
                        return (
                          <div className="containerElem">
                            <h6>{elem}</h6>
                            <button
                              type="button"
                              className="btn-success btnElem"
                              onClick={(e) => eliminar(e)}
                              value={elem}
                              name="riego"
                            >
                              X
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div class="input-group mb-3 directionColumna">
            <div>
              <div className="anchoDeInput">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Tamaño
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  name="tamano"
                  value={planta.tamano}
                  onChange={changeValue}
                >
                  <option selected>Tamaño</option>
                  <option value="Chico">Chico</option>
                  <option value="Mediano">Mediano</option>
                  <option value="Grande">Grande</option>
                </select>
              </div>
              <div>
                {!ocultar.tamano ? (
                  <Obligatorio ocultar={planta.tamano.length} tipo={"5"} />
                ) : (
                  <div className="containerSelec">
                    {planta.tamano.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            type="button"
                            className="btn-success btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="tamano"
                          >
                            X
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 containerFlex">
          <div class="input-group mb-3 directionColumna">
            <div>
              <div className="anchoDeInput">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Tipo
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  onChange={changeValue}
                  value={planta.tipo}
                  name="tipo"
                >
                  <option selected>Tipo</option>
                  <option value="Arbol">Arbol</option>
                  <option value="Planta">Planta</option>
                  <option value="Berdolada">Berdolada</option>
                </select>
              </div>
              <div>
                {!ocultar.tipo ? (
                  <Obligatorio ocultar={planta.tipo.length} tipo={"6"} />
                ) : (
                  <div className="containerSelec">
                    {planta.tipo.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            type="button"
                            className="btn-success btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="tipo"
                          >
                            X
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <div class="input-group mb-3 directionColumna">
            <div>
              <div className="anchoDeInput">
                <div class="input-group-prepend">
                  <label class="input-group-text" for="inputGroupSelect01">
                    Clima
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  value={planta.clima}
                  onChange={changeValue}
                  name="clima"
                >
                  <option selected>Preferencia climatica</option>
                  <option value="Lluvia">Lluvia</option>
                  <option value="Soleado">Soleado</option>
                  <option value="Templado">Templado</option>
                </select>
              </div>
              <div>
                {!ocultar.clima ? (
                  <Obligatorio ocultar={planta.clima.length} tipo={"7"} />
                ) : (
                  <div className="containerSelec">
                    {planta.clima.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6 style={{ margin: "0" }}>{elem}</h6>
                          <button
                            type="button"
                            className="btn-success btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="clima"
                          >
                            X
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 containerFlex">
          <div class="input-group mb-3 directionColumna">
            <div class="input-group-prepend">
              <label class="input-group-text" for="inputGroupSelect01">
                Toxicidad
              </label>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect01"
              name="toxicidad"
              onChange={changeValue}
              value={planta.toxicidad}
            >
              <option selected>Toxicidad</option>
              <option value="True">True</option>
              <option value="False">False</option>
            </select>
          </div>
          <div className="directionColumna2">
            <label for="exampleInputPassword1" className="form-label">
              Descripción
            </label>
            <textarea
              type="text"
              className="form-control anchoInput"
              id="exampleInputPassword1"
              name="descripPlant"
              value={planta.descripPlant}
              onChange={changeValue}
            />
          </div>
        </div>
        <div className="mb-3 containerFlex">
          <div>
            <label for="exampleInputEmail1" className="form-label">
              Imagen en link
            </label>
            <input
              style={{ width: "25rem" }}
              type="text"
              className="form-control anchoInput"
              id="exampleInputEmail1"
              name="imagePlant"
              value={planta.imagePlant}
              onChange={changeValue}
            />
          </div>
        </div>
        {/*                 <div className="mb-3 containerFlex">
                    <div className='directionColumna2'>
                        <input
                            onChange={changeValue}
                            style={{ cursor: 'pointer' }}
                            className='form-control'
                            type='file'
                            name='imagePlant'
                            value={planta.imagePlant}
                        />
                    </div>
                    <div className='directionColumna2'>
                    </div>
                </div> */}
        <button
          type="submit"
          onClick={sendPlant}
          className="btn btn-success btn-sm widthBtn"
        >
          Crear
        </button>
      </form>
    </div>
  );
};
export default ContainerFormPlanta;
