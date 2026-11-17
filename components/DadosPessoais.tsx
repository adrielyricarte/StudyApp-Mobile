import { StyleSheet, View } from 'react-native';
import CampoTexto from './CampoTexto';

export default function DadosPessoais() {
  return (
    <View style={styles.container}>
      <CampoTexto
        label="Nome completo"
        placeholder="Digite seu nome completo"
      />

      <CampoTexto
        label="E-mail"
        placeholder="Digite seu e-mail"
      />

      <CampoTexto
        label="Telefone"
        placeholder="Digite seu telefone"
      />

      <CampoTexto
        label="Data de nascimento"
        placeholder="Digite sua data de nascimento"
      />

      <CampoTexto
        label="CPF"
        placeholder="Digite seu CPF"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});