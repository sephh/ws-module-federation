import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Router from './router/Router';
import AuthProvider from './providers/AuthProvider';

function App() {
  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
