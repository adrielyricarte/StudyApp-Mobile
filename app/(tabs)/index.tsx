
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { router } from 'expo-router';

export default function TelaInicial() {
  const [sessoesConcluidas, setSessoesConcluidas] = useState(0);

  const iniciarEstudo = async () => {
    setSessoesConcluidas(sessoesConcluidas + 1);

    await Haptics.impactAsync(
      Haptics.ImpactFeedbackStyle.Medium
    );
  };

  return (
    <ScrollView style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Text style={estilos.logo}>STUDYAPP</Text>
        <Text style={estilos.subtitulo}>
          Seu espaço de aprendizagem
        </Text>
      </View>

      <View style={estilos.boasVindas}>
        <Text style={estilos.titulo}>
          Olá, estudante! 👋
        </Text>
        <Text style={estilos.descricao}>
          Continue aprendendo e alcance seus objetivos.
        </Text>
      </View>

      <View style={estilos.cartao}>
        <Text style={estilos.tituloCartao}>
          📚 Seu progresso
        </Text>

        <Text style={estilos.numero}>
          {sessoesConcluidas}
        </Text>

        <Text style={estilos.descricao}>
          Sessões de estudo iniciadas nesta visita
        </Text>
      </View>

      <Text style={estilos.tituloSecao}>
        Áreas de estudo
      </Text>

      
<Pressable
  style={estilos.materia}
  onPress={() =>
    router.push({
      pathname: '/materia/[nome]',
      params: { nome: 'tecnologia' },
    })
  }
>
  <Text style={estilos.icone}>💻</Text>
  <View>
    <Text style={estilos.nomeMateria}>Tecnologia</Text>
    <Text style={estilos.descricaoMateria}>
      Programação e desenvolvimento
    </Text>
  </View>
</Pressable>

<Pressable
  style={estilos.materia}
  onPress={() =>
    router.push({
      pathname: '/materia/[nome]',
      params: { nome: 'seguranca' },
    })
  }
>
  <Text style={estilos.icone}>🔐</Text>
  <View>
    <Text style={estilos.nomeMateria}>
      Segurança da Informação
    </Text>
    <Text style={estilos.descricaoMateria}>
      Proteção de dados e sistemas
    </Text>
  </View>
</Pressable>

<Pressable
  style={estilos.materia}
  onPress={() =>
    router.push({
      pathname: '/materia/[nome]',
      params: { nome: 'gerais' },
    })
  }
>
  <Text style={estilos.icone}>📖</Text>
  <View>
    <Text style={estilos.nomeMateria}>
      Conhecimentos Gerais
    </Text>
    <Text style={estilos.descricaoMateria}>
      Conteúdos para revisar e praticar
    </Text>
  </View>
</Pressable>

      <Text style={estilos.rodape}>
        Aprender um pouco todos os dias faz a diferença!
      </Text>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },
  cabecalho: {
    backgroundColor: '#312e81',
    paddingTop: 60,
    paddingBottom: 35,
    alignItems: 'center',
  },
  logo: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: 3,
  },
  subtitulo: {
    color: '#c7d2fe',
    fontSize: 15,
    marginTop: 8,
  },
  boasVindas: {
    padding: 22,
  },
  titulo: {
    color: '#1e293b',
    fontSize: 25,
    fontWeight: '800',
  },
  descricao: {
    color: '#64748b',
    fontSize: 14,
    marginTop: 8,
  },
  cartao: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    padding: 22,
    borderRadius: 18,
    elevation: 3,
  },
  tituloCartao: {
    color: '#334155',
    fontSize: 18,
    fontWeight: '700',
  },
  numero: {
    color: '#4f46e5',
    fontSize: 42,
    fontWeight: '800',
    marginTop: 10,
  },
  tituloSecao: {
    color: '#1e293b',
    fontSize: 21,
    fontWeight: '800',
    marginHorizontal: 20,
    marginTop: 28,
    marginBottom: 12,
  },
  materia: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 18,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icone: {
    fontSize: 30,
    marginRight: 15,
  },
  nomeMateria: {
    color: '#1e293b',
    fontSize: 16,
    fontWeight: '700',
  },
  descricaoMateria: {
    color: '#64748b',
    fontSize: 12,
    marginTop: 5,
  },
  botao: {
    backgroundColor: '#4f46e5',
    marginHorizontal: 20,
    marginTop: 15,
    padding: 17,
    borderRadius: 14,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  rodape: {
    color: '#64748b',
    textAlign: 'center',
    margin: 25,
    fontSize: 12,
  },
});

