// controle de context da autenticação

import { createContext, useState } from "react";

const AuthContext = createContext({});  // instancio e inicio com um obj vazio

// criar um provedor de dados para o context

function AuthProvider(props) {          //devolve o provedor do context

  const [ user, setUser ] = useState({
    
  });

  return (
    <AuthContext.Provider value={ { user, setUser } }>
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext };