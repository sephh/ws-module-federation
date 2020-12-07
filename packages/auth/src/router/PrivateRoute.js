import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const PrivateRoute = ({ children, component, ...rest }) => {
  const { authenticated } = useContext(AuthContext);

  const render = () => {
    return authenticated ? (
      <Route {...rest} component={component}>
        {children}
      </Route>
    ) : (
      <Redirect to="/login" />
    );
  };

  return render();
};

export default PrivateRoute;
