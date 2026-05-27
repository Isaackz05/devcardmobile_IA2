import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export default function Sucesso() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <View style={styles.iconCirculo}>
            <Text style={styles.iconTexto}>✓</Text>
          </View>
        </View>

        <Text style={styles.titulo}>Cartão criado{'\n'}com sucesso!</Text>
        <Text style={styles.subtitulo}>
          Seu cartão de visita digital está pronto. Compartilhe com a galera!
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.botaoTexto}>Criar outro cartão</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/')}>
          <Text style={styles.linkTexto}>Voltar ao início</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 24,
    paddingVertical: 48,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  iconContainer: {
    marginBottom: 8,
  },
  iconCirculo: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#22c55e',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#22c55e',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 8,
  },
  iconTexto: {
    fontSize: 48,
    color: '#fff',
    fontWeight: '700',
    lineHeight: 56,
  },
  titulo: {
    fontSize: 26,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    lineHeight: 34,
  },
  subtitulo: {
    fontSize: 15,
    color: '#6b7280',
    textAlign: 'center',
    lineHeight: 22,
  },
  bottom: {
    alignItems: 'center',
    gap: 16,
  },
  botao: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    width: '100%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  linkTexto: {
    fontSize: 14,
    color: '#6366f1',
    fontWeight: '500',
  },
});
