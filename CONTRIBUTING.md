# Guia de Contribuição

Obrigado por contribuir com o **Lista Compras Pro**! 🎉

## 🚀 Como Começar

1. **Fork** o repositório
2. **Clone** seu fork: `git clone https://github.com/seu-usuario/lista-compras-pro.git`
3. **Instale dependências**: `npm ci`
4. **Crie branch**: `git checkout -b feature/nome-da-feature` ou `fix/nome-do-bug`
5. **Desenvolva** com commits semânticos
6. **Teste**: `npm run test` + `npm run lint` + `npm run type-check`
7. **Push** e abra **Pull Request**

## 📝 Padrões de Commit (Conventional Commits)

```
<tipo>(<escopo>): <descrição curta>

[corpo opcional]

[rodapé opcional]
```

| Tipo | Uso |
|------|-----|
| `feat` | Nova funcionalidade |
| `fix` | Correção de bug |
| `docs` | Documentação |
| `style` | Formatação (espaços, vírgulas, etc) |
| `refactor` | Refatoração sem mudança de comportamento |
| `perf` | Melhoria de performance |
| `test` | Testes |
| `chore` | Manutenção (deps, build, CI) |
| `ci` | CI/CD |

**Exemplos:**
```
feat(shopping-lists): adiciona duplicação de lista
fix(products): corrige cálculo de preço médio no histórico
docs(readme): adiciona screenshots placeholders
chore(deps): atualiza @capacitor/core para v7.4.3
```

## 🧪 Checklist Antes do PR

- [ ] `npm run lint` passa sem erros
- [ ] `npm run format -- --check` passa
- [ ] `npm run type-check` passa
- [ ] `npm run test` passa (unit + e2e)
- [ ] `npm run build` gera sem erros
- [ ] Commits seguem Conventional Commits
- [ ] Branch atualizada com `main` (`git rebase origin/main`)
- [ ] Documentação atualizada se houver mudança de API/UX

## 🏗 Estrutura de Branches

| Branch | Propósito |
|--------|-----------|
| `main` | Produção (tags de release) |
| `develop` | Integração contínua (opcional) |
| `feature/*` | Novas features |
| `fix/*` | Bugfixes |
| `hotfix/*` | Correções urgentes em produção |
| `release/*` | Preparação de release |

## 🔄 Fluxo de PR

1. PR aberto contra `main` (ou `develop` se existir)
2. CI roda automaticamente (lint, type-check, testes, build Android/iOS)
3. Code review obrigatório (mínimo 1 aprovação)
4. Resolva conflitos se houver (`git rebase origin/main`)
5. Merge via **Squash and Merge** (histórico limpo)
6. Branch deletada automaticamente

## 🎨 Padrões de Código

- **TypeScript strict mode** — sem `any` desnecessário
- **Vue 3 Composition API** + `<script setup>`
- **Pinia** para state management (stores em `src/stores/modules/`)
- **CSS Variables** para temas (light/dark em `src/theme/`)
- **ESLint + Prettier** — config no repo
- **Testes**: Vitest (unit) + Cypress (e2e)

## 🐛 Reportando Bugs

Use o template de **Bug Report** no GitHub Issues. Inclua:
- Passos para reproduzir
- Comportamento esperado vs actual
- Screenshots/vídeo
- Device/OS/Versão do app
- Logs relevantes

## 💡 Sugerindo Features

Use o template de **Feature Request**. Descreva:
- Problema que resolve
- Solução proposta
- Alternativas consideradas
- Mockups/wireframes se aplicável

## 📱 Testando em Dispositivo

```bash
# Android
npm run android

# iOS (macOS apenas)
npm run ios

# Web PWA
npm run build && npm run preview
```

---

## 📞 Dúvidas?

Abra uma **Discussion** no GitHub ou entre em contato via [Issues](https://github.com/mannowell/lista-compras-pro/issues).

Obrigado por ajudar a tornar o Lista Compras Pro melhor! 🛒✨