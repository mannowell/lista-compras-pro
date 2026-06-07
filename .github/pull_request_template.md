## 📋 Descrição

<!-- Descreva as mudanças deste PR -->

## 🔗 Issues Relacionadas

Fixes #(issue_number)
Closes #(issue_number)
Related to #(issue_number)

## 🧪 Tipo de Mudança

- [ ] **Bugfix** (correção que não quebra API)
- [ ] **Feature** (nova funcionalidade que não quebra API)
- [ ] **Breaking Change** (correção/feature que quebra API existente)
- [ ] **Docs** (atualização de documentação)
- [ ] **Refactor** (refatoração sem mudança de comportamento)
- [ ] **Perf** (melhoria de performance)
- [ ] **Test** (adição/correção de testes)
- [ ] **Chore** (manutenção: deps, build, CI, etc)
- [ ] **CI** (mudanças no pipeline)

## ✅ Checklist

- [ ] Código segue style guide do projeto (ESLint + Prettier)
- [ ] `npm run type-check` passa
- [ ] `npm run lint` passa
- [ ] `npm run test` passa (unit + e2e)
- [ ] `npm run build` gera sem erros
- [ ] Testes adicionados/atualizados para novas funcionalidades
- [ ] Documentação atualizada (README, CHANGELOG, comments)
- [ ] Commits seguem Conventional Commits
- [ ] Branch rebaseada com `main` (`git rebase origin/main`)
- [ ] Self-review feito antes de pedir review

## 📸 Screenshots / Vídeo (se UI)

<!-- Antes / Depois -->

## 🧪 Como Testar

```bash
# Passos para testar localmente
npm ci
npm run dev
# ou
npm run android / npm run ios
```

## 📱 Impacto

| Área | Impacto |
|------|---------|
| Database | Schema migration necessária? |
| API | Breaking change? |
| UI/UX | Mudança visual significativa? |
| Performance | Melhoria/degradação mensurável? |
| Battery/Network | Impacto no consumo? |

## 🔒 Segurança

- [ ] Não introduz vulnerabilidades conhecidas
- [ ] Dados sensíveis não expostos em logs/console
- [ ] Validação de entrada implementada
- [ ] Permissões Capacitor mínimas necessárias

---

**Para revisores:** Foco em arquitetura, tipos TypeScript, performance mobile, UX offline-first, testes de regressão.