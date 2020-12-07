import React, { Fragment, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import authRoutes from 'auth/routes';

import routes from './routes';

const internalAuthRoutes = authRoutes({ redirectWhenSignIn: '/search' });
const dataRoutes = routes();

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

            {dataRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}

            <Redirect to={'/search'} />
          </Switch>
        </Suspense>
      </Fragment>
    </BrowserRouter>
  );
};

export default Router;
