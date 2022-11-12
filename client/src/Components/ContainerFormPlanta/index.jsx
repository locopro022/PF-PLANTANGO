import React, { useState, useEffect, useRef } from "react";
import "./ContainerFormPlanta.css";
import { crearPlanta } from "../../redux/actions";
import { Obligatorio } from "../Obligatorio";
import { useDispatch, useSelector } from "react-redux";
import { getTiposHuerta } from '../../redux/actions'
import { useNavigate } from 'react-router-dom'
import UploadWidget from "../UploadWidget";
import imgDefault from '../../img/default.jpg'
import axios from "axios";

const ContainerFormPlanta = () => {
  const navigate = useNavigate()
  const tipos = useSelector(state => state.tiposHuerta)
  const url = useSelector(state => state.url)
  const dispatch = useDispatch();
  console.log("aca", typeof url)
  const [ocultar, setOcultar] = useState({
    namePlant: false,
    descripPlant: false,
    ubication: false,
    ligth: false,
    whater: false,
    size: false,
    type: false,
    climate: false,
  });
  const [planta, setPlanta] = useState({
    namePlant: "",
    descripPlant: "",
    ubication: [],
    ligth: [],
    whater: [],
    size: [],
    type: [],
    climate: [],
    toxicity: "",
    imagePlant: "",
  });

  console.log(planta)

  const uploadImage = async (e) => {
    /*     let dataform = new FormData();
        dataform.append("file", files[0]);
        dataform.append("upload_preset", "imagen");
        const res = await axios.post("https://api.cloudinary.com/v1_1/doycjj3gx/upload", dataform)
        console.log("res", res) */
  }

  const changeValue = (e) => {
    if (
      e.target.name === "namePlant" ||
      e.target.name === "descripPlant" ||
      e.target.name === "toxicity" ||
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

  const sendPlant = (e) => {
    e.preventDefault()
    if (
      planta.namePlant.length &&
      planta.ubication.length &&
      planta.ligth.length &&
      planta.whater.length &&
      planta.size.length &&
      planta.type.length &&
      planta.climate.length
    ) {
      dispatch(crearPlanta(planta));
      navigate('/huerta')
    }
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

  const deleteImg = () => {
    setPlanta({
      ...planta,
      imagePlant: ''
    })
  }

  useEffect(() => {
    !tipos?.length && dispatch(getTiposHuerta())
    setPlanta({
      ...planta,
      imagePlant: url
    })
  }, [url])

  return (
    <div className="containerPlanta">
      <div className="containerUpload">
        <div className="hiddenBtn" hidden={planta.imagePlant.length ? true : false}></div>
        <button className="btnBorrar" hidden={planta.imagePlant.length ? false : true} onClick={deleteImg}>X</button>
        <img src={planta.imagePlant?.length ? planta.imagePlant : imgDefault} className='imgSubir' alt='img' />
        <div>
          <UploadWidget />
        </div>
      </div>
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
              <Obligatorio ocultar={planta.ubication?.length} />
            </div>
          </div>
        </div>
        <div className="mb-3 containerFlex">
          <div class="input-group mb-3 directionColumna">
            <div>
              <div className="anchoDeInput">
                <div class="input-group-prepend">
                  <label class="input-group-text degrade" for="inputGroupSelect01">
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
                  {
                    tipos.ubication?.map(ele => {
                      return (
                        <option value={ele}>{ele}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div>
                {!ocultar.ubication ? (
                  <Obligatorio ocultar={planta.ubication?.length} tipo={"2"} />
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
                  <label class="input-group-text degrade" for="inputGroupSelect01">
                    Luminosidad
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  name="ligth"
                  value={planta.ligth}
                  onChange={changeValue}
                >
                  <option selected>Luminosidad</option>
                  {
                    tipos.ligth?.map(ele => {
                      return (
                        <option value={ele}>{ele}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div>
                {!ocultar.ligth ? (
                  <Obligatorio ocultar={planta.ligth?.length} tipo={"3"} />
                ) : (
                  <div className="containerSelec">
                    {planta.ligth.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            type="button"
                            className="btn-success btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="ligth"
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
                  <label class="input-group-text degrade" for="inputGroupSelect01">
                    Riego
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  name="whater"
                  value={planta.whater}
                  onChange={changeValue}
                >
                  <option selected>Riego</option>
                  {
                    tipos.whater?.map(ele => {
                      return (
                        <option value={ele}>{ele}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div>
                <div>
                  {!ocultar.whater ? (
                    <Obligatorio ocultar={planta.whater?.length} tipo={"4"} />
                  ) : (
                    <div className="containerSelec">
                      {planta.whater?.map((elem) => {
                        return (
                          <div className="containerElem">
                            <h6>{elem}</h6>
                            <button
                              type="button"
                              className="btn-success btnElem"
                              onClick={(e) => eliminar(e)}
                              value={elem}
                              name="whater"
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
                  <label class="input-group-text degrade" for="inputGroupSelect01">
                    Tamaño
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  name="size"
                  value={planta.size}
                  onChange={changeValue}
                >
                  <option selected>Tamaño</option>
                  {
                    tipos.size?.map(ele => {
                      return (
                        <option value={ele}>{ele}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div>
                {!ocultar.size ? (
                  <Obligatorio ocultar={planta.size?.length} tipo={"5"} />
                ) : (
                  <div className="containerSelec">
                    {planta.size?.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            type="button"
                            className="btn-success btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="size"
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
                  <label class="input-group-text degrade" for="inputGroupSelect01">
                    Tipo
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  onChange={changeValue}
                  value={planta.type}
                  name="type"
                >
                  <option selected>Tipo</option>
                  {
                    tipos.type?.map(ele => {
                      return (
                        <option value={ele}>{ele}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div>
                {!ocultar.type ? (
                  <Obligatorio ocultar={planta.type?.length} tipo={"6"} />
                ) : (
                  <div className="containerSelec">
                    {planta.type?.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            type="button"
                            className="btn-success btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="type"
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
                  <label class="input-group-text degrade" for="inputGroupSelect01">
                    Clima
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  value={planta.climate}
                  onChange={changeValue}
                  name="climate"
                >
                  <option selected>Preferencia climatica</option>
                  {
                    tipos.climate?.map(ele => {
                      return (
                        <option value={ele}>{ele}</option>
                      )
                    })
                  }
                </select>
              </div>
              <div>
                {!ocultar.climate ? (
                  <Obligatorio ocultar={planta.climate?.length} tipo={"7"} />
                ) : (
                  <div className="containerSelec">
                    {planta.climate?.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6 style={{ margin: "0" }}>{elem}</h6>
                          <button
                            type="button"
                            className="btn-success btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="climate"
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
              <label class="input-group-text degrade" for="inputGroupSelect01">
                Toxicidad
              </label>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect01"
              name="toxicity"
              onChange={changeValue}
              value={planta.toxicity}
            >
              <option selected>Toxicidad</option>
              <option value="True">True</option>
              <option value="False">False</option>
            </select>
          </div>
          <div className="directionColumna2">
            <label for="exampleInputPassword1" className="form-label ">
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
        <button
          type="submit"
          onClick={sendPlant}
          className="btn btn-sm widthBtn buttonCrear"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Crear
        </button>
      </form>
    </div>
  );
};
export default ContainerFormPlanta;