import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

type Cor = 'azul' | 'verde' | 'roxo';

export default function Preview() {
  const { nome, cargo, empresa, anos, tecnologia, cor } =
    useLocalSearchParams<{
      nome: string;
      cargo: string;
      empresa: string;
      anos: string;
      tecnologia: string;
      cor: Cor;
    }>();

  function getCorFundo(cor: Cor): string {
    if (cor === 'verde') return '#16a34a';
    if (cor === 'roxo') return '#7c3aed';
    return '#3b82f6'; // azul (padrão)
  }

  function getBadge(anos: string): { label: string; cor: string } {
    const anosNum = Number(anos);
    if (anosNum >= 6) return { label: 'Sênior', cor: '#f59e0b' };
    if (anosNum >= 3) return { label: 'Pleno', cor: '#3b82f6' };
    return { label: 'Júnior', cor: '#6b7280' };
  }

  const badge = getBadge(anos ?? '0');
  const inicialNome = (nome ?? 'D')[0].toUpperCase();
  const corFundo = getCorFundo((cor ?? 'azul') as Cor);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Seu Cartão</Text>

      <View style={[styles.cartao, { backgroundColor: corFundo }]}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarLetra}>{inicialNome}</Text>
          </View>
        </View>

        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.cargo}>{cargo}</Text>
        {empresa ? <Text style={styles.empresa}>{empresa}</Text> : null}

        <View style={styles.separador} />

        <Text style={styles.especialistaLabel}>Especialista em</Text>
        <Text style={styles.tecnologia}>{tecnologia}</Text>

        <View style={[styles.badge, { backgroundColor: badge.cor }]}>
          <Text style={styles.badgeTexto}>{badge.label}</Text>
        </View>

        <Text style={styles.anosTexto}>{anos} anos de experiência</Text>
      </View>

      <View style={styles.botoesContainer}>
        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => router.back()}
        >
          <Text style={styles.botaoSecundarioTexto}>Editar dados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoPrimario}
          onPress={() => router.replace('/sucesso')}
        >
          <Text style={styles.botaoPrimarioTexto}>Finalizar</Text>
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
    paddingTop: 56,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 24,
  },
  cartao: {
    borderRadius: 20,
    padding: 28,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  avatarContainer: {
    marginBottom: 12,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarLetra: {
    fontSize: 32,
    fontWeight: '700',
    color: '#374151',
  },
  nome: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 4,
  },
  cargo: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
    textAlign: 'center',
  },
  empresa: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.75)',
    textAlign: 'center',
    marginTop: 2,
  },
  separador: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    width: '80%',
    marginVertical: 16,
  },
  especialistaLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.75)',
    marginBottom: 2,
  },
  tecnologia: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center',
  },
  badge: {
    borderRadius: 20,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginBottom: 10,
  },
  badgeTexto: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  anosTexto: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  botoesContainer: {
    marginTop: 32,
    gap: 12,
  },
  botaoSecundario: {
    borderWidth: 1.5,
    borderColor: '#6366f1',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  botaoSecundarioTexto: {
    color: '#6366f1',
    fontSize: 15,
    fontWeight: '600',
  },
  botaoPrimario: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  botaoPrimarioTexto: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
  },
});
