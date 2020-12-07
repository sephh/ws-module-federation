import React, { lazy } from 'react';
import PrivateRoute from 'auth/PrivateRoute';

const Pokemons = lazy(() => import('../views/Pokemons'));

const routes = () => {
  return [
    {
      path: '/pokemons',
      component: (props) => <PrivateRoute {...props} component={Pokemons} />,
      exact: true,
    },
  ];
};

export default routes;
