const VALUE_FOR_ACTION = 10;
const BASE_URL = "https://cinemaguide.skillbox.cc/";

const AppRoutes = {
  Main: "/",
  Genres: "/genres",
  Genre: "/genre",
  Film: "/film",
  Auth: "/auth",
} as const;

const ReqRoutes = {
  AUTH_LOGIN: "/auth/login",
  AUTH_LOGOUT: "/auth/logout",
  USER: "/user",
  PROFILE: "/profile",
  FAVORITES: "/favorites",
  MOVIE: "/movie",
  TOP_10: "/movie/top10",
  GENRES: "/movie/genres",
  RANDOM: "/movie/random",
} as const;

const NameSpace = {
  User: "User",
  Auth: "Auth",
  Movies: "Movies",
  Favorites: "Favorites",
  Movie: "Movie",
  Search: "Search",
  Genres: "Genres",
} as const;

const QueryStatus = {
  Pending: "pending",
  Error: "error",
  Success: "success",
} as const;

export {
  VALUE_FOR_ACTION,
  AppRoutes,
  ReqRoutes,
  NameSpace,
  BASE_URL,
  QueryStatus,
};
