import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./Components/Footer";
import CreacionDePlanta from "./Components/CreacionDePlanta";
import Huerta from "./Components/Huerta";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getHuerta,
  getHuertaDetail,
  getTiposHuerta,
  getUser,
} from "./redux/actions";
import Detalle from "./Components/Detalle";
import Breadcrumbs from "./Components/Breadcrumbs";
import Profile from "./Components/Profile";
import Ajustes from "./Components/Ajustes";
import Favoritos from "./Components/Favoritos";
import { useAuth0 } from "@auth0/auth0-react";
import UsuariosInfo from "./Components/UsuariosInfo/UsuarioInfo";
import PagoStripe from "./Components/PasarelaPago/Stripe";

function App() {
  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      secondary: {
        main: "#000",
      },
    },
  });
  const { user } = useAuth0();

  useEffect(() => {
    dispatch(getHuerta());
    dispatch(getTiposHuerta());
    if (user) {
      dispatch(getUser(user.email));
    }
  }, [user]);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Breadcrumbs exclude={["home"]} start={"home"} />
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/home" element={<Home />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/bienvenida" element={<Chat />} />
            <Route path="/creacionPlanta" element={<CreacionDePlanta />} />
            <Route path="/huerta" element={<Huerta />} />
            <Route
              path="/huerta/:id"
              element={<Detalle from={getHuertaDetail} />}
            />
            <Route path="/ajustes" element={<Ajustes />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/ajustes/administrar" element={<UsuariosInfo/>}/>
            <Route path="/pago" element={<PagoStripe/>}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
