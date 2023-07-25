import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../context/GlobalContext';
import { Link, Navigate } from 'react-router-dom';
import postUser from '../../../api/postUser';
import postUserToken from '../../../api/postUserToken';

function Cadastrar() {
    const [isLogged, setIsLogged, login, setLogin, erro, setErro, validaInput, loginUser] = useContext(GlobalContext) // Variavel global

    async function cadastroUser(){
        if(login.username !== '' && login.userpassword !== '' && login.useremail !== ''){
            postUser(login.username, login.userpassword, login.useremail) // add o usuario na api
            .then((res) => {
                if(res == true){ // se o usuario for criado
                    postUserToken(login.username, login.userpassword) // add o token na api
                    loginUser() // loga o usuario
                }
            })
        }        
    }

    return (
        <>
            <article className="fading">
                <section>
                    <h1>Cadastrar</h1>

                    <div>
                        <p>Nome</p>
                        <input onBlur={validaInput} data-nome={'username'} type="text" placeholder="Insira seu nome" className="input"/>
                        {erro.username && <p className="erro_login">Minimo 3 digitos</p>}

                        <p>Senha</p>
                        <input onBlur={validaInput} type="password" data-nome={'userpassword'} placeholder="Insira sua senha" className="input"/>   
                        {erro.userpassword && <p className="erro_login">Minimo 3 digitos</p>}

                        <p>Email</p>
                        <input onBlur={validaInput} type="email" data-nome={'useremail'} placeholder="Insira seu email" className="input"/>   
                        {erro.useremail && <p className="erro_login">Email invalido</p>}
                    </div>
                    <div>
                        <button onClick={cadastroUser} className="botao">Entrar</button>
                        {isLogged && <Navigate to={'/perfil'}/>}
                        {/* {erro.username && <p>Usuario não encontrado</p>} */}
                    </div>
                </section>

            </article>
        </>
    );
}

export default Cadastrar;