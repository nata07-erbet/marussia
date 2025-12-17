import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/user-api";

const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
    //     {
    //     thunk: {
    //         extraArgument:???
    //     },
    // }
});

export { store };
