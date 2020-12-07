# Adicionando o ModuleFederation

Nessa branch vamos adicionar o ModuleFederation nos projetos e usar o projeto de autenticação nos outros dois.

## ModuleFederation

Nos nossos arquivos `webpack.config.js` vamos adicionar o plugin de module federation para expor os módulos das
aplicações, compartilhar nossas dependências e consumir outros módulos.

Vamos começar pela configuração do projeto `auth`.

Importe o ModuleFederationPlugin:

```
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
```

Vamos configurar cada atributo desse plugin:

### name

Após importar o plugin vamos adicioná-lo na nossa lista de plugins e preencher o primeiro atributo: o `name`;

```
new ModuleFederationPlugin({
    name: 'auth',
    ...
```

Esse atributo define o nome da aplicação no contexto da Federação.

### filename

O `filename` é opcional, mas para nossa sanidade é bom defini-lo. Ele identifica em qual 
arquivo está o mapeamento dos nossos módulos expostos.

```
new ModuleFederationPlugin({
    name: 'auth',
    filename: 'remoteEntry.js',
    ...
```

### exposes

O `exposes` já é mais complexo que os outros e com ele as coisas já começam a 
mais ficar interessantes. 

Nele vamos mapear o path do projeto com o path dos módulos expostos dessa aplicação. Vamos expor os seguintes 
módulos: routes, PrivateRoute, AuthProvider.

```
new ModuleFederationPlugin({
    name: 'auth',
    filename: 'remoteEntry.js',
    exposes: {
      './routes': './src/router/routes',
      './PrivateRoute': './src/router/PrivateRoute',
      './AuthProvider': './src/providers/AuthProvider',
    },
    ...
```

### remotes

O `remotes` é o mapeamento de como as dependências da federação se chamam e de onde baixá-las. Nesse projeto vamos 
deixá-lo vazio, mas iremos precisar dele assim que consumirmos nosso primeiro módulo.

```
new ModuleFederationPlugin({
    name: 'auth',
    filename: 'remoteEntry.js',
    exposes: {
      './routes': './src/router/routes',
      './PrivateRoute': './src/router/PrivateRoute',
      './AuthProvider': './src/providers/AuthProvider',
    },
    remotes: {},
    ...
```

### shared

Por último e não menos importante temos o `shared`, que é uma feature fantástica desse plugin. Em outras abordagens 
de micro-frontend precisamos fazer o gerenciamento de nossas dependências para diminuir a duplicidade e melhorar a 
performance de nossas aplicações.

Com ModuleFederation precisamos apenas identificar essas dependências no atributo `shared`.

Vamos importar nosso `package.json` e usar todas as dependências como shared, sem grande esforço.

const dependencies = require('./package.json').dependencies;

```
new ModuleFederationPlugin({
    name: 'auth',
    filename: 'remoteEntry.js',
    exposes: {
      './routes': './src/router/routes',
      './PrivateRoute': './src/router/PrivateRoute',
      './AuthProvider': './src/providers/AuthProvider',
    },
    remotes: {},
   shared: {
    ...dependencies,
        'react-router-dom': {
            requiredVersion: dependencies['react-router-dom'],
            singleton: true,
        },
        'react-dom': {
            requiredVersion: dependencies['react-dom'],
            singleton: true,
        },
        react: {
            requiredVersion: dependencies['react'],
            singleton: true,
        },
        axios: {
            requiredVersion: dependencies['axios'],
            singleton: true,
        },
    },
}),
```