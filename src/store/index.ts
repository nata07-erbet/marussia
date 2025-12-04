import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './reducer';
import { createAPI } from '../api/api';

const api = createAPI();

const store = configureStore({
    reducer: appReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: api
        },
    })
});

export { store, api };