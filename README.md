<h1 align="center">IN8 DEV - Teste Técnico</h1>
<img src="./front-end/src/asssets/screenPrint.png">

#

## O projeto 🧾

Este é um projeto desenvolvido para um teste técnico, onde consiste a criação de uma aplicação, tanto front-end quanto back-end. A página web coniste em uma paágina simples que possui um formulário para cadastro e uma tabela para mostrar usuários cadastrados. O back-end da aplicação contou com apeanas 2 rotas uma para cadastrar os usuários e outra para listar todos os usuários.

<br />

## Tecnologias ⚙

- Front-end:
    - React
    - TypeScript
    - Styled-components
    - Material UI
    - Axios
    - Vite

- Back-end:
    - Node.JS
    - Express
    - Prisma
    - TypeScript
    - TS-Node
    - Docker


<br />

## Utilização 📚

A utilização do projeto algo que vá ser algo um pouco extenso para explicar então vamos começar:

- Primeiro faça o clone deste repositório com o comando ```git clone https://github.com/hash-luk/in8-dev```
- Entre na pasta principal com o comando ```cd in8-dev```
- Aqui vamos separar em 2 partes para rodar o projeto, vamos começar pelo back=end

### Back-end 📠

- Você irá precisar do Docker para rodar a aplicação, realize o download pelo link abaixo, instale e inicie, pode ser que seja necessário reiniciar sua máquina
    - [Docker](https://www.docker.com/products/docker-desktop)

<br />

- Dentro da pasta principal do projeto navegue até a pasta de back-end com o comando ```cd back-end```
- Instale as dependencias com o comando ```npm install```
- Agora vamos configurar os arquivos para rodar o servidor, abra o arquivo **docker-compose.yml** e edite os campos **POSTGRES_PASSWORD** e **POSTGRES_USER** para que se adequem a um usuário e senha de sua preferência
- Após editar o arquivo do docker, crie um arquivo **.env** na raiz do projeto e adicione a seguinte linha:
    - ```DATABASE_URL="postgresql://your_username:your_password@localhost:5432/in8users?schema=public"```

    - **Lembre-se de substituir os campos pelos seus dados de acesso que foram colocados no arquivo .env**

- Agora vamos rodar o arquivo docker com o comando ```docker-compose up -d```, isso irá criar uma imagem com um banco de dados postgres rodando localmente
- Para finalizar vamos ao prisma, no terminal digite o comando ```npx migrate dev --name nome_da_migrate --create-onlye```, lembrando de substituir o **nome_da_migrate** pelo nome que você deseja
    - Caso o prisma solicite que você resete o banco, pode apenas aceitar
- Feito isso as coisas devem funcionar, para testar pode iniciar tudo com o comando ```npm run dev``` e uma mensagem que o servidor foi iniciado deverá aparecer


<br />

### Front-end 📡

- Voltando a pasta principal do projeto acesse o front-end com o comando ```cd front-end```
- Instale as dependencias com o comando ```npm install```
- Como não tem muita coisa necessária, pode apenas iniciar o projeto com o comando ````npm run dev```
- O projeto deve iniciar normalmente


<br />

## Finalização 🏁

Na minha visão eu consegui atender em grande parte o que era solicitado no projeto, tanto em questão de layout, quanto separar no back-end e cirar a API para integrar esse sistema. Foi extremamente interessante desenvolver o projeto já que é sempre mais desafiador trablahar com os 2 lados da aplicação.

#

<p align="center">Desenvolvido com 💜 por Lucas P</p>
