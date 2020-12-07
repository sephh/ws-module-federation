import React, { lazy } from 'react';
import PrivateRoute from "auth/PrivateRoute";

const Search = lazy(() => import('../views/Search'));

const routes = () => {
  return [
    {
      path: '/search',
      component: (props) => (
          <PrivateRoute {...props} component={Search} />
      ),
      exact: true,
    },
  ];
};

export default routes;
