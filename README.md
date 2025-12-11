# 🔐 Password Generator

Um gerador de senhas construído com React, TypeScript e Styled Components. Este projeto foi desenvolvido como um desafio do Front-end Mentor.

## 🎬 Demonstração

![Demonstração do Password Generator](./project-in-action.gif)

## 📋 Sobre o Projeto

O Password Generator é uma aplicação web que permite aos usuários gerar senhas seguras e personalizadas de acordo com suas necessidades. Com uma interface intuitiva e moderna, você pode criar senhas fortes com diferentes combinações de caracteres e comprimentos variados.

## ✨ Principais Funcionalidades

- **Geração de Senhas Personalizadas**: Crie senhas com comprimento ajustável (até 20 caracteres)
- **Múltiplas Opções de Caracteres**:
  - Letras minúsculas (a-z)
  - Letras maiúsculas (A-Z)
  - Números (0-9)
  - Símbolos especiais (!@#$%^&\*, etc.)
- **Indicador de Força**: Visualize a força da senha gerada em tempo real
- **Copiar para Área de Transferência**: Copie a senha gerada com um único clique
- **Interface Responsiva**: Design adaptável para diferentes tamanhos de tela
- **Feedback Visual**: Animações e indicadores visuais para melhor experiência do usuário

## 🛠️ Tecnologias Utilizadas

- **React**
- **TypeScript**
- **Styled Components**
- **Vite**
- **ESLint**
- **Prettier**

  ## 🚀 Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório:

```bash
git clone https://github.com/orafael93/password-generator.git
```

2. Navegue até o diretório do projeto:

```bash
cd password-generator
```

3. Instale as dependências:

```bash
npm install
```

### Executando em Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação será aberta automaticamente no seu navegador padrão em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run preview` - Visualiza a build de produção localmente
- `npm run lint` - Executa o linter para verificar problemas no código

## 🎨 Funcionalidades

### Controle de Comprimento

Ajuste o comprimento da senha usando um slider interativo, variando de 1 a 20 caracteres.

### Seleção de Caracteres

Escolha quais tipos de caracteres incluir na senha através de checkboxes:

- Letras minúsculas
- Letras maiúsculas
- Números
- Símbolos

### Indicador de Força

O aplicativo avalia automaticamente a força da senha com base nos critérios selecionados e exibe um indicador visual.

### Copiar Senha

Clique no ícone de copiar para transferir a senha gerada para a área de transferência, com feedback visual de confirmação.

## 👨‍💻 Autor

**Rafael Pereira**

- Email: orafaeldev@gmail.com
- GitHub: [@orafael93](https://github.com/orafael93)

## 📄 Licença

Este projeto é privado e foi desenvolvido para fins educacionais.

## 🚀 Agradecimentos

- [Frontend Mentor](https://www.frontendmentor.io/) pelo desafio
