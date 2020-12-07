import React, { useState, useCallback, useEffect } from 'react';

export const AUTH_STATUS = Object.freeze({
  Authenticated: 'Authenticated',
  Idle: 'Idle',
  Fail: 'Fail',
  Loading: 'Loading',
});

const login = ({ email, password }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'greg.almeidasilva@gmail.com' && password === 'picles') {
        return resolve({ email, name: 'Greg Almeida' });
      }

      reject('Email ou senha incorretos.');
    }, 1000);
  });

export const isAuthenticated = (status) => status === AUTH_STATUS.Authenticated;
export const isLoading = (status) => status === AUTH_STATUS.Loading;

export const useAuth = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(AUTH_STATUS.Idle);
  const [status, setStatus] = useState(AUTH_STATUS.Idle);

  const authenticate = useCallback(async ({ email, password }) => {
    setStatus(AUTH_STATUS.Loading);

    try {
      const user = await login({ email, password });

      setCurrentUser(user);
      setStatus(AUTH_STATUS.Authenticated);

      return user;
    } catch (e) {
      setCurrentUser(null);
      setStatus(AUTH_STATUS.Fail);
      throw new Error(e);
    }
  }, []);

  useEffect(() => {
    setAuthenticated(isAuthenticated(status));
    setLoading(isLoading(status));
  }, [status]);

  return {
    authenticate,
    authenticated,
    currentUser,
    loading,
    status,
  };
};
