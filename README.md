# DevCard — Cartão de Visita Digital

App React Native com Expo Router desenvolvido como Atividade Prática IA2.1 da disciplina de Aplicações Móveis (Prof. Brendo Vale — UNIVAG).

## Tecnologias

- React Native + Expo
- TypeScript
- Expo Router (navegação baseada em arquivos)

## Como rodar

```bash
npm install
npx expo start -c
```

## Estrutura de pastas

```
projeto-devcard/
├── app.json
├── package.json
├── tsconfig.json
└── src/
    └── app/
        ├── _layout.tsx
        ├── index.tsx
        ├── cadastro.tsx
        ├── preview.tsx
        └── sucesso.tsx
```

## Telas

### Tela 1 — Boas-vindas (`index.tsx`)

Tela inicial com título, subtítulo e botão para iniciar o cadastro.

### Tela 2 — Cadastro (`cadastro.tsx`)

- **Nome completo** - Obrigatório (min. 3 letras)
- **Cargo** e **Tech Favorita** - Obrigatórios
- **Empresa** - Opcional
- **Anos de experiência** - Apenas números maiores que 0
- **Estilização** - Escolha entre os temas azul, verde ou roxo

Mensagens de erro aparecem abaixo de cada campo quando a validação falha.

### Tela 3 — Preview (`preview.tsx`)

Exibe o cartão de visita estilizado com:

- Cor de fundo escolhida pelo usuário
- Avatar circular com a inicial do nome
- Nome, cargo e empresa
- Tecnologia favorita em destaque
- Badge de nível por anos de experiência:
  - 0–2 anos → **Júnior**
  - 3–5 anos → **Pleno**
  - 6+ anos → **Sênior**

### Tela 4 — Sucesso (`sucesso.tsx`)

Confirmação de que o cartão foi criado, com botão para criar outro.

### Fluxo de Navegação

| Ação             | Trajeto                          |
| :--------------- | :------------------------------- |
| `router.push`    | `index` ➔ `cadastro` ➔ `preview` |
| `router.back`    | `preview` ➔ `cadastro` (Editar)  |
| `router.replace` | `preview` ➔ `sucesso` ➔ `index`  |
