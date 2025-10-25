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

- [Demonstração](https://proffy-i419.onrender.com)
- [Video](https://drive.google.com/file/d/1B5plhd-a02FPMTWXaHI7Hi2Z0e2sccuS/preview)

## :rocket: Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [NodeJS](https://nodejs.org/)
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## :information_source: Como usar

Para clonar e executar este aplicativo, você precisará [Git](https://git-scm.com), [npm](https://www.npmjs.com), [Docker](https://www.docker.com), e [Node.js v20.19.5](https://nodejs.org/) ou superior instalado em seu computador. Na sua linha de comando:

```bash
# Clone este repositório
$ git clone https://github.com/brennogf/proffy

# Prepare o banco de dados:
# Crie um .env dentro da pasta "backend" e cole:
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres?schema=proffy

# Inicie o Docker
$ cd proffy
$ docker-compose up -d

# Instale as dependências
$ cd frontend
$ npm install --frozen-lockfile --legacy-peer-deps
$ cd ../backend
$ npm install --frozen-lockfile --legacy-peer-deps

# Rode as migrations
$ npm run migrate

# Execute o aplicativo
$ npm run dev
```

## :memo: Licença

Este projeto está sob licença do MIT. Veja o [LICENSE](https://github.com/brennogf/proffy/blob/master/LICENSE) para mais informações.

---

Feito com ♥ por Brenno Givigier :wave: [Entre em contato!](https://www.linkedin.com/in/brenno-givigier/)
