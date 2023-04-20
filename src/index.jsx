import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FormScreen from './screens/FormScreen';
import ContatoScreen from './screens/ContatoScreen';
import LocutoresScreen from './screens/LocutoresScreen';
import ProgramScreen from './screens/ProgramScreen';
import InicioScreen from './screens/InicioScreen';





const Drawer = createDrawerNavigator();


export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <NavigationContainer >
      
      <Drawer.Navigator  initialRouteName="Inicio" useLegacyImplementation>
        <Drawer.Screen name="Inicio" component={InicioScreen} />
        <Drawer.Screen name="Programação" component={ProgramScreen} />
        <Drawer.Screen name="Locutores" component={LocutoresScreen} />
        <Drawer.Screen name="Contatos" component={ContatoScreen} />
        <Drawer.Screen name="Formulario" component={FormScreen} />
        </Drawer.Navigator>        
       
        <Drawer.Screen name="LoginScreen" options={{ headerShown: false }}>
          {props => <LoginScreen {...props} onLogin={handleLogin} />}
        </Drawer.Screen>
     
    </NavigationContainer>
  );
}