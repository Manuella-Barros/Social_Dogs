import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TokenContext } from '../../../context/TokenContext';

function HeaderPerfil() {
    const [token, setToken] = useContext(TokenContext);
    
    return (
        <section id='header_perfil'>
            <h1>Conta do usuario</h1>

            <article>
                <Link to={'/perfil'}>Perfil</Link>
                <Link to={'postagem'}>Postagem</Link>
                <Link>Sair</Link>
            </article>
        </section>
    );
}

export default HeaderPerfil;