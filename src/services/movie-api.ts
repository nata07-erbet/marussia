import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  IAuthResult,
  IRegisterData,
  IAuthInfo,
  IProfile,
  IMovie,
} from "../types/types";
import { BASE_URL, ReqRoutes } from "../const/const";

const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    fetchMovies: builder.query<IMovie[], void>({
      query: () => ReqRoutes.MOVIE,
    }),
    fetchMoviesTop: builder.query<IMovie[], void>({
      query: () => ReqRoutes.TOP_10,
    }),
    fetchMovieById: builder.query<IMovie, number>({
      query: (movieId) => `{ReqRoutes.MOVIE}/${movieId}`,
    }),
    fetchMoviesGenre: builder.query<IMovie[], void>({
      query: () => ReqRoutes.GENRES,
    }),
    fetchMoviesRandom: builder.query<IMovie[], void>({
      query: () => ReqRoutes.RANDOM,
    }),
  }),
});
export const {
  useFetchMoviesQuery,
  useFetchMoviesTopQuery,
  useFetchMovieByIdQuery,
  useFetchMoviesGenreQuery,
  useFetchMoviesRandomQuery,
} = movieApi;

export { movieApi };
