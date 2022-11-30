import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFav } from "../../redux/actions";
import CartasFavoritos from "./Cartas";
import "./Favoritos.css";

function Favoritos() {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const userDB = useSelector((e) => e.user);
  const favs = useSelector((e) => e.favoritos);

  let result = <h1>Debes añadir plantas</h1>;
  useEffect(() => {
    if (userDB) {
      dispatch(getFav(userDB.idUser));
    }
  }, [userDB,favs]);
  if (favs.length) {
    result = favs.map((e) => <CartasFavoritos items={e} />);
  }

  return (
    <div className="contGeneralFavoritosIndex">
      {isAuthenticated ? <>{result}</> : <h1>Debes iniciar sesion</h1>}
    </div>
  );
}

export default Favoritos;
