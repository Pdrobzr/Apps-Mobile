import React, {useState} from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, Pressable, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

  const imagem = 'https://static.vecteezy.com/ti/vetor-gratis/p1/6719380-3d-ponto-de-interrogacao-design-gratis-vetor.jpg';

  const [numero, setNumero] = useState(0);
  const [resultado, setResultado] = useState("");
  const numeroAleatorio = Math.floor(Math.random() * 11);

  function verificar () {
      
      if(numero === numeroAleatorio) {
        setResultado("Parabéns! Você Acertou!");
      } else {
        setResultado("Você errou! Tente Novamente!");
      }
  }

  return (
    <SafeAreaView>
      <Text style={styles.text}> 
        Jogo do número aleatório!
      </Text>

    <Image source={{uri: imagem}} style={styles.image}/>

    <TextInput style={styles.input} placeholder="Digite um número de 0 a 10" onChangeText={Number(setNumero)}/> 
 
    <Pressable style={styles.button} onPress={verificar}> <Text>Descobrir</Text> </Pressable>
    
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
    backgroundColor: 'yellow',
    borderRadius: 10
  },
  image: {
    width:300, 
    height: 300,
    alignSelf: 'center'
  }
});
