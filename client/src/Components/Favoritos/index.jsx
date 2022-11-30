import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFav } from "../../redux/actions";
import CartasFavoritos from "./Cartas";
import "./Favoritos.css";
import SinFav from '../../img/SinFav.svg'

function Favoritos() {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const userDB = useSelector((e) => e.user);
  const favs = useSelector((e) => e.favoritos);

  let result = <img src={SinFav} />;
  useEffect(() => {
    if (userDB) {
      dispatch(getFav(userDB.idUser));
    }
  }, [userDB, favs]);
  if (favs.length) {
    result = favs.map((e) => <CartasFavoritos items={e} />);
  }

  return (
    <div className="contGeneralFavoritosIndex">
      {isAuthenticated ? <>{result}</> : <img src={SinFav} />}
    </div>
  );
}

export default Favoritos;
