import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./componentes/navbar/navBar";
import './app.css';
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import { useEffect } from "react";
import { useContext } from "react";
import { TokenContext } from "./context/TokenContext";

function App() {
  const [token, setToken] = useContext(TokenContext);
  
  useEffect(() => {
    if(localStorage.getItem('tokenUsuario') != null){
        setToken(localStorage.getItem('tokenUsuario')); // add o token na var global
    }
}, [])

  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
