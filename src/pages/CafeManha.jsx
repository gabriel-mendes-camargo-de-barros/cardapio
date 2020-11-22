import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useNavigation, useRoute } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';


export default function CafeManha() {
  const route = useRoute();

  const name = route.params;

  const [fonstLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fonstLoaded) {
    return null;
  }

  const navigation = useNavigation();

  function handleNavigateToCardapio() {
    navigation.navigate('Cardapio');
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Café da Manhã</Text>
      <View style={styles.cumprimentos}>
        <Text style={styles.cumprimento}>Bom dia, {name}!</Text>
        <Text style={styles.cumprimento}>Hoje teremos:</Text>
      </View>
      <View onTouchEndCapture={handleNavigateToCardapio} style={styles.button}>
        <Text style={styles.buttontext} >Voltar</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto_500Medium',
    color: '#00BFA6',
    paddingTop: 80,
  },
  cumprimentos: {
    marginTop: 40,
  },
  cumprimento: {
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    color: '#6C63FF',
  },
  button: {
    marginTop: 10,
    width: 300,
    height: 80,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttontext: {
    fontSize: 18,
    fontFamily: 'Roboto_700Bold',
    color: '#6C63FF',
  },
});