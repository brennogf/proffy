<h1 align="center">
    <br>
    Proffy
</h1>

<h4 align="center">
    Plataforma de conexão entre alunos e professores.
</h4>

<p align="center">
 <img src="https://i.ibb.co/HHGSY11/proffy.png">
</p>

## :link: Links

-  [Demonstração](https://proffy-i419.onrender.com)
-  [Video](https://drive.google.com/file/d/1B5plhd-a02FPMTWXaHI7Hi2Z0e2sccuS/preview)

## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

-  [NodeJS](https://nodejs.org/)
-  [React](https://reactjs.org/)
-  [TypeScript](https://www.typescriptlang.org/)

## :information_source: Como usar

Para clonar e executar este aplicativo, você precisará [Git](https://git-scm.com), [Node.js v20.19.5](https://nodejs.org/) ou superior + [Yarn v1.22.4](https://yarnpkg.com) ou superior instalado em seu computador. Na sua linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/brennogf/proffy

# Prepare o banco de dados:
# Crie um .env dentro da pasta "api" e cole:
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres?schema=proffy

# Inicie o Docker (lembrando que precisa ter o Docker instalado no seu PC)
$ cd sistolda
$ docker-compose up

# Em outro terminal, entre no repositório e instale as dependências
$ cd proffy/frontend
$ yarn
$ cd ../api
$ yarn

# Rode as migrations
$ yarn migrate

# Execute o aplicativo
$ yarn server
```

## :memo: Licença
Este projeto está sob licença do MIT. Veja o [LICENSE](https://github.com/brennogf/proffy/blob/master/LICENSE) para mais informações.

---

Feito com ♥ por Brenno Givigier :wave: [Entre em contato!](https://www.linkedin.com/in/brenno-givigier/)
