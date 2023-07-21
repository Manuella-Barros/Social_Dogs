import './navBar.css'
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../../context/TokenContext";

function NavBar(){
    const [token, setToken] = useContext(TokenContext);

    return(
        <nav>
            <Link to={''}><img src="./imagens/icone.png"></img></Link>
            {
                token == '' 
                ? <Link to={'/login'}>Login/Criar</Link>
                : <Link to={'/perfil'}>Perfil <img className="img_login" src="./imagens/perfil_usuario.png"></img></Link>
            }
            
        </nav>
    );
}

export default NavBar;