import { Text, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import Vagas from './components/Vagas';




function App(){
  return(
    <View style={styles.container}>
      <Text style={styles.text}>Vagas</Text>
      <ScrollView>
        <View style={styles.box1}> <Vagas titulo={"Vaga ok"} salario={3000} descricao={"Uma vaga de mais ou menos"} contato={12543}/></View>
        <View style={styles.box1}> <Vagas titulo={"Vaga ruim"} salario={900} descricao={"Uma vaga zuada"} contato={123}/></View>
        <View style={styles.box1}> <Vagas titulo={"Vaga dos sonhos"} salario={20000} descricao={"Uma vaga de honra"} contato={124323}/></View>
      </ScrollView>
    </View>
  )
}




const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  box1:{
    alignSelf: 'center',
    borderColor: 'black',
    borderWidth: 5,
    height: 250,
    width: 270,
    marginBottom: 15
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center', 
    marginBottom: 30
  },
})




export default App;

