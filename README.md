# Workshop ModuleFederation

Nesse Workshop vamos falar sobre ModuleFederation, uma feature do [webpack 5](https://webpack.js.org/blog/2020-10-10-webpack-5-release) que permite a interação entre vários builds do webpack, ou seja, 
micro-frontend.

Usamos React para construir esse conteúdo, mas você pode usar seu flavor favorito, com uma pequena ressalva para o
Angular, que é um pouco menos flexível. Nós já temos um projeto federado com Angular, mas sinceramente eu esperaria
uma versão que suporte essa feature com menos atrito.

Teremos três aplicações `auth`, `data` e `pokemons`, e iremos fazer a comunicação entre elas sem um aumento 
exponencial da complexidade de implementação.

Nossos principais temas serão:

* Configuração do ModuleFederation;
* Como expor módulos na federação;
* Como consumir módulos da federação;
* Como utilizar rotas de outra aplicação;
* Como utilizar providers/contexto de outra aplicação.

Esse projeto foi dividido em 3 branches: `1-config`, `2-consuming` e `3-data-management`, além da `main` que possui 
toda a solução. 

Teremos um roteiro explicando o que deve ser feito em cada uma delas e seguiremos essa ordem: 1, 2 e 3. Se por acaso 
você não conseguir acompanhar ou tiver algum problema de implementação, não se preocupe, é só mudar para a próxima 
branch que a solução da anterior estará lá.

## Requisitos

* Javascript
* Node 10+
* Yarn (caso queira rodar o wsrun)
