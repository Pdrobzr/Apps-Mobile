import React, { Component } from 'react';
import { View, Text, Image} from 'react-native';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {styles} from './style';

class App extends Component{
  render(){

    let nome = 'Pedro Henrique Bezerra Severino';
    let img = 'https://avatars.githubusercontent.com/u/111087418?v=4';

    return(
      <View>
   
        <Navbar />

        <Image
          source={{ uri: img }}
          style={styles.imagem}
        />

        <Text style={styles.textoPrincipal}>Nome</Text>
        <Text style={styles.textinho}>{nome}</Text>

        <Text style= {styles.textoPrincipal}>Formação</Text>
        <Text style= {styles.textinho}>Etec de Praia Grande</Text>

        <Text style= {styles.textoPrincipal}>Experiência Profissional</Text>
        <Text style= {styles.textinho}>Prefeitura de São Vicente</Text>

        <Text style= {styles.textoPrincipal}>Projetos</Text>
        <Text style= {styles.textinho}>Projeto para matricula em creches{"\n"}
        Projeto para palestras municipais

        </Text>

        <Footer/>

      </View>
    )
  }
}


export default App;