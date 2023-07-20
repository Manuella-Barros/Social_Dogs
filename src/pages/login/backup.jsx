import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './login.css'
import getUserToken from "../../api/getUserToken";
import useForm from "../../hooks/useForm";

function Login(){
    const validaUsername = useForm('username');
    const validaSenha = useForm('userpassword');
    const [userName, setUserName] = useState("   ");
    const [userPassword, setUserPassword] = useState("   ");
    const [erroNome, setErroNome] = useState(null);

    // userName != null && userPassword != null ? console.log("Nome: " + userName, "Senha: " + userPassword) : <></>

    function verificaToken(){
        getUserToken(userName, userPassword).then(res => console.log(res));
    }

    

    // function verifica({target}){
    //     console.log(validaUsername(userName))
    //     const retornoNome = typeof validaUsername(userName) == 'boolean'
    //     console.log(typeof validaUsername(userName) == 'boolean')
    //     console.log(retornoNome)
    //     if(retornoNome){
    //         setUserName(target.value);
    //     }
    //     else{
    //         setErroNome(validaUsername(userName))
    //     }
    //     if(typeof validaSenha(userPassword) == 'boolean'){
    //         setUserPassword(target.value);
    //     }
    // }

    return(
        <main id="main_login" className="fading">
            <picture>
                <img src="./imagens/placeholder.png" alt="" />
            </picture>
            <article>
                <section>
                    <h1>Login</h1>

                    <div>
                        <p>Nome</p>
                            <input onBlur={verifica} type="text" placeholder="Insira seu nome" id="inputNome" className="input"/>
                            {erroNome && <p className="erro_login">cu </p>}
                            {/* <p className="erro_login">{userName != '' ? validaUsername(userName): <></>}</p> */}
                        <p>Senha</p>
                            <input onChange={verifica} type="password" placeholder="Insira sua senha" id="inputSenha" className="input"/>   
                            <p className="erro_login">{userPassword != '' ? validaSenha(userPassword): <></>}</p>                       
                    </div>
                    <div>
                        <button onClick={verificaToken}>Entrar</button>
                    </div>
                
                    <Link>Perdeu sua senha?</Link>
                </section>

                <section>
                    <h2>Cadastro</h2>
                    <p>Ainda não é cadastrado?</p>
                    <button>Cadastrar agora!</button>                         
                </section>
            </article>
        </main>
    );
}
/*
function Login(){
    const validandoUsername = useForm('username'); // validate()
    const validandoSenha = useForm('senha'); // validate()
    const [userPassword, setUserPassword] = useState("   ");
    const [erro, setErro] = useState(null);

    // userName != null && userPassword != null ? console.log("Nome: " + userName, "Senha: " + userPassword) : <></>

    function verificaToken(){
        getUserToken(userName, userPassword).then(res => console.log(res));
    }

    function check(valor){
        if(validacao){
            console.log('uhul')
            console.log(valor)
        }
        else
            setErro(true)
    }


    return(
        <main id="main_login" className="fading">
            <picture>
                <img src="./imagens/placeholder.png" alt="" />
            </picture>
            <article>
                <section>
                    <h1>Login</h1>

                    <div>
                        <p>Nome</p>
                            <input onChange={({target}) => check(target.value)} type="text" placeholder="Insira seu nome" id="inputNome" className="input"/>
                            {erro && <p>ih rapaz deu erro hein</p>}
                        <p>Senha</p>
                            <input onChange={({target}) => validandoSenha(target.value)} type="password" placeholder="Insira sua senha" id="inputSenha" className="input"/>                          
                    </div>
                    <div>
                        <button onClick={verificaToken}>Entrar</button>
                    </div>
                
                    <Link>Perdeu sua senha?</Link>
                </section>

                <section>
                    <h2>Cadastro</h2>
                    <p>Ainda não é cadastrado?</p>
                    <button>Cadastrar agora!</button>                         
                </section>
            </article>
        </main>
    );
}
*/
export default Login;