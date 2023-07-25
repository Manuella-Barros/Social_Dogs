import React, { useEffect, useRef } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";

function Logar() {
    const [isLogged, setIsLogged, login, setLogin, erro, setErro, validaInput, loginUser] = useContext(GlobalContext) // Variavel global

    return (
        <>
            {/* container do login  */}
            <article className="fading">
                <section>
                    <h1>Logar</h1>

                    {/* form para fazer o login */}
                    <div>
                        <p>Nome</p>
                        <input onBlur={validaInput} data-nome={'username'} type="text" placeholder="Insira seu nome" id="inputNome" className="input"/>
                        {erro.username && <p className="erro_login">Minimo 3 digitos</p>}

                        <p>Senha</p>
                        <input onBlur={validaInput} type="password" data-nome={'userpassword'} placeholder="Insira sua senha" id="inputSenha" className="input"/>   
                        {erro.userpassword && <p className="erro_login">Minimo 3 digitos</p>}
                    </div>
                    <div>
                        <button onClick={loginUser} className="botao">Entrar</button>
                        {isLogged && <Navigate to={'/perfil'}/>}
                        {/* {erro.username && erro.userpassword && <p className="erro_login">Usuario não encontrado</p>} */}
                    </div>
                
                    <Link>Perdeu sua senha?</Link>
                </section>

                <section>
                    <h2>Cadastrar</h2>
                    <p>Ainda não é cadastrado?</p>
                    <Link to={'cadastro'} className="botao">Cadastrar agora!</Link>                         
                </section>
            </article>
        </>
    );
}

export default Logar;