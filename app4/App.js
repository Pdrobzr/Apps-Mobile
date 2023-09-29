import React, {useState} from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, Pressable, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

  const imagem = 'https://m.media-amazon.com/images/I/61lcaZUfH9L.png'

  const [alcool, setAlcool] = useState();
  const [gasolina, setGasolina] = useState();
  const [resultado, setResultado] = useState("");

  function verificar () {
      const verificacao = alcool / gasolina;

      if(verificacao < 0.7){
        setResultado("Alcool é a melhor opção!")
      } else {
        setResultado("Gasolina é melhor!");
      }
  }

  return (
    <SafeAreaView>
      <Text style={styles.text}> 
        Alcool ou Gasolina
      </Text>

      <Image source={{uri: imagem}} style={styles.image}/>

    <TextInput style={styles.input} placeholder="Digite o preço do Álcool" onChangeText={setAlcool}/> 

    <TextInput style={styles.input} placeholder="Digite o preço da Gasolina" onChangeText={setGasolina}/>
 
    <Pressable style={styles.button} onPress={verificar}> <Text>ENVIAR</Text> </Pressable>
    
    {resultado&& <Text style={styles.text}>Resultado: {resultado}</Text>}
    

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 8
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center', 
    marginBottom: 30
  },
  button: {
    alignSelf: 'center',
    textAlign: 'center',
    width: 100,
    height: 30,
    margin: 10,
    backgroundColor: 'yellow'
  },
  image: {
    width:300, 
    height: 300,
    alignSelf: 'center'
  }
});
