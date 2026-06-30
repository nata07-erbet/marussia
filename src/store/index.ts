import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/auth-api';
import { favoritesApi } from '../services/favorites-api';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, favoritesApi.middleware)
});

export { store };
