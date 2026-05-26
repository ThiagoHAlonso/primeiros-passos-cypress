🧪 OrangeHRM — Automação de Testes E2E com Cypress
Projeto pessoal de automação de testes End-to-End desenvolvido para aprender e aplicar conceitos de QA na prática, utilizando Cypress com JavaScript.
A aplicação testada é o OrangeHRM Open Source, um sistema de gestão de RH amplamente utilizado como ambiente de prática para automação de testes.
---
🎯 Objetivos do Projeto
Aprender e aplicar testes End-to-End em uma aplicação real
Automatizar fluxos críticos de login e edição de dados pessoais
Organizar seletores e dados de teste de forma estruturada e reutilizável
Desenvolver boas práticas de escrita de testes com Cypress
Entender e solucionar problemas reais de automação (seletores frágeis, erros da aplicação, etc.)
---
🗂️ Estrutura do Projeto
```
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
├── package.json
└── README.md
```
---
✅ Cenários Automatizados
1. Atualização de Informações Pessoais — Sucesso
Testa o fluxo completo de login e edição de perfil na seção "My Info":
Login com credenciais válidas
Validação do redirecionamento para o dashboard
Navegação para a tela de dados pessoais
Preenchimento e atualização de campos: nome, sobrenome, Employee ID, Other ID, Driver's License, data de expiração da licença e outros
Validação da mensagem de sucesso após salvar
2. Login com Credenciais Inválidas — Falha esperada
Testa o comportamento da aplicação ao tentar autenticar com dados incorretos:
Tentativa de login com usuário/senha inválidos
Validação da mensagem de erro `"Invalid credentials"`
---
🛠️ Tecnologias Utilizadas
Tecnologia	Versão	Finalidade
Cypress	^13.x	Framework de testes E2E
JavaScript	ES6+	Linguagem dos testes
Node.js	18+	Ambiente de execução
---
⚙️ Como Rodar o Projeto
Pré-requisitos
Node.js instalado (versão 18 ou superior)
npm instalado
Instalação
```bash
# Clone o repositório
git clone https://github.com/ThiagoHAlonso/first-test-E2E.git

# Entre na pasta do projeto
cd first-test-E2E

# Instale as dependências
npm install
```
Executando os testes
```bash
# Abre a interface visual do Cypress (modo interativo)
npx cypress open

# Roda os testes no terminal (modo headless)
npx cypress run
```
---
📁 Dados de Teste
As credenciais de usuário (válidas e inválidas) estão separadas em um arquivo de fixture:
```
cypress/fixtures/users/userData.json
```
Essa abordagem evita dados hardcoded nos testes e facilita a manutenção — se as credenciais mudarem, basta atualizar o JSON.
---
🧠 Aprendizados e Decisões Técnicas
Centralização de seletores
Todos os seletores CSS utilizados nos testes estão agrupados em um objeto `selectorList`, facilitando manutenção em caso de mudanças na UI da aplicação.
Seletores robustos por label
Durante o desenvolvimento, identificou-se que seletores baseados em índice (`.eq(9)`) quebravam quando elementos sumiam do DOM após interações como fechar um datepicker. A solução foi migrar para seletores baseados no texto do label:
```javascript
// ❌ Frágil — quebra quando a contagem de elementos muda
cy.get('.oxd-input--active').eq(9).type('valor')

// ✅ Robusto — sempre aponta para o campo certo
cy.contains('.oxd-label', "Driver's License Number")
  .parents('.oxd-input-group')
  .find('input')
  .type('valor')
```
Uso de fixtures para dados de teste
As credenciais de usuário estão em um arquivo JSON externo, separando dados de lógica e facilitando reutilização nos testes.
Tratamento de erros da aplicação
O OrangeHRM Open Source contém um bug de JavaScript (`Identifier 'btn' has already been declared`) que por padrão derruba os testes do Cypress. A solução foi adicionar um tratamento global no arquivo `support/e2e.js`:
```javascript
Cypress.on('uncaught:exception', () => {
  return false
})
```
Isso instrui o Cypress a ignorar erros não tratados da aplicação e continuar a execução do teste.
---
🔭 Próximos Passos
Possíveis evoluções para o projeto:
Adicionar mais cenários de teste (Contact Details, Emergency Contacts, etc.)
Implementar `cy.login()` como comando customizado para reutilização
Adotar o padrão Page Object Model para melhor organização
Configurar CI/CD com GitHub Actions para execução automática a cada push
Implementar `cy.intercept()` para mockar chamadas de API nos testes
---
👨‍💻 Autor
Thiago Henrique Alonso  
GitHub: @ThiagoHAlonso
---
> Projeto desenvolvido com fins de aprendizado e prática em automação de testes de software, com foco em Quality Assurance (QA).
