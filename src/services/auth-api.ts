import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, ReqRoutes } from '../const/const';
import { IAuthResult, IAuthInfo, IProfile, IRegisterData } from '../types/types';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
    }),
  endpoints: (builder) => ({
    getLogout: builder.query<IAuthResult, void>({
      query: () => ReqRoutes.AUTH_LOGOUT
    }),

    postLogin: builder.mutation<IAuthResult, IAuthInfo>({
      query: (credentials) => ({
        url: ReqRoutes.AUTH_LOGIN,
        method: 'POST',
        body: credentials
      })
    }),

    getProfile: builder.query<IProfile, void>({
      query: () => ReqRoutes.PROFILE,
    }),

    postRegistrationData: builder.mutation<IAuthResult, IRegisterData>({
      query: (data) => ({
        url: ReqRoutes.USER,
        method: 'POST',
        body: data
      })
    })
  })
});

export const { useGetLogoutQuery, usePostLoginMutation, useGetProfileQuery, usePostRegistrationDataMutation } = authApi;

export { authApi };
