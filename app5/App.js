import React, {useState} from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, Pressable, Image } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [resultado, setResultado] = useState("");

  const imagem = 'https://img.freepik.com/fotos-gratis/homem-forte-treinando-na-academia_1303-23478.jpg';

  function verificar () {
      const verificacao = peso / (altura * altura);
      if(verificacao < 18.5) {
        setResultado("Abaixo do peso!");
      } else if(verificacao >= 18.5 && verificacao <= 24.9){
        setResultado("Peso normal!");
      } else if(verificacao >= 25 && verificacao <= 29.9){
        setResultado("Sobrepeso!");
      } else if(verificacao >= 30 && verificacao <= 34.9){
        setResultado("Obesidade Grau I");
      } else if(verificacao >= 35 && verificacao <= 39.9){
        setResultado("Obesidade Grau II");
      } else if(verificacao >= 40){
        setResultado("Obesidade Mórbida! Cuidado!");
      }
  }

  return (
    <SafeAreaView>
      <Text style={styles.text}> 
        Cálculo do IMC
      </Text>

      <Image source={{uri: imagem}} style={styles.image}/>

    <TextInput style={styles.input} placeholder="Digite o seu peso" onChangeText={setPeso}/> 

    <TextInput style={styles.input} placeholder="Digite a sua altura" onChangeText={setAltura}/>
 
    <Pressable style={styles.button} onPress={verificar}> <Text>Calcular</Text> </Pressable>
    
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
