import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL, ReqRoutes } from "../const/const";
import {
  IAuthResult,
  IRegisterData,
  IAuthInfo,
  IProfile,
  IMovie,
} from "../types/types";

const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchFavorites: builder.query<IMovie[], void>({
      query: () => ReqRoutes.FAVORITES,
    }),
    addFavorites: builder.mutation<IProfile, IMovie>({
      query: (film) => ({
        url: ReqRoutes.FAVORITES,
        method: "POST",
        body: film,
      }),
    }),
  }),
});
