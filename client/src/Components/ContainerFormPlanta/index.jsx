import React, { useState, useEffect, useRef } from "react";
import "./ContainerFormPlanta.css";
import { crearPlanta } from "../../redux/actions";
import { Obligatorio } from "../Obligatorio";
import { useDispatch, useSelector } from "react-redux";
import { getTiposHuerta } from "../../redux/actions";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../UploadWidget";
import imgDefault from "../../img/default.jpg";

const ContainerFormPlanta = () => {
  const navigate = useNavigate();
  const tipos = useSelector((state) => state.tiposHuerta);
  const url = useSelector((state) => state.url);
  const dispatch = useDispatch();
  console.log("aca", typeof url);
  const [ocultar, setOcultar] = useState({
    namePlant: false,
    descripPlant: false,
    localizacion: false,
    luz: false,
    riego: false,
    dimension: false,
    tipo: false,
    clima: false,
  });
  const [planta, setPlanta] = useState({
    namePlant: "",
    descripPlant: "",
    localizacion: [],
    luz: [],
    riego: [],
    dimension: [],
    tipo: [],
    clima: [],
    toxicidad: false,
    imagePlant: "",
  });

  const changeValue = (e) => {
    if (
      e.target.name === "namePlant" ||
      e.target.name === "descripPlant" ||
      e.target.name === "toxicidad" ||
      e.target.name === "imagePlant"
    ) {
      if (e.target.value === "Toxicidad") e.target.value = "";
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
    e.preventDefault();
    if (
      planta.namePlant.length &&
      planta.localizacion.length &&
      planta.luz.length &&
      planta.riego.length &&
      planta.dimension.length &&
      planta.tipo.length &&
      planta.clima.length
    ) {
      dispatch(crearPlanta(planta));
      navigate("/huerta");
    }
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
      imagePlant: "",
    });
  };
  useEffect(() => {
    if (!tipos) dispatch(getTiposHuerta());
    setPlanta({
      ...planta,
      imagePlant: url,
    });
  }, [url]);

  return (
    <div className="containerPlanta">
      <div className="containerUpload">
        <div
          className="hiddenBtn"
          hidden={planta.imagePlant.length ? true : false}
        ></div>
        <button
          className="btnBorrar"
          hidden={planta.imagePlant.length ? false : true}
          onClick={deleteImg}
        >
          X
        </button>
        <img
          src={planta.imagePlant?.length ? planta.imagePlant : imgDefault}
          className="imgSubir"
          alt="img"
        />
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
                tipo="text"
                className="form-control anchoInput"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="namePlant"
                value={planta.namePlant}
                onChange={changeValue}
              />
            </div>
            <div hidden={ocultar.namePlant}>
              <Obligatorio ocultar={planta.localizacion?.length} />
            </div>
          </div>
        </div>
        <div className="mb-3 containerFlex">
          <div class="input-group mb-3 directionColumna">
            <div>
              <div className="anchoDeInput">
                <div class="input-group-prepend">
                  <label
                    class="input-group-text degrade"
                    for="inputGroupSelect01"
                  >
                    Ubicación
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  value={planta.localizacion}
                  onChange={changeValue}
                  name="localizacion"
                  style={{ cursor: "pointer" }}
                >
                  <option selected>Ubicación</option>
                  {tipos.localizacion?.map((ele) => {
                    return <option value={ele}>{ele}</option>;
                  })}
                </select>
              </div>
              <div>
                {!ocultar.localizacion ? (
                  <Obligatorio
                    ocultar={planta.localizacion?.length}
                    tipo={"2"}
                  />
                ) : (
                  <div className="containerSelec">
                    {planta.localizacion.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            tipo="button"
                            className="btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="localizacion"
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
                  <label
                    class="input-group-text degrade"
                    for="inputGroupSelect01"
                  >
                    Luminosidad
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  name="luz"
                  value={planta.luz}
                  onChange={changeValue}
                  style={{ cursor: "pointer" }}
                >
                  <option selected>Luminosidad</option>
                  {tipos.luz?.map((ele) => {
                    return <option value={ele}>{ele}</option>;
                  })}
                </select>
              </div>
              <div>
                {!ocultar.luz ? (
                  <Obligatorio ocultar={planta.luz?.length} tipo={"3"} />
                ) : (
                  <div className="containerSelec">
                    {planta.luz.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            tipo="button"
                            className=" btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="luz"
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
                  <label
                    class="input-group-text degrade"
                    for="inputGroupSelect01"
                  >
                    Riego
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  name="riego"
                  value={planta.riego}
                  onChange={changeValue}
                  style={{ cursor: "pointer" }}
                >
                  <option selected>Riego</option>
                  {tipos.riego?.map((ele) => {
                    return <option value={ele}>{ele}</option>;
                  })}
                </select>
              </div>
              <div>
                <div>
                  {!ocultar.riego ? (
                    <Obligatorio ocultar={planta.riego?.length} tipo={"4"} />
                  ) : (
                    <div className="containerSelec">
                      {planta.riego?.map((elem) => {
                        return (
                          <div className="containerElem">
                            <h6>{elem}</h6>
                            <button
                              tipo="button"
                              className=" btnElem"
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
                  <label
                    class="input-group-text degrade"
                    for="inputGroupSelect01"
                  >
                    Tamaño
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  name="dimension"
                  value={planta.dimension}
                  onChange={changeValue}
                  style={{ cursor: "pointer" }}
                >
                  <option selected>Tamaño</option>
                  {tipos.dimension?.map((ele) => {
                    return <option value={ele}>{ele}</option>;
                  })}
                </select>
              </div>
              <div>
                {!ocultar.dimension ? (
                  <Obligatorio ocultar={planta.dimension?.length} tipo={"5"} />
                ) : (
                  <div className="containerSelec">
                    {planta.dimension?.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            tipo="button"
                            className=" btnElem"
                            onClick={(e) => eliminar(e)}
                            value={elem}
                            name="dimension"
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
                  <label
                    class="input-group-text degrade"
                    for="inputGroupSelect01"
                  >
                    Tipo
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  onChange={changeValue}
                  value={planta.tipo}
                  name="tipo"
                  style={{ cursor: "pointer" }}
                >
                  <option selected>Tipo</option>
                  {tipos.tipo?.map((ele) => {
                    return <option value={ele}>{ele}</option>;
                  })}
                </select>
              </div>
              <div>
                {!ocultar.tipo ? (
                  <Obligatorio ocultar={planta.tipo?.length} tipo={"6"} />
                ) : (
                  <div className="containerSelec">
                    {planta.tipo?.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6>{elem}</h6>
                          <button
                            tipo="button"
                            className=" btnElem"
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
                  <label
                    class="input-group-text degrade"
                    for="inputGroupSelect01"
                  >
                    Clima
                  </label>
                </div>
                <select
                  class="custom-select"
                  id="inputGroupSelect01"
                  value={planta.clima}
                  onChange={changeValue}
                  name="clima"
                  style={{ cursor: "pointer" }}
                >
                  <option selected>Preferencia climatica</option>
                  {tipos.clima?.map((ele) => {
                    return <option value={ele}>{ele}</option>;
                  })}
                </select>
              </div>
              <div>
                {!ocultar.clima ? (
                  <Obligatorio ocultar={planta.clima?.length} tipo={"7"} />
                ) : (
                  <div className="containerSelec">
                    {planta.clima?.map((elem) => {
                      return (
                        <div className="containerElem">
                          <h6 style={{ margin: "0" }}>{elem}</h6>
                          <button
                            tipo="button"
                            className=" btnElem"
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
              <label class="input-group-text degrade" for="inputGroupSelect01">
                Toxicidad
              </label>
            </div>
            <select
              class="custom-select"
              id="inputGroupSelect01"
              name="toxicidad"
              onChange={changeValue}
              value={planta.toxicidad}
              style={{ cursor: "pointer" }}
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
              tipo="text"
              className="form-control anchoInput"
              id="exampleInputPassword1"
              name="descripPlant"
              value={planta.descripPlant}
              onChange={changeValue}
            />
          </div>
        </div>
        <button
          tipo="submit"
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
