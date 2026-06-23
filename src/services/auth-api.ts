import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, ReqRoutes} from '../const/const';
import { IAuthResult } from '../types/types';


const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl:BASE_URL
    }),
    endpoints: (builder) => ({
        getLogin: builder.query<IAuthResult, void>({
            query: () => ReqRoutes.AUTH_LOGOUT
        })
    })
    
});

export const { useGetLoginQuery } = authApi;

export { authApi };