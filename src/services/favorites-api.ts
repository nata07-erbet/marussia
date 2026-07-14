import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, ReqRoutes } from '../const/const';
import {
  IAuthResult,
  IRegisterData,
  IAuthInfo,
  IProfile,
  IMovie,
  IUser
} from '../types/types';
import { url } from 'inspector';
import { METHODS } from 'http';

const favoritesApi = createApi({
  reducerPath: 'favoritesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    getFavorites: builder.query<IMovie[], void>({
      query: () => ReqRoutes.FAVORITES
    }),
    postFavorites: builder.mutation<IUser, string>({
      query: (credentials) => ({
        url: ReqRoutes.FAVORITES,
        method: "POST",
        body: credentials,
      })
    }),
    dropFavorites: builder.mutation<IUser, IMovie['id']>({
      query: (movieId) => ({
        url: ReqRoutes.DELETE,
        method: "POST",
        body: movieId,
      })
    })
  }),
});

export const { useGetFavoritesQuery, usePostFavoritesMutation, useDropFavoritesMutation} = favoritesApi;
export { favoritesApi };
