import React, { createContext, useState } from 'react';

// O context serve pra consumir e alterar o estado
export const GlobalContext = createContext();//Criando o elemento

// Provider indica pra quem esse contexto está disponivel
// Aqui diz que está disponivel para tudo que a tag <TokenContext.Provider> engloba
export function GlobalProvider ({children}){
    const [isLogged, setIsLogged] = useState(false);
    
    return <GlobalContext.Provider value={[isLogged, setIsLogged]}>{children}</GlobalContext.Provider>
};
