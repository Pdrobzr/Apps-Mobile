import { Text, View, StyleSheet, Image } from 'react-native';

export default function Produtos(props) {
  return (
        <View> <Image style={props.style} source={{uri: props.uri}} /> {props.nome} - R$ {props.preco}</View>
  );
}
