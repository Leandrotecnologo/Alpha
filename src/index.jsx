import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ContatoScreen from './screens/ContatoScreen';
import LocutoresScreen from './screens/LocutoresScreen';
import ProgramScreen from './screens/ProgramScreen';
import InicioScreen from './screens/InicioScreen';
import LoginScreen from './screens/LoginScreen';
import EsqueceuScreen from './screens/EsqueceuScreen';
import CadScreen from './screens/CadScreen';
import LogoScreen from './screens/LogoScreen';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  

  return (
    <NavigationContainer>
        <Drawer.Navigator
    initialRouteName="Logo"
    useLegacyImplementation
    screenOptions={{
      headerShown: false,
      drawerStyle: {

           backgroundColor: "#76BB39",
           color: 'white',
           fontWeight: 'bold',
           width: 240,
      
         
      
          }
       
    }}
  >
    
        <Drawer.Screen name="Inicio" component={InicioScreen} />
        <Drawer.Screen name="Programação" component={ProgramScreen} />
        <Drawer.Screen name="Locutores" component={LocutoresScreen} />
        <Drawer.Screen name="Contatos" component={ContatoScreen} />
        <Drawer.Screen name="Logo" options={{
      drawerLabel:() => null, }} component={LogoScreen} />
        <Stack.Screen name="LoginScreen"  options={{
      drawerLabel:() => null,
    }} component={LoginScreen} />
     <Drawer.Screen name="EsqueceuScreen" options={{
      drawerLabel:() => null, }} component={EsqueceuScreen} />
        <Drawer.Screen name="Cadastrar" options={{
      drawerLabel:() => null, }} component={CadScreen} />
        </Drawer.Navigator>
        
       

        <Drawer.Screen name="LoginScreen" options={{ headerShown: false }}>
          {props => <LoginScreen {...props} onLogin={handleLogin} />}
        </Drawer.Screen>
      
    </NavigationContainer>
  );
}

