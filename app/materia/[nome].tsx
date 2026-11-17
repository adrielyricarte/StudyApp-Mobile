
import { useLocalSearchParams, router } from 'expo-router';
import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native';

const materias: Record<string, any> = {
  tecnologia: {
    titulo: 'Tecnologia',
    descricao: 'Programação e desenvolvimento',
    conteudo: [
      'A programação permite criar sistemas, aplicativos e sites.',
      'JavaScript é uma linguagem utilizada no desenvolvimento web.',
      'React Native permite criar aplicativos para dispositivos móveis.'
    ],
    pergunta: 'Qual tecnologia permite criar aplicativos móveis usando React?',
    alternativas: [
      'React Native',
      'Microsoft Word',
      'HTML apenas'
    ],
    correta: 0,
    explicacao: 'React Native permite desenvolver aplicativos móveis utilizando React.'
  },

  seguranca: {
    titulo: 'Segurança da Informação',
    descricao: 'Proteção de dados e sistemas',
    conteudo: [
      'A segurança da informação protege dados contra acessos não autorizados.',
      'A confidencialidade garante que somente pessoas autorizadas acessem informações.',
      'Senhas fortes e autenticação em duas etapas ajudam a proteger contas.'
    ],
    pergunta: 'Qual é o objetivo da confidencialidade?',
    alternativas: [
      'Deixar os dados públicos',
      'Permitir acesso somente a pessoas autorizadas',
      'Apagar todos os arquivos'
    ],
    correta: 1,
    explicacao: 'A confidencialidade protege as informações contra acessos não autorizados.'
  },

  gerais: {
    titulo: 'Conhecimentos Gerais',
    descricao: 'Conteúdos para revisar e praticar',
    conteudo: [
      'O estudo frequente ajuda a desenvolver o conhecimento.',
      'A leitura contribui para ampliar o vocabulário.',
      'A revisão dos conteúdos auxilia na fixação da aprendizagem.'
    ],
    pergunta: 'Qual hábito ajuda na fixação do conteúdo?',
    alternativas: [
      'Não revisar o conteúdo',
      'Estudar somente uma vez',
      'Fazer revisões frequentes'
    ],
    correta: 2,
    explicacao: 'Revisar frequentemente ajuda a fixar o que foi aprendido.'
  }
};

export default function TelaMateria() {
  const { nome } = useLocalSearchParams<{ nome: string }>();
  const materia = materias[nome || ''];

  const [resposta, setResposta] = useState<number | null>(null);
  const [respondida, setRespondida] = useState(false);

  if (!materia) {
    return (
      <View style={estilos.container}>
        <Text>Matéria não encontrada.</Text>
        <Pressable onPress={() => router.back()}>
          <Text>Voltar</Text>
        </Pressable>
      </View>
    );
  }

  function verificarResposta() {
    if (resposta !== null) {
      setRespondida(true);
    }
  }

  function tentarNovamente() {
    setResposta(null);
    setRespondida(false);
  }

  return (
    <ScrollView style={estilos.container}>
      <Pressable onPress={() => router.back()}>
        <Text style={estilos.voltar}>← Voltar</Text>
      </Pressable>

      <View style={estilos.cabecalho}>
        <Text style={estilos.titulo}>{materia.titulo}</Text>
        <Text style={estilos.descricao}>{materia.descricao}</Text>
      </View>

      <Text style={estilos.tituloSecao}>📚 Conteúdo para estudar</Text>

      {materia.conteudo.map((item: string, indice: number) => (
        <View style={estilos.cartao} key={indice}>
          <Text style={estilos.conteudo}>{item}</Text>
        </View>
      ))}

      <Text style={estilos.tituloSecao}>📝 Teste seus conhecimentos</Text>

      <View style={estilos.cartao}>
        <Text style={estilos.pergunta}>{materia.pergunta}</Text>

        {materia.alternativas.map((item: string, indice: number) => (
          <Pressable
            key={indice}
            style={[
              estilos.alternativa,
              resposta === indice && estilos.selecionada
            ]}
            onPress={() => {
              setResposta(indice);
              setRespondida(false);
            }}
          >
            <Text style={estilos.textoAlternativa}>
              {String.fromCharCode(65 + indice)}. {item}
            </Text>
          </Pressable>
        ))}

        <Pressable
          style={estilos.botao}
          onPress={verificarResposta}
          disabled={resposta === null}
        >
          <Text style={estilos.textoBotao}>Verificar resposta</Text>
        </Pressable>

        {respondida && (
          <View style={estilos.resultado}>
            <Text style={estilos.feedback}>
              {resposta === materia.correta
                ? '🎉 Parabéns! Você acertou!'
                : '❌ Não foi dessa vez. Tente novamente!'}
            </Text>
            <Text style={estilos.explicacao}>
              {materia.explicacao}
            </Text>
            <Pressable onPress={tentarNovamente}>
              <Text style={estilos.tentar}>Responder novamente</Text>
            </Pressable>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    padding: 20,
  },
  voltar: {
    color: '#4f46e5',
    fontSize: 16,
    fontWeight: '700',
    marginTop: 25,
    marginBottom: 20,
  },
  cabecalho: {
    backgroundColor: '#312e81',
    padding: 25,
    borderRadius: 18,
    marginBottom: 25,
  },
  titulo: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '800',
  },
  descricao: {
    color: '#c7d2fe',
    marginTop: 8,
  },
  tituloSecao: {
    color: '#1e293b',
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 15,
  },
  cartao: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
  },
  conteudo: {
    color: '#334155',
    fontSize: 15,
    lineHeight: 24,
  },
  pergunta: {
    color: '#1e293b',
    fontSize: 17,
    fontWeight: '700',
    marginBottom: 15,
  },
  alternativa: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  selecionada: {
    borderColor: '#4f46e5',
    backgroundColor: '#eef2ff',
  },
  textoAlternativa: {
    color: '#334155',
    fontSize: 14,
  },
  botao: {
    backgroundColor: '#4f46e5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#ffffff',
    fontWeight: '700',
  },
  resultado: {
    backgroundColor: '#eef2ff',
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  feedback: {
    color: '#312e81',
    fontSize: 16,
    fontWeight: '800',
  },
  explicacao: {
    color: '#334155',
    marginTop: 10,
    lineHeight: 22,
  },
  tentar: {
    color: '#4f46e5',
    fontWeight: '700',
    marginTop: 15,
  },
});
