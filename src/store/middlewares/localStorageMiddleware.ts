import type { Middleware } from '@reduxjs/toolkit';
import type { RootState } from '../store';

export const localStorageMiddleware: Middleware<{}, RootState> = 
  (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
    localStorage.setItem('reduxState', JSON.stringify(state));
    return result;
  };