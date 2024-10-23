
// qndo rodar a aplicação - roda as rotas

import React from 'react';
import Routes from './src/routes/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}