import { StyleSheet, View } from 'react-native';
import CampoTexto from './CampoTexto';

export default function DadosAcesso() {
  return (
    <View style={styles.container}>
      <CampoTexto
        label="Senha"
        placeholder="Digite sua senha"
        secureTextEntry
      />

      <CampoTexto
        label="Confirmação de senha"
        placeholder="Digite sua senha novamente"
        secureTextEntry
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});