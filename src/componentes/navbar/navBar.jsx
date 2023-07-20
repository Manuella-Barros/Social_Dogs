import React, { useContext } from "react";
import { Link } from "react-router-dom";
import './navBar.css'
import { TokenContext } from "../../context/TokenContext";

function NavBar(){
    const [token, setToken] = useContext(TokenContext);

    return(
        <nav>
            <Link to={''}><img src="./imagens/icone.png"></img></Link>
            {console.log(token)}
            {
                token == '' ? <Link to={'/login'}>Login/Criar</Link>
                : <Link>Logado</Link>
            }
            
        </nav>
    );
}

export default NavBar;