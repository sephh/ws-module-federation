import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from './router/Router';
import PokemonProvider from './providers/PokemonProvider';

function App() {
  return (
    <>
      <CssBaseline />
      <PokemonProvider>
        <Router />
      </PokemonProvider>
    </>
  );
}

export default App;
