import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useFonts } from 'expo-font';
import { Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';

export default function Cardapio() {
  const [name, setName] = useState('');

  const [fonstLoaded] = useFonts({
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fonstLoaded) {
    return null;
  }

  const navigation = useNavigation();

  function handleNavigateToCafeManha() {
    navigation.navigate('CafeManha', name);
  }

  function handleNavigateToAlmoco() {
    navigation.navigate('Almoco', name);
  }

  function handleNavigateToCafeTarde() {
    navigation.navigate('CafeTarde', name);
  }

  function handleNavigateToJantar() {
    navigation.navigate('Jantar', name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cardápio do Dia</Text>
      <TextInput  
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.opcoes} >Clique para ver as opções</Text>
      <View style={styles.buttons}>
        <View onTouchEndCapture={handleNavigateToCafeManha} style={styles.button}>
          <Text style={styles.buttontext} >Café da Manhã</Text>
        </View>
        <View onTouchEndCapture={handleNavigateToAlmoco} style={styles.button}>
          <Text style={styles.buttontext} >Almoço</Text>
        </View>
        <View onTouchEndCapture={handleNavigateToCafeTarde} style={styles.button}>
          <Text style={styles.buttontext} >Café da Tarde</Text>
        </View>
        <View onTouchEndCapture={handleNavigateToJantar} style={styles.button}>
          <Text style={styles.buttontext} >Jantar</Text>
        </View>
      </View>
      <StatusBar style="auto" />
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
    fontSize: 26,
    fontFamily: 'Roboto_500Medium',
    color: '#00BFA6',
    paddingTop: 80,
  },
  input: {
    marginTop: 35,
    width: 240,
    height: 40,
    fontSize: 18,
    fontFamily: 'Roboto_500Medium',
    color: '#6C63FF',
    backgroundColor: '#E5E5E5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  opcoes: {
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    color: '#00BFA6',
    paddingTop: 40,
  },
  buttons: {
    marginTop: 15,
  },
  button: {
    marginTop: 10,
    width: 300,
    height: 70,
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation: 2,
  },
  buttontext: {
    fontSize: 18,
    fontFamily: 'Roboto_700Bold',
    color: '#6C63FF',
  },
});