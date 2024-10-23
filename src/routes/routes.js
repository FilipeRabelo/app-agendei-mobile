// autenticado ou nao

import React from "react";
import RoutesPrivadas from "./routesPrivadas";
import RoutesAbertas from "./routesAbertas";

function Routes(){

  const user = {
    id_user: 1
  }
  
  return(
    user.id_user ? <RoutesPrivadas/> : <RoutesAbertas/>   // se user for autenticado vai para as rotas privadas
  )
}

export default Routes;