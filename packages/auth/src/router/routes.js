import React, { lazy } from 'react';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('../views/Login'));
const Authenticated = lazy(() => import('../views/Authenticated'));

const routes = (opt = { redirectWhenSignIn: '/authenticated' }) => {
  const { redirectWhenSignIn } = opt;

  return [
    {
      path: '/login',
      component: (props) => (
        <Login {...props} redirectWhenSignIn={redirectWhenSignIn} />
      ),
      exact: true,
    },
    {
      path: '/authenticated',
      component: (props) => (
        <PrivateRoute {...props} component={Authenticated} />
      ),
      exact: true,
    },
  ];
};

export default routes;
