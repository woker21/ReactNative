import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable, Button } from 'react-native';

export default function App() {

  const [valor, setValor] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.white}>Hola perros</Text>

      <Pressable onPress={() => setValor(valor + 1)}>
        <Text style={[styles.white, styles.boton]}>Subir valor</Text>
      </Pressable>

      <StatusBar />
      <Text style={styles.white}>{valor}</Text>
      
      <Pressable onPress={() => setValor(valor - 1)}>
        <Text style={[styles.white, styles.botonBlue]}>Bajar valor</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e0e0e',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
  },
  white: {
    color: '#fff',
  },
  boton: {
    margin: 50,
    backgroundColor: '#ff0404',
    padding: 20,
    borderRadius: 20,
  },
  botonBlue: {
    margin: 50,
    backgroundColor: '#0628be',
    padding: 20,
    borderRadius: 20,
  }
});
