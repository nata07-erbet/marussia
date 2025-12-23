type IFavorite = string;

type IUser = {
  name: string;
  surname: string;
  email: string;
  favorites: IFavorite[];
};

type IProfile = {
  favorites: string[];
  surname: string;
  name: string;
  email: string;
};

type IAuthInfo = {
  email: string;
  password: string;
};

type IAuthResult = {
  result: boolean;
};

type ISuccessfulResult = {
  result: boolean;
};

type IError = {
  error: string;
};

type IRegisterData = {
  email: string;
  password: string;
  name?: string;
  surname?: string;
};

type IMovie = {
  id: number;
  title: string;
  originalTitle: string;
  language: string;
  relaseYear?: number;     // версия с опечаткой
  releaseYear?: number;    // нормальная версия
  releaseDate: string;
  genres: string[];
  plot: string;
  runtime: number;
  budget: string | null;
  revenue: string | null;
  homepage: string | null;
  status: string;
  posterUrl: string;
  backdropUrl: string;
  trailerUrl: string;
  trailerYoutubeId?: string;
  trailerYouTubeId?: string;
  tmdbRating: number;
  searchL: string;
  keywords: string[];
  countriesOfOrigin: string[];
  languages: string[];
  cast: string[];
  director: string;
  production: string | null;
  awardsSummary: string | null;
};

type IFavoritesBody = {
  id: string;
};

export type {
  IFavorite,
  IUser,
  IAuthInfo,
  ISuccessfulResult,
  IError,
  IRegisterData,
  IMovie,
  IFavoritesBody,
  IAuthResult,
  IProfile,
};
