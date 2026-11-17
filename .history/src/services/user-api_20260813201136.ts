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
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  endpoints: (builder) => ({
    getProfile: builder.query({
      query:() => ({}) ReqRoutes.PROFILE
    })
  })
});

export { userApi };
export const { usePostLoginMutation, useGetLogoutQuery, useCreateProfileMutation, useGetProfileQuery } = userApi;
