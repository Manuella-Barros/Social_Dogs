import React, { createContext, useState } from 'react';

// O context serve pra consumir e alterar o estado
export const TokenContext = createContext();//Criando o elemento

// Provider indica pra quem esse contexto está disponivel
// Aqui diz que está disponivel para tudo que a tag <TokenContext.Provider> engloba
export function TokenProvider ({children}){
    const [token, setToken] = useState("");
    return <TokenContext.Provider value={[token, setToken]}>{children}</TokenContext.Provider>
};
