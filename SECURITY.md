# Política de Segurança

## Versões Suportadas

| Versão | Suportada |
|--------|-----------|
| 1.x.x  | ✅ Sim    |
| < 1.0  | ❌ Não    |

## Reportando Vulnerabilidades

**NÃO** abra issue pública para vulnerabilidades de segurança.

Envie email para: **security@mannowell.dev** (ou use [GitHub Security Advisories](https://github.com/mannowell/lista-compras-pro/security/advisories/new))

Inclua:
- Descrição da vulnerabilidade
- Passos para reproduzir
- Impacto potencial
- Versão afetada
- Sugestão de correção (se tiver)

Responderemos em **48h** úteis.

## Boas Práticas no Projeto

- **Dependabot** habilitado para updates automáticos de segurança
- **Secret Scanning** + **Push Protection** ativos no GitHub
- **npm audit** no CI a cada build
- Dependências com `audit` crítico bloqueiam merge
- Capacitor plugins apenas de fontes oficiais (`@capacitor/*`, `@capacitor-community/*`)

## Divulgação Responsável

Seguimos **Coordinated Vulnerability Disclosure**:
1. Reporte privado → 2. Triagem → 3. Correção → 4. Release patch → 5. Divulgação pública (após fix disponível)

---

**Obrigado por manter o Lista Compras Pro seguro!** 🔒