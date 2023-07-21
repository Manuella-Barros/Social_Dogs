import React from 'react';
import './perfil.css'
import HeaderPerfil from './componentes/HeaderPerfil';
import { Outlet } from 'react-router-dom';

function Perfil() {
    return (
        <main id='main_perfil'>
            <HeaderPerfil/>
            
            <Outlet/>
        </main>
    );
}

export default Perfil;