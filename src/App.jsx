import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './app.css';
import NavBar from "./componentes/navbar/navBar";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Perfil from "./pages/perfil/Perfil";
import Postagens from "./pages/perfil/componentes/Postagens";
import { useEffect , useContext } from "react";
import { TokenContext } from "./context/TokenContext";

function App() {
  const [token, setToken] = useContext(TokenContext);
  
  useEffect(() => { // Pegando o token do usuraio do localStorage
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
        <Route path="/perfil/*" element={<Perfil/>}>
          <Route path="postagem" element={<Postagens/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
