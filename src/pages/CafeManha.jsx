import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Café da Manhã</Text>
      <View style={styles.cumprimentos}>
        <Text style={styles.cumprimento}>Bom dia, {name}! Hoje teremos:</Text>
      </View>
      <Text style={styles.bebida} >Bebidas</Text>
      <View style={styles.cardapio}>
        <Text style={styles.bebidas}>- Café</Text>
        <Text style={styles.bebidas}>- Chás diversos</Text>
        <Text style={styles.bebidas}>- Iogurte de Morango e Abacaxi</Text>
        <Text style={styles.bebidas}>- Leite</Text>
        <Text style={styles.bebidas}>- Suco Natural de Laranja</Text>
      </View>
      <Text style={styles.bebida} >Prato Principal</Text>
      <View style={styles.cardapio}>
        <Text style={styles.bebidas}>- Biscoito Caseiro</Text>
        <Text style={styles.bebidas}>- Bolos Diversos</Text>
        <Text style={styles.bebidas}>- Pão Caseiro</Text>
        <Text style={styles.bebidas}>- Pão de Milho</Text>
        <Text style={styles.bebidas}>- Pão Francês</Text>
      </View>
      <Text style={styles.bebida} >Complementos</Text>
      <View style={styles.cardapio}>
        <Text style={styles.bebidas}>- Apresuntado</Text>
        <Text style={styles.bebidas}>- Queijo Muzzarela</Text>
        <Text style={styles.bebidas}>- Queijo Prato</Text>
        <Text style={styles.bebidas}>- Banana</Text>
        <Text style={styles.bebidas}>- Mamão</Text>
      </View>
      <Text style={styles.bebida}>R$ 22,00 por pessoa</Text>
      <View onTouchEndCapture={handleNavigateToCardapio} style={styles.button}>
        <Text style={styles.buttontext} >Voltar</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Roboto_500Medium',
    color: '#00BFA6',
    paddingTop: 80,
    textAlign: 'center',
  },
  cumprimentos: {
    marginTop: 40,
    alignItems: 'center',
  },
  cumprimento: {
    width: 160,
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    color: '#6C63FF',
    textAlign: 'center',
  },
  bebida: {
    fontSize: 22,
    fontFamily: 'Roboto_500Medium',
    color: '#00BFA6',
    textAlign: 'center',
    marginTop: 40,
  },
  cardapio: {
    alignItems: 'center',
    marginTop: 10,
  },
  bebidas: {
    width: 300,
    fontSize: 20,
    fontFamily: 'Roboto_500Medium',
    color: '#6C63FF',
  },
  button: {
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 30,
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