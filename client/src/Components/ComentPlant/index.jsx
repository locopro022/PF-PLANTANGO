import React, { useEffect } from "react";
import { huertaComments } from "../../redux/actions";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import "./index.css";

function Coment(props) {
  const [editing, setEditing] = useState(false);
  const [input, setInput] = useState({ title: props.title, cont: props.cont });

  const user = useSelector((state) => state.user?.idUser);
  const isFromUser = props.user === user;

  function onChange(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const edit = () => {
    setInput({ title: props.title, cont: props.cont });
    setEditing(true);
  };

  const discard = () => setEditing(false);

  const deleteComment = () => {
    props.delete(props.codComent);
  };

  const save = (e) => {
    e.preventDefault();
    input.title.length === 0 && input.cont.length === 0
      ? deleteComment()
      : props.put({ codComent: props.codComent, ...input });
    setEditing(false);
  };

  return (
    <div className="card p-1 coment_wrapper">
      {editing ? (
        <div>
          <form onSubmit={save}>
            <h3>
              <strong>
                <input
                  type="text"
                  name="title"
                  onChange={onChange}
                  value={input.title}
                />
              </strong>
            </h3>
            <h5>
              <textarea
                type="text"
                name="cont"
                className="coment_cont"
                onChange={onChange}
                value={input.cont}
              />
            </h5>
            <div className="coment_button">
              <input
                className="btn btn-success mr-1"
                type="submit"
                value="Guardar"
              />
              <button className="btn btn-warning" onClick={discard}>
                Descartar
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <h3>
            <strong>{props.title}</strong>
          </h3>
          <h5>{props.cont}</h5>
          {isFromUser && (
            <div className="coment_button">
              <button className="btn btn-success mr-1" onClick={edit}>
                Editar
              </button>
              <button className="btn btn-danger" onClick={deleteComment}>
                Borrar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ComentPlant(props) {
  const { id } = useParams();
  const { loginWithPopup } = useAuth0();
  const user = useSelector((state) => state.user.idUser);
  const [input, setInput] = useState({ title: "", cont: "" });
  const [coments, setComents] = useState([]);

  const getComments = () => {
    huertaComments({ method: "get", url: id }).then((data) => {
      setComents(data);
    });
  };
  const postComment = () => {
    huertaComments({
      method: "post",
      data: { user, idP: id, ...input },
    }).then((data) => {
      setComents(data);
    });
  };

  const putComment = (data) => {
    huertaComments({
      method: "put",
      data: { ...data, idC: id },
    }).then(getComments);
  };
  const deleteComment = (codComent) => {
    huertaComments({
      method: "delete",
      url: codComent,
    }).then(getComments);
  };

  useEffect(() => {
    getComments();
  }, []);
  function onChange(e) {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setInput((state) => ({ ...state, title: "", cont: "" }));
    postComment();
  }
  return (
    <div className="card container-fluid">
      {user ? (
        <>
          <h2>Deja tu comentario</h2>
          <form className="card p-2 coment_wrapper" onSubmit={onSubmit}>
            <h3>
              <input
                type="text"
                value={input.title}
                name="title"
                onChange={onChange}
                required
              />
            </h3>
            <h5>
              <textarea
                type=""
                value={input.cont}
                name="cont"
                onChange={onChange}
                className="coment_cont "
                required
              />
            </h5>
            <input
              type="submit"
              value="comentar"
              className="coment_button btn btn-success"
            />
          </form>
        </>
      ) : (
        <div className="text-center">
          <p>Tenes que estar logeado para comentar.</p>
          <button className="btn btn-success" onClick={loginWithPopup}>
            LogIn{" "}
          </button>
        </div>
      )}
      {coments.map((coment, index) => (
        <Coment
          {...coment}
          put={putComment}
          delete={deleteComment}
          key={index}
        />
      ))}
    </div>
  );
}

export default ComentPlant;
