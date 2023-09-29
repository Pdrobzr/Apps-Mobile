import { Text, View, StyleSheet } from 'react-native';

export default function Vagas(props) {
  return (
        <View> 
        <Text style={styles.texto}>{props.titulo}</Text> 
        <Text style={styles.texto}>Salario: R$ {props.salario}</Text> 
        <Text style={styles.texto}>Descrição: {props.descricao}</Text> 
        <Text style={styles.texto}>Contato: {props.contato}</Text> 
        </View>
  );
}

const styles = StyleSheet.create({
  texto:{
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10
  },
})