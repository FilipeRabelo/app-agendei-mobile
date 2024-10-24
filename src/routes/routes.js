// autenticado ou nao
import React, { useContext } from "react";
import RoutesPrivadas from "./routesPrivadas";
import RoutesAbertas from "./routesAbertas";

import { AuthContext } from "../context/auth";

function Routes() {

  const { user } = useContext(AuthContext);   // lendo os dados do context

  // verificando
  return (
    user.id_user ? <RoutesPrivadas /> : <RoutesAbertas />   // se user for autenticado vai para as rotas privadas
  )
}

export default Routes;