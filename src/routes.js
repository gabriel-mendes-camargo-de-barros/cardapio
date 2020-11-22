import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Cardapio from './pages/Cardapio';
import CafeManha from './pages/CafeManha';
import Almoco from './pages/Almoco';
import CafeTarde from './pages/CafeTarde';
import Jantar from './pages/Jantar';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen 
          name="Cardapio" 
          component={Cardapio} 
        />
        <Screen 
          name="CafeManha" 
          component={CafeManha} 
        />
        <Screen 
          name="Almoco" 
          component={Almoco} 
        />
        <Screen 
          name="CafeTarde" 
          component={CafeTarde} 
        />
        <Screen 
          name="Jantar" 
          component={Jantar} 
        />
      </Navigator>
    </NavigationContainer>
  );
}