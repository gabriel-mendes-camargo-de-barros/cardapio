import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Cardapio() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio do Dia</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#444',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#00BFA6',
    paddingTop: 60,
  },
});
