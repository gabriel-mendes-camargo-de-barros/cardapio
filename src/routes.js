import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import Cardapio from './pages/Cardapio';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Cardapio" component={Cardapio} />
      </Navigator>
    </NavigationContainer>
  );
}