import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Navigate } from 'react-router-dom';

function ProtectedRouter({children}) {
    const [isLogged] = useContext(GlobalContext);

    if(isLogged == true){
        return children;
    } else if(isLogged == false){
        return <Navigate to={'/login'}/>
    } else{
        return <></>
    }
}

export default ProtectedRouter;