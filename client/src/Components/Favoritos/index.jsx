import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFav } from "../../redux/actions";

function Favoritos() {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const userDB = useSelector((e) => e.user);
  const favs = useSelector((e) => e.favoritos);

  let result = "cargando";
  useEffect(() => {
    if (userDB && !favs.length) {
      dispatch(getFav(userDB.id));
    }
  }, [userDB, favs, dispatch]);
  if (favs.length) {
    
  } 

  return (
    <div>
      {isAuthenticated ? <h1>{result}</h1> : <h1>Debes iniciar sesion</h1>}
    </div>
  );
}

export default Favoritos;
