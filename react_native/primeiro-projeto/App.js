import { useState } from 'react'; // hook
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  //sempre chame seus hooks dentro da função que define o componente
  const [contador, setContador] = useState(0)

  return (
    <View style={styles.container}>
      <Text>{contador}</Text>
      {/* Defina um botão que atualiza a variável contador */}
      {/* Faça o teste, clique e veja que o valor é atualizado na tela */}
      {/* Encontre o componente certo no site oficial */}
      <Button
        onPress={() => setContador(contador + 1)}
        title="Incrementar"
        color="green"
        accessibilityLabel="Incrementa o contador"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
