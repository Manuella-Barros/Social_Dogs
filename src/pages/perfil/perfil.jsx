import React from 'react';
import './perfil.css'
import NavPerfil from './componentes/NavPerfil';
import { Outlet } from 'react-router-dom';

function Perfil() {
    return (
        <main id='main_perfil'>
            <Outlet />
            <NavPerfil/> 
        </main>
    );
}

export default Perfil;