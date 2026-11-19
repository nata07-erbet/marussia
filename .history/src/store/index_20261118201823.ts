import { configureStore } from '@reduxjs/toolkit';
import { authApi } from '../services/auth-api';
import { favoritesApi } from '../services/favorites-api';
import { movieApi } from '../services/movie-api';
import { userApi } from '../services/user-api'

const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [userApi]
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, favoritesApi.middleware, movieApi.middleware)
});

export { store };
