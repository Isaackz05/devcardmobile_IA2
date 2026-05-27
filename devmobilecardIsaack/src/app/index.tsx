import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>📇</Text>
        </View>
        <Text style={styles.title}>DevCard</Text>
        <Text style={styles.subtitle}>Seu cartão de visita digital de dev mobile</Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/cadastro')}
        >
          <Text style={styles.buttonText}>Criar meu cartão</Text>
        </TouchableOpacity>
        <Text style={styles.footer}>Aplicações Móveis · Aula 7</Text>
      </View>
    </View>
