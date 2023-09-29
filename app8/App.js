import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import Produtos from './components/Produtos';

let imagemBicicleta = 'https://static.shopbike.com.br/public/shopbike/imagens/produtos/bicicleta-a29-oggi-big-wheel-7-1-deore-18v-2022-preto-verde-6374e229aebea.jpg';

let imagemBola = 'https://cdn.awsli.com.br/2500x2500/1300/1300342/produto/18737644901a7ed8631.jpg';

let imagemComputador = 'https://rocketz.com.br/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBWmc9IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--7fd275acfba2acad7269120d9457fbe129b9f783/pc-gamer-atlas-6.jpg';


function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Anúncios</Text>
      <ScrollView horizontal={true}>
        <View style={styles.box1}> <Produtos style={styles.image} uri={imagemBicicleta} nome={"Bicicleta"} preco={120.00}/></View>
        <View style={styles.box1}> <Produtos style={styles.image} uri={imagemBola} nome={"Bola"} preco={8.00} /></View>
        <View style={styles.box1}> <Produtos style={styles.image} uri={imagemComputador} nome={"Computador"} preco={2000.00}/></View>
      </ScrollView>
    </View>
  )
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 200
  },
  box1:{
    borderColor: 'black',
    borderWidth: 5,
    height: 250,
    width: 170,
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center', 
    marginBottom: 30
  },
  image: {
    width:160, 
    height: 100,
    alignSelf: 'center'
  }
})




export default App;