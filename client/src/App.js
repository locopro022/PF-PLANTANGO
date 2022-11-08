import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Chat from "./Components/Chat";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material";
import Footer from "./Components/Footer";
import CreacionDePlanta from './Components/CreacionDePlanta'

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: "#000",
      },
    },
  });
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
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
