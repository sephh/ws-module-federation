import React, { createContext } from 'react';
import { AUTH_STATUS, useAuth } from '../hooks/auth.hook';

export const AuthContext = createContext({
  authenticated: false,
  status: AUTH_STATUS.Idle,
  authenticate: () => {},
});

const AuthProvider = ({ children }) => {
  const context = useAuth();

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
