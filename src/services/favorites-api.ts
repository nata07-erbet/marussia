import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, ReqRoutes } from "../const/const";
import {
  IAuthResult,
  IRegisterData,
  IAuthInfo,
  IProfile,
  IMovie,
} from "../types/types";

const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    getFavorites: builder.query<IMovie[], void>({
      query: () => ReqRoutes.FAVORITES
    })
  })
});

export const { useGetFavoritesQuery } = favoritesApi;
export { favoritesApi };