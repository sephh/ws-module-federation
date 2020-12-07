import React, { lazy } from 'react';

const Pokemons = lazy(() => import('../views/Pokemons'));

const routes = () => {
  return [
    {
      path: '/pokemons',
      component: Pokemons,
      exact: true,
    },
  ];
};

export default routes;
