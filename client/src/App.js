import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Chat from './Components/Chat'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import { createTheme, ThemeProvider } from '@material-ui/core'

function App() {
  const theme = createTheme({
    palette: {
      secondary: {
        main: '#000'
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bienvenida' element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
