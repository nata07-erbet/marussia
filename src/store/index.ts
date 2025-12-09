import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services/services';


const store = configureStore({
    reducer: {
        [userApi.reducerPath]: userApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(
    //     {
    //     thunk: {
    //         extraArgument:???
    //     },
    // }
    ).concat(userApi.middleware)
});

export { store };