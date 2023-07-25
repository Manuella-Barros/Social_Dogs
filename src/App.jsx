import './app.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useEffect , useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import NavBar from "./componentes/navbar/navBar";
import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Perfil from "./pages/perfil/Perfil";
import Postagens from "./pages/perfil/componentes/Postagens";
import Conta from "./pages/perfil/componentes/Conta";
import ProtectedRouter from "./protected_router/ProtectedRouter";
import Cadastrar from './pages/login/componentes/Cadastrar';
import Logar from './pages/login/componentes/Logar';

function App() {
  const [isLogged, setIsLogged, login, setLogin, erro, setErro, validaInput, loginUser] = useContext(GlobalContext);
  
  useEffect(() => { // Verifica se o usuario ta logado
    if(localStorage.getItem('tokenUsuario') != null){
      loginUser();
      setIsLogged(true); // Se tem token, ta logado
    } else{
      setIsLogged(false); // Se não tem token, não ta logado
    }
  }, [])
  
  return (
    <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="/login/*" element={<Login/>}>
          <Route path='' element={<Logar/>}/>
          <Route path='cadastro' element={<Cadastrar/>}/>
        </Route>
        <Route path="/perfil/*" element={ <ProtectedRouter> <Perfil/> </ProtectedRouter> }>
          <Route path="" element={<Conta/>}/>
          <Route path="postagem" element={<Postagens/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
