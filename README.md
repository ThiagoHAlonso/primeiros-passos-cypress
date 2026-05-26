# 🧪 OrangeHRM — Automação de Testes E2E com Cypress

Projeto pessoal de automação de testes End-to-End desenvolvido para aprender e aplicar conceitos de QA na prática, utilizando Cypress com JavaScript.

A aplicação testada é o OrangeHRM Open Source, um sistema de gestão de RH amplamente utilizado como ambiente de prática para automação de testes.

---

# 🎯 **Objetivos do Projeto**

- Aprender e aplicar testes End-to-End em uma aplicação real
- Automatizar fluxos críticos de login e edição de dados pessoais
- Organizar seletores e dados de teste de forma estruturada e reutilizável
- Desenvolver boas práticas de escrita de testes com Cypress
- Entender e solucionar problemas reais de automação (seletores frágeis, erros da aplicação, etc.)

---

# 🗂️ **Estrutura do Projeto**

```bash
first-test-E2E/
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js          # Arquivo principal com os testes
│   ├── fixtures/
│   │   └── users/
│   │       └── userData.json    # Credenciais de teste separadas do código
│   └── support/
│       ├── commands.js          # Comandos customizados (extensível)
│       └── e2e.js               # Configuração global — supressão de erros da aplicação
├── cypress.config.js            # Configuração base do Cypress (baseUrl, etc.)


└── README.md
