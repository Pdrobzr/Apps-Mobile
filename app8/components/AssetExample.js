import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';

export default function AssetExample(props) {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        <View style={styles.box1}> <Image source={{uri: props.uri}} /> {props.nome} - {props.preco}</View>
      </ScrollView>
    </View>
  );
}

