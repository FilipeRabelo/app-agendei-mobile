
// so pode acessar quem tiver autenticado

// navegação de telas
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from '../screens/myTabs/myTabs';
import Services from '../screens/services/services';
import Schedule from '../screens/schedule/schedule';
import { COLORs } from '../constants/theme';

const Stack = createNativeStackNavigator()

function RoutesPrivadas() {
  return (
    <>
      <Stack.Navigator>

        <Stack.Screen name='myTabs' component={ MyTabs }
          options={ {
            headerShown: false
          } }
        />

        <Stack.Screen name='services' component={ Services }
          options={ {
            headerTitle: 'Serviços',
            headerTitleAlign: 'center',
            headerTitleColor: COLORs.white,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORs.blue
            },
            headerBackTitleVisible: false, // Esconde o título da seta de voltar
            headerTintColor: COLORs.white, 
          } }
        />

        <Stack.Screen name='schedule' component={ Schedule }
          options={ {
            headerTitle: 'Fazer um agendamento',
            headerTitleAlign: 'center',
            headerTitleColor: COLORs.blue,
            headerShadowVisible: false,
            // headerStyle: {
            //   backgroundColor: COLORs.blue
            // },
            headerBackTitleVisible: false, // Esconde o título da seta de voltar
            headerTintColor: COLORs.blue,
          } }
        />

      </Stack.Navigator>
    </>
  )
}

export default RoutesPrivadas;