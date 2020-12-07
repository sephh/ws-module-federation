import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import authRoutes from 'auth/routes';

import routes from './routes';

const internalAuthRoutes = authRoutes({ redirectWhenSignIn: '/pokemons' });
const pokemonsRoutes = routes();

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Suspense
          fallback={
            <div
              style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div>Carregando...</div>
            </div>
          }
        >
          <Switch>
            {internalAuthRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}

            {pokemonsRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}

            <Redirect to={'/pokemons'} />
          </Switch>
        </Suspense>
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;
