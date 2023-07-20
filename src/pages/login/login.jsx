import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './login.css'
import getUserToken from "../../api/getUserToken";
import { useContext } from "react";
import { TokenContext } from "../../context/TokenContext";

function Login(){
    const [token, setToken] = useContext(TokenContext) // Variavel global    
    const [login, setLogin] = React.useState({
        username: '',
        userpassword: '',
    })
    const [erro, setErro] = React.useState(login);
    let usuario_false = useRef(); // Mensagem de erro se n existir o usuario

    // Verifica se o input é valido e seta na variável
    function check({target}){
        const dado = target.getAttribute("data-nome") // pegando o valor do atributo data-nome

        if(target.value.length < 3){ // Input < 3 retorna msg de erro
            setErro(prevValue => {return { ...prevValue, [dado]: "minimo 3 caracteres" }});
        } else{ // Se input > 3 apaga os erros seta o input na variavel
            setErro(prevValue => {return { ...prevValue, [dado]: "" }});
            setLogin( prevValue => {
                return { ...prevValue, [dado]: target.value}
            })
        }
    }
    
    // Faz request do usuario de acordo com os inputs recebidos
    // Verifica se o usuario existe, se existe pega o token e guarda no LocalStorage
    // Se não existir, adiciona mensagem de erro
    async function loginUser(){
        if(login.username !== '' & login.userpassword !== ''){
            getUserToken(login.username, login.userpassword).then(res =>{ 
                    if(res.token != undefined && localStorage.getItem('tokenUsuario') == null){
                        localStorage.setItem('tokenUsuario', res.token); // add o token no LocalStorage   
                        usuario_false.current.innerText = ''; 
                        setToken(localStorage.getItem('tokenUsuario')); // add o token na var global
                        usuario_false.current.innerText = '';          
                    } else if(localStorage.getItem('tokenUsuario') != null){
                        usuario_false.current.innerText = ''; 
                    } else{
                        usuario_false.current.innerText = "Usuário não encontrado"
                    }
                }
            )
        }
    }

    return(
        <main id="main_login" className="fading">
            {/* container do imagem */}
            <picture>
                <img src="./imagens/login_placeholder.jpg" alt="" />
            </picture>

            {/* container do login  */}
            <article>
                <section>
                    <h1>Login</h1>

                    {/* form para fazer o login */}
                    <div>
                        <p>Nome</p>
                        <input onBlur={check} data-nome={'username'} type="text" placeholder="Insira seu nome" id="inputNome" className="input"/>
                        {erro.username != '' ? <p className="erro_login">{erro.username}</p> : <></>}
                           
                        <p>Senha</p>
                        <input onBlur={check} type="password" data-nome={'userpassword'} placeholder="Insira sua senha" id="inputSenha" className="input"/>   
                        {erro.userpassword != '' && erro.userpassword != null ? <p className="erro_login">{erro.userpassword}</p> : <></>}
                    </div>
                    <div>
                        <Link onClick={loginUser} to={'/'} className="botao">Entrar</Link>
                        <p className="erro_login" ref={usuario_false}></p>
                    </div>
                
                    <Link>Perdeu sua senha?</Link>
                </section>

                <section>
                    <h2>Cadastro</h2>
                    <p>Ainda não é cadastrado?</p>
                    <button className="botao">Cadastrar agora!</button>                         
                </section>
            </article>
        </main>
    );
}

export default Login;