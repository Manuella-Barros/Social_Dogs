import './navBar.css'
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalContext";

function NavBar(){
    const [isLogged, setIsLogged, login] = useContext (GlobalContext);
    
    return(
        <nav>
            <Link to={''}><img src="./imagens/icone.png"></img></Link>
            {
                isLogged == false 
                ? <Link to={'/login'}>Login/Criar</Link>
                : <Link to={'/perfil'}>{localStorage.getItem('username')} <img className="img_login" src="./imagens/perfil_usuario.png"></img></Link>
            }
            
        </nav>
    );
}

export default NavBar;