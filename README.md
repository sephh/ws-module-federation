# Data Management

Nessa branch concluiremos nosso workshop. Vamos Adicionar autenticação e gerenciamento de estado na aplicação pokemons.

## Pokemons

Na view de pokemons temos os cards "mockados", vamos mudar isso para consumir os cards da API.

A primeira coisa que precisamos fazer é importar o contexto responsável pelo gerenciamento do estado de pokemons: o 
PokemonContext, do módulo `data`.

```
import { PokemonContext } from 'data/PokemonProvider';
```

Depois disso precisamos adicionar no component o useContext e substituir o dado "mockado" pelo dado do conxto.

```
import React, { useContext, useEffect } from 'react';
import { AppBar, Box, Container } from '@material-ui/core';
import { PokemonContext } from 'data/PokemonProvider';

import Logo from '../components/Logo';
import CardGrid from '../components/CardGrid';

const Pokemons = () => {
  const { fetch, loading, pokemons } = useContext(PokemonContext);

  useEffect(() => {
    fetch({});
  }, [fetch]);

  return (
    <div>
      <AppBar position="static">
        <Box p={1}>
          <Logo width="100px" />
        </Box>
      </AppBar>

      <Container>
        <Box mt={2}>
          <CardGrid cards={pokemons} loading={loading} />
        </Box>
      </Container>
    </div>
  );
};

export default Pokemons;
```

## Search Bar

Precisamos adicionar nossa barra de pesquisa para que possamos buscar cartas pelo nome. Para isso basta importar 
nosso SearchBar.

```
import SearchBar from 'data/SearchBar';
```

E agora é só colocá-lo na tela:

```
<div>
  <AppBar position="static">
    <Box p={1}>
      <Logo width="100px" />
    </Box>
  </AppBar>

  <Container>
    <Box mt={2}>
      <Grid container>
        <Grid item xs={12}>
          <SearchBar/>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Box mt={2}>
            <CardGrid cards={pokemons} loading={loading} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
</div>
```

Pronto! Com essa mudança temos um micro-frontend completo com rotas compartilhadas, estado compartilhado e 
componentes compartilhados.

Espero que vocês tenham gostado.