import React, {useState} from 'react';
import { Text, TextInput, SafeAreaView, StyleSheet, Pressable, Image, Switch } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App() {

  const sexosSelecionaveis = [
    {id: 1, nome: 'Masculino'},
    {id: 2, nome: 'Feminino'}
  ]

  const escolaridadesSelecionaveis = [
    {id: 1, nome: 'Educação infantil'},
    {id: 2, nome: 'Fundamental'},
    {id: 3, nome: 'Médio'},
    {id: 4, nome: 'Superior (Graduação)'},
    {id: 5, nome: 'Pós-graduação'},
    {id: 6, nome: 'Mestrado'},
    {id: 7, nome: 'Doutorado'}
  ]

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState(0);
  const [sexo, setSexo] = useState("")
  const [sexos] = useState(sexosSelecionaveis)
  const [escolaridade, setEscolaridade] = useState("");
  const [escolaridades] = useState(escolaridadesSelecionaveis);
  const [limite, setLimite] = useState(0);
  const [nacionalidade, setNacionalidade] = useState(false);
  const [enviado, setEnviado] = useState(false);

  

  let listaSexos = sexos.map( (sexo, chave) => {
    return <Picker.Item key={chave} value={sexo.nome} label={sexo.nome} />
  })

  let listaEscolaridades = escolaridades.map( (escolaridade, chave) => {
    return <Picker.Item key={chave} value={escolaridade.nome} label={escolaridade.nome} />
  })

  function criarConta(){
      setEnviado(true);
  }

  return (
    <SafeAreaView>
      <Text style={styles.text}> 
        Abertura de Conta
      </Text>

    <TextInput style={styles.input} placeholder="Digite o seu nome" onChangeText={setNome}/> 

    <TextInput style={styles.input} placeholder="Digite a sua idade" onChangeText={setIdade}/>
 
    <Picker style={styles.picker}
    selectedValue={sexo}
    onValueChange={ (itemValue, itemIndex) => setSexo(itemValue) }
    >
    {listaSexos}
    </Picker>

    <Picker style={styles.picker}
    selectedValue={escolaridade}
    onValueChange={ (itemValue, itemIndex) => setEscolaridade(itemValue) }
    >
    {listaEscolaridades}
    </Picker>

<Text style={styles.text}>Limite da conta</Text>
    <Slider
        minimumValue={0}
        maximumValue={1000}
        onValueChange={ (valorSelecionado) => setLimite(valorSelecionado) }
        value={limite}
        step={1}
        minimumTrackTintColor='blue'
        maximumTrackTintColor='green'
        thumbTintColor='orange'
      />
      {limite}

      <Text style={styles.text}>É brasileiro?</Text>
      <Switch
      value={nacionalidade}
      onValueChange={ (valorSwitch) => setNacionalidade(valorSwitch) }
      />

    <Pressable style={styles.button} onPress={criarConta}> <Text>Criar Conta</Text> </Pressable>
    
    {enviado&& (
      <>
    <Text style={styles.text}>Nome: {nome}</Text>
    <Text style={styles.text}>Idade: {idade}</Text>
    <Text style={styles.text}>Sexo: {sexo}</Text>
    <Text style={styles.text}>Escolaridade: {escolaridade}</Text>
    <Text style={styles.text}>Limite da conta: {limite}</Text>
    <Text style={styles.text}>
        {(nacionalidade) ? "Brasileiro" : "Estrangeiro"}
      </Text>
    </>
    )}

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
  picker: {
     height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    borderRadius: 8,
  }
});
