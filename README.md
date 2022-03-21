# Desafio Payfy
-----

Neste desafio, o objetivo era a criação de uma API REST para controles de usuários em um sistema, mais informações do desafio podem ser encontradas [aqui](https://github.com/payfy/desafio-tecnico-backend-1/tree/main).

## Funcionalidades Obrigatórias

- [x] Rota para criação de usuário
- [x] Rota para criar configuração de usuário
- [x] Rota para listar usuários
- [x] Permitir a criação de usuários com apenas 18 anos ou mais


## Guia de Instação

* Utilizando Docker

```
docker-compose up -d
```

* Sem o Docker

Para a instalação do projeto sem o Docker são necessários algumas tecnologias instaladas na máquina, como listadas abaixo:

### Requisitos

- [Node](https://nodejs.org/en/)
- [postgres](https://www.postgresql.org)

Após a instalação das mesmas, crie o Banco de Dados ```users_api_dev```, caso necessário altere os dados de permissão em [ormconfig.json](https://github.com/renanNun/Desafio-payfy/blob/main/ormconfig.json).

Feito este passo, instale as bibliotecas com:

```
npm install
```

Inicie o Projeto em localhost:3333/api/

```
npm run dev
```

### Documentação das rotas e outras informações

A Documentação das rotas do projeto, bem como outras informações se encontram na [wiki](https://github.com/renanNun/Desafio-payfy/wiki) deste repositório
