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
import { getVivero } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#000",
      },
    },
  });
  useEffect(() => {
    dispatch(getVivero());
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/home" element={<Home />} />
            <Route path="/bienvenida" element={<Chat />} />
            <Route path="/creacionPlanta" element={<CreacionDePlanta />} />
            <Route path="/huerta" element={<Huerta />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
