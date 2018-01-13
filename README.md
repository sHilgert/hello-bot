# Hello chat bot

Um modelo simples para um chat bot que retorna um Hello para o usuario, via telegram.

## Como instalar

Para instalar utilize `npm install` dentro da pasta do projeto.

## Subir no Heroku

Caso você não tenha uma conta no Heroku é preciso criar uma, depois execute no terminal para fazer o login:
```
  heroku login
```

Faça o login no Heroku e dentro da pasta do projeto execute para criar o projeto no Heroku

```
  heroku create
```

Com o projeto criado, faça um commit na master do Heroku, utilizando o comando:

```
  git add .
  git commit -m "first commit"
  git push heroku master
```