import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../../context/GlobalContext';

function NavPerfil() {
    const [isLogged, setIsLogged] = useContext(GlobalContext);
    
    function deslogar(){
        setIsLogged(false); 
        localStorage.removeItem('tokenUsuario')
        localStorage.removeItem('username')
    }
    
    return (
        <section id='nav_perfil'>
            <article>
                <Link className='icon_conta' to={'/perfil'}><img src='./imagens/perfil.png'/></Link>
                <Link to={'postagem'}><img src='./imagens/postagem_perfil.png'/></Link>
                <Link onClick={deslogar}><img src='./imagens/sair_perfil.png'/></Link>
            </article>
        </section>
    );
}

export default NavPerfil;