import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import DadosAcesso from '../../components/DadosAcesso';
import DadosPessoais from '../../components/DadosPessoais';

export default function Cadastro() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Cadastro de Usuário</Text>
        <Text style={styles.subtitle}>
          Preencha seus dados para criar sua conta
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados pessoais</Text>
        <DadosPessoais />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dados de acesso</Text>
        <DadosAcesso />
      </View>

      <View style={styles.button}>
        <Button
          title="Cadastrar"
          onPress={() => alert('Cadastro realizado!')}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#f5f5f5',
  },

  header: {
    marginBottom: 25,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 15,
    color: '#666',
  },

  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  button: {
    marginBottom: 30,
  },
});