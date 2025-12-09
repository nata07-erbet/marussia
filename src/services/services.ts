import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthResult, IRegisterData, IAuthInfo, IProfile, IMovie } from '../types/types';
import { BASE_URL, ReqRoutes } from '../const/const';


const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL}),
    endpoints:(builder) => ({
        login: builder.mutation<IAuthResult, IAuthInfo>({
            query: (credentials) => ({
                url: ReqRoutes.AUTH_LOGIN,
                method: 'POST',
                body: credentials
            })
        }),
        logout: builder.query<IAuthResult, void>({ 
            query: () => ReqRoutes.AUTH_LOGOUT
        }),
        createUser: builder.mutation<IAuthResult, IRegisterData>({
            query: (credentials) => ({
                url: ReqRoutes.USER,
                method: 'POST',
                body: credentials
             })
        }),
        fetchProfile: builder.query<IProfile, void>({
            query: () => ReqRoutes.PROFILE
        }),
        fetchRandomMovie: builder.query<IMovie, void>({
            query: () => 'https://cinemaguide.skillbox.cc/movie/random'
        })
     }),
}); 

export { userApi }