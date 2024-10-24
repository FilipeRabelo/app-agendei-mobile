
// qndo rodar a aplicação - roda as rotas

import React from 'react';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/context/auth';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}