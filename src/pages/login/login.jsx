import './login.css'
import getUserToken from "../../api/getUserToken";
import React, { useEffect, useRef } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

function Login(){
    let usuario_false = useRef(); // Mensagem de erro se n existir o usuario
        

    return(
        <main id="main_login" className="fading">
            <picture>
                <img src="./imagens/login_placeholder.jpg" alt="" />
            </picture>

            <article><Outlet/></article>
        </main>
    );
}

export default Login;