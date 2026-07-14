import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/auth-api';
import { favoritesApi } from '../services/favorites-api';
import { movieApi } from '../services/movie-api';

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, favoritesApi.middleware, movieApi.middleware)
});

export { store };
