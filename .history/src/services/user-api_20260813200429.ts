import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IAuthResult,
  IRegisterData,
  IAuthInfo,
  IProfile,
  IMovie,
} from "../types/types";
import { BASE_URL, ReqRoutes } from "../const/const";

const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    
    postLogin: builder.mutation<IAuthResult, IAuthInfo>({
      query: (credentials) => ({
        url: ReqRoutes.AUTH_LOGIN,
        method: "POST",
        body: credentials,
      }),
    }),

    getLogout: builder.query<IAuthResult, void>({
      query: () => ReqRoutes.AUTH_LOGOUT,
    }),

    createProfile: builder.mutation<IAuthResult, IRegisterData>({
      query: (credentials) => ({
        url: ReqRoutes.USER,
        method: "POST",
        body: credentials,
      }),
    }),
    getProfile: builder.query<IProfile, void>({
      query: () => ReqRoutes.PROFILE,
    }),

  }),
});

export { userApi };
export const { usePostLoginMutation, useGetLogoutQuery, useCreateProfileMutation, useGetProfileQuery } = userApi;
