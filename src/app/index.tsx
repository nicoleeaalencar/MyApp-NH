import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useRouter } from 'expo-router';
import styles from './style'; 

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin() {
    if (email && senha) {
      router.push('/home/page');
    } else {
      alert('Preencha email e senha!');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nori House</Text>
      <Text style={styles.subtitle}>Bem-vindo(a) ao melhor do sushi!</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/cadastro/page')}>
        <Text style={styles.link}>Não tem conta?</Text>
      </TouchableOpacity>
    </View>
  );
}
