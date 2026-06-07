# 🛒 Lista Compras Pro

> **App mobile completo** para gerenciamento de listas de compras com histórico de preços, comparação entre mercados e sincronização offline-first. Construído com **Ionic + Vue + Capacitor** para Android & iOS.

[![CI](https://github.com/mannowell/lista-compras-pro/actions/workflows/ci.yml/badge.svg)](https://github.com/mannowell/lista-compras-pro/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)](https://www.typescriptlang.org/)
[![Ionic](https://img.shields.io/badge/Ionic-8.0-3880FF.svg)](https://ionicframework.com/)
[![Vue](https://img.shields.io/badge/Vue-3.4-42b883.svg)](https://vuejs.org/)
[![Capacitor](https://img.shields.io/badge/Capacitor-7.4-119EFF.svg)](https://capacitorjs.com/)

---

## ✨ Funcionalidades Principais

| Feature | Descrição |
|---------|-----------|
| 📝 **Listas Inteligentes** | Criar, editar, duplicar e organizar listas por mercado |
| 🏪 **Multi-Mercado** | Cadastro de mercados com endereço, favoritos |
| 💰 **Histórico de Preços** | Acompanhe variação de preços por produto/mercado ao longo do tempo |
| 🔍 **Comparação de Preços** | Veja qual mercado tem o melhor preço para sua lista |
| 📱 **Offline-First** | SQLite local via Capacitor — funciona sem internet |
| 🔄 **Sincronização** | Backup/restore local + preparação para sync na nuvem |
| 👨‍👩‍👧 **Modo Família** | Compartilhe listas com membros da família (roadmap) |
| 🔔 **Notificações** | Alertas de validade, promoções, lista compartilhada |
| 🌙 **Tema Escuro/Claro** | Segue sistema ou preferência do usuário |

---

## 📸 Screenshots

| Home | Lista de Compras | Mercados | Histórico de Preços |
|------|------------------|----------|---------------------|
| ![Home](assets/screenshots/home.png) | ![Lista](assets/screenshots/lista.png) | ![Mercados](assets/screenshots/mercados.png) | ![Preços](assets/screenshots/precos.png) |

> **Nota**: Adicione screenshots reais na pasta `assets/screenshots/` para aparecerem acima.

---

## 🚀 Quick Start

### Pré-requisitos
- Node.js 20+
- npm 10+ (ou pnpm/yarn)
- Android Studio / Xcode para builds nativos
- Conta Capacitor (opcional, para live updates)

### Instalação
```bash
# Clone
git clone https://github.com/mannowell/lista-compras-pro.git
cd lista-compras-pro

# Dependências
npm install

# Preparar Capacitor
npm run cap:sync

# Desenvolvimento (web)
npm run dev

# Android
npm run android

# iOS (apenas macOS)
npm run ios
```

### Scripts Úteis
```bash
npm run dev           # Vite dev server (web)
npm run build         # Build production (web + tipos)
npm run preview       # Preview build local
npm run lint          # ESLint + fix
npm run format        # Prettier
npm run type-check    # Vue TSC
npm run test          # Unit + E2E tests
npm run cap:sync      # Sync Capacitor plugins
npm run android       # Build + open Android Studio
npm run ios           # Build + open Xcode
```

---

## 🏗 Arquitetura

```
src/
├── components/       # Componentes Vue reutilizáveis
├── views/            # Páginas (roteamento)
│   ├── HomePage.vue
│   ├── ListaComprasView.vue
│   ├── NovaListaView.vue
│   ├── DetalhesListaView.vue
│   ├── MercadosView.vue
│   └── ProdutosView.vue
├── stores/           # Pinia stores (state management)
│   ├── modules/
│   │   ├── auth.ts
│   │   ├── markets.ts
│   │   ├── products.ts
│   │   └── shoppingLists.ts
│   └── index.ts
├── services/
│   └── DatabaseService.ts    # SQLite CRUD + migrations
├── types/
│   └── index.ts      # Interfaces TypeScript (Produto, Mercado, ListaCompra, ItemLista, HistoricoPreco)
├── router/           # Vue Router config
├── theme/            # Variáveis CSS, temas
└── main.ts           # Entry point
```

### Banco de Dados (SQLite via `@capacitor-community/sqlite`)
- **Produtos**: nome, descrição, timestamps
- **Mercados**: nome, endereço, timestamps
- **ListasCompra**: data, mercadoId, status (pendente/concluída), total
- **ItensLista**: listaId, produtoId, quantidade, preço, comprado
- **HistoricoPreco**: produtoId, mercadoId, preço, data — **core do diferencial**

---

## 🧪 Testes

```bash
# Unitários (Vitest + Vue Test Utils)
npm run test:unit

# E2E (Cypress)
npm run test:e2e
npm run test:e2e:open   # UI interativo

# Cobertura
npm run test:unit:coverage
```

---

## 📦 Build & Deploy

### Android (Play Store)
```bash
npm run build
npm run cap:sync android
npm run cap:build:android   # Gera .aab em android/app/build/outputs/bundle/release/
```
> Configure `android/app/build.gradle` com `signingConfigs` para release assinado.

### iOS (App Store)
```bash
npm run build
npm run cap:sync ios
npm run cap:build:ios       # Abre Xcode para Archive + Upload
```
> Requer macOS + Xcode + Apple Developer Program.

### Web PWA (GitHub Pages / Vercel / Netlify)
```bash
npm run build
# Deploy pasta dist/
```

---

## 🤝 Contribuindo

1. Fork o projeto
2. Crie branch: `git checkout -b feature/nova-funcionalidade`
3. Commit: `git commit -m 'feat: adiciona nova funcionalidade'`
4. Push: `git push origin feature/nova-funcionalidade`
5. Abra Pull Request

> Leia [CONTRIBUTING.md](CONTRIBUTING.md) para padrões de commit, código e PR.

---

## 📄 Licença

Distribuído sob licença **MIT**. Veja [LICENSE](LICENSE) para detalhes.

---

## 👤 Autor

**Mannowell** — [GitHub](https://github.com/mannowell) · [LinkedIn](https://linkedin.com/in/mannowell)

---

## 🙏 Agradecimentos

- [Ionic Framework](https://ionicframework.com/)
- [Vue.js](https://vuejs.org/)
- [Capacitor](https://capacitorjs.com/)
- [Pinia](https://pinia.vuejs.org/)
- [@capacitor-community/sqlite](https://github.com/capacitor-community/sqlite)