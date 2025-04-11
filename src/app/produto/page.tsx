import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

// 👇 Define o tipo do produto
type Produto = {
  nome: string;
  descricao: string;
  preco: string;
  imagem: any; // Pode ser mais específico com `ImageSourcePropType` se quiser
};

// 👇 Tipagem correta no objeto produtos
const produtos: { [key: string]: Produto } = {
  "1": {
    nome: 'Temaki',
    descricao: 'Cone de alga recheado com arroz e salmão.',
    preco: 'R$ 18,90',
    imagem: require('../assets/images/temaki.jpg'),
  },
  "2": {
    nome: 'Sashimi',
    descricao: 'Fatias finas de salmão fresco.',
    preco: 'R$ 32,00',
    imagem: require('../assets/images/sashimi.jpg'),
  },
  "3": {
    nome: 'Combinadinho',
    descricao: '8 peças variadas de sushi e sashimi.',
    preco: 'R$ 42,50',
    imagem: require('../assets/images/combinadinho.jpg'),
  },
};

export default function ProdutoDetalhe() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // 👇 Verifica se o ID é uma string antes de acessar o objeto
  if (typeof id !== 'string') {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Produto não encontrado</Text>
      </View>
    );
  }

  const produto = produtos[id];

  if (!produto) {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={produto.imagem} style={styles.imagem} />
      <Text style={styles.titulo}>{produto.nome}</Text>
      <Text style={styles.descricao}>{produto.descricao}</Text>
      <Text style={styles.preco}>{produto.preco}</Text>

      <View style={{ marginTop: 20 }}>
        <Button title="Voltar ao menu" onPress={() => router.back()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  imagem: {
    width: 250,
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
    marginBottom: 10,
  },
  preco: {
    fontSize: 20,
    color: '#111',
    fontWeight: '600',
  },
});

