import React, { createContext, useState } from 'react';
import getUserToken from "../api/getUserToken";

// O context serve pra consumir e alterar o estado
export const GlobalContext = createContext();//Criando o elemento

// Provider indica pra quem esse contexto está disponivel
// Aqui diz que está disponivel para tudo que a tag <TokenContext.Provider> engloba
export function GlobalProvider ({children}){
    const [isLogged, setIsLogged] = useState(false);
    const [login, setLogin] = React.useState({
        username: '',
        userpassword: '',
        useremail: ''
    })
    const [erro, setErro] = React.useState(login);

    // Verifica se o input é valido e seta na variável
    function validaInput({target}){
        const dado = target.getAttribute("data-nome") // pegando o valor do atributo data-nome

        if(target.value.length < 3){ // Input < 3 retorna msg de erro
            setErro(prevValue => {return { ...prevValue, [dado]: true }});
        } else{ // Se input > 3 apaga os erros seta o input na variavel
            setErro(prevValue => {return { ...prevValue, [dado]: false }});
            setLogin( prevValue => {
                return { ...prevValue, [dado]: target.value}
            })
        }
    }

     // Faz request do usuario de acordo com os inputs recebidos
    // Verifica se o usuario existe, se existe pega o token e guarda no LocalStorage
    // Se não existir, adiciona mensagem de erro
    async function loginUser(){
        if(login.username !== '' && login.userpassword !== ''){
            getUserToken(login.username, login.userpassword).then(res =>{ 
                    if(res.token != undefined && localStorage.getItem('tokenUsuario') == null){
                        localStorage.setItem('tokenUsuario', res.token); // add o token no LocalStorage   
                        localStorage.setItem('username', login.username);
                        //setErro(false)
                        setIsLogged(true); // Usuario Logado  
                    } else if(localStorage.getItem('tokenUsuario') != null){
                        //setErro(false) 
                    } else{
                        //setErro(true)
                    }
                }
            )
        }
    }

    
    return <GlobalContext.Provider value={[isLogged, setIsLogged, login, setLogin, erro, setErro, validaInput, loginUser]}>{children}</GlobalContext.Provider>
};
