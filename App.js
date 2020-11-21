import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import Routes from './src/routes';

export default function App() {

  return (
    <View style={styles.container}>
      <Routes />

      <StatusBar style="auto" />
    </View>
  );
}