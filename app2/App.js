import { Text, View, Button } from 'react-native';
import React, {useState} from 'react';


export default function App() {

  const [number, setNumber] = useState(0);

  function aumentar(){
    setNumber(number + 1);
  }

  function diminuir(){
    if(number > 0){
      setNumber(number - 1);
    }
  }

  return (
    <View style={{marginTop: 50, width: 200, alignSelf: 'center'}}> 
    <Text style={{textAlign: 'center', fontSize: 20, marginBottom:30}}>Contador de Pessoas</Text>
      <Button title="+" onPress={aumentar} />
      <Text style={{textAlign: 'center'}}>{number}</Text>
      <Button title="-" onPress={diminuir} />
    </View>
  );
}


