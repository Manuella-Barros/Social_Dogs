import { useState } from "react";

const validacoes = {
    username: 'Nome invalido',
    userpassword: 'Senha invalida'
}

function useForm(tipo) { // tipo = nome
    function validar(valor){ // valor = do  ->  input
        if(valor.length < 3){
            return validacoes[tipo] + ", minimo de 3 caracteres";
        } else{
            return true;
        }
    }

    return validar;
}
/*
const validacoes = {
    email: 'o email',
    senha: 'a senha',
    username: 'o username'
}

function useForm(tipo) {
    //const validacao = false;


    function validate(valor){
        console.log('estou validando ->' + validacoes[tipo])
        if(valor.length < 3){
            return false;
        }else{
            return true;
        }        

    }

    return validate;
}
*/
export default useForm;