import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';

type Cor = 'azul' | 'verde' | 'roxo';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [anos, setAnos] = useState('');
  const [tecnologia, setTecnologia] = useState('');
  const [cor, setCor] = useState<Cor>('azul');

  const [erros, setErros] = useState<Record<string, string>>({});

  function validar(): boolean {
    const novosErros: Record<string, string> = {};

    if (!nome.trim() || nome.trim().length < 3) {
      novosErros.nome = 'Nome obrigatório, mínimo 3 caracteres.';
    }
    if (!cargo.trim()) {
      novosErros.cargo = 'Cargo é obrigatório.';
    }
    const anosNum = Number(anos);
    if (!anos.trim() || isNaN(anosNum) || anosNum <= 0) {
      novosErros.anos = 'Informe um número maior que 0.';
    }
    if (!tecnologia.trim()) {
      novosErros.tecnologia = 'Tecnologia favorita é obrigatória.';
    }

    setErros(novosErros);
    return Object.keys(novosErros).length === 0;
  }

  function handleGerarCartao() {
    if (!validar()) return;

    router.push({
      pathname: '/preview',
      params: { nome, cargo, empresa, anos, tecnologia, cor },
    });
  }

  const cores: { label: string; value: Cor }[] = [
    { label: 'Azul', value: 'azul' },
    { label: 'Verde', value: 'verde' },
    { label: 'Roxo', value: 'roxo' },
  ];

  const corIndicador: Record<Cor, string> = {
    azul: '#3b82f6',
    verde: '#22c55e',
    roxo: '#a855f7',
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Cadastro</Text>
      <Text style={styles.subtitulo}>Preencha seus dados de dev</Text>

      <View style={styles.campo}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput
          style={[styles.input, erros.nome ? styles.inputErro : null]}
          placeholder="José Isaack"
          value={nome}
          onChangeText={setNome}
          placeholderTextColor="#9ca3af"
        />
        {erros.nome ? <Text style={styles.erro}>{erros.nome}</Text> : null}
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Cargo</Text>
        <TextInput
          style={[styles.input, erros.cargo ? styles.inputErro : null]}
          placeholder="Desenvolvedor Mobile"
          value={cargo}
          onChangeText={setCargo}
          placeholderTextColor="#9ca3af"
        />
        {erros.cargo ? <Text style={styles.erro}>{erros.cargo}</Text> : null}
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Empresa (opcional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Tech Solutions"
          value={empresa}
          onChangeText={setEmpresa}
          placeholderTextColor="#9ca3af"
        />
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Anos de experiência</Text>
        <TextInput
          style={[styles.input, erros.anos ? styles.inputErro : null]}
          placeholder="4"
          value={anos}
          onChangeText={setAnos}
          keyboardType="numeric"
          placeholderTextColor="#9ca3af"
        />
        {erros.anos ? <Text style={styles.erro}>{erros.anos}</Text> : null}
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Tecnologia favorita</Text>
        <TextInput
          style={[styles.input, erros.tecnologia ? styles.inputErro : null]}
          placeholder="React Native"
          value={tecnologia}
          onChangeText={setTecnologia}
          placeholderTextColor="#9ca3af"
        />
        {erros.tecnologia ? <Text style={styles.erro}>{erros.tecnologia}</Text> : null}
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Cor do cartão</Text>
        <View style={styles.coresRow}>
          {cores.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={[
                styles.corBotao,
                cor === item.value ? styles.corBotaoSelecionado : null,
              ]}
              onPress={() => setCor(item.value)}
            >
              <View
                style={[
                  styles.corCirculo,
                  { backgroundColor: corIndicador[item.value] },
                ]}
              />
              <Text
                style={[
                  styles.corLabel,
                  cor === item.value ? styles.corLabelSelecionado : null,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.botao} onPress={handleGerarCartao}>
        <Text style={styles.botaoTexto}>Gerar Cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 40,
    gap: 4,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 2,
  },
  subtitulo: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 20,
  },
  campo: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    color: '#111827',
  },
  inputErro: {
    borderColor: '#ef4444',
  },
  erro: {
    fontSize: 12,
    color: '#ef4444',
    marginTop: 4,
  },
  coresRow: {
    flexDirection: 'row',
    gap: 10,
  },
  corBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderWidth: 1.5,
    borderColor: '#e5e7eb',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
  corBotaoSelecionado: {
    borderColor: '#6366f1',
    backgroundColor: '#eef2ff',
  },
  corCirculo: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  corLabel: {
    fontSize: 14,
    color: '#374151',
  },
  corLabelSelecionado: {
    color: '#6366f1',
    fontWeight: '600',
  },
  botao: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
