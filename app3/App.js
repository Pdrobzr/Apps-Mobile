import { Text, SafeAreaView, StyleSheet, TextInput, Button } from 'react-native';
import React, {useState} from 'react';

export default function App() {

  const [firstNumber, setFirstNumber] = useState();
  const [secondNumber, setSecondNumber] = useState();
  const [multi, setMulti] = useState();

  function multiplicar() {
    const resultado = firstNumber * secondNumber;
    setMulti(resultado);
  }

  return (

    <SafeAreaView style={styles.container}>

      <Text style={styles.textoPrincipal}>Multiplicar números</Text>

      <TextInput
        placeholder="Digite o primeiro numero: "
        onChangeText={setFirstNumber}
        style={styles.input}
    />

    <TextInput 
      placeholder="Digite o segundo numero: "
      onChangeText={setSecondNumber}
      style={styles.input}
    />

    <Button title="multiplicar" onPress={multiplicar} />


    {multi && <Text style={styles.multi}> Resultado: {multi} </Text>}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  multi: {
    textAlign: 'center'
  },

  textoPrincipal: {
    textAlign: 'center',
    fontSize: 30,
    marginBottom: 30
  },

  input: {
    marginBottom: 30,
    borderWidth: 2,
    borderRadius: 5
  },

});
