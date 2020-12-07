import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AuthProvider from 'auth/AuthProvider';
import PokemonProvider from 'data/PokemonProvider';

import Router from './router/Router';

function App() {
  return (
      <>
          <CssBaseline />
          <AuthProvider>
              <PokemonProvider>
                  <Router />
              </PokemonProvider>
          </AuthProvider>
      </>
  );
}

export default App;
