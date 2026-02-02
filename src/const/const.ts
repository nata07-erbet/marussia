const VALUE_FOR_ACTION = 10;
const BASE_URL = "https://cinemaguide.skillbox.cc/";

const AppRoutes = {
  Main: "/",
  Genres: "/genres",
  Genre: "/genre",
  Film: "/film/:filmId",
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

const genres = [
  'history',
  'horror',
  'scifi',
  'stand-up',
  'fantasy',
  'drama',
  'mystery',
  'family',
  'comedy',
  'romance',
  'music',
  'crime',
  'tv-movie',
  'documentary',
  'action',
  'thriller',
  'western',
  'animation',
  'war',
  'adventure'
];

 const genresTitle = [
'История',
'Ужасы',
'Научная фантастика',
'Стендап',
'Фэнтези',
'Драма',
'Детектив',
'Семейный',
'Комедия',
'Романтика',
'Музыка',
'Криминал',
'Телефильм',
'Документальный',
'Боевик',
'Триллер',
'Вестерн',
'Анимация',
'Война',
'Приключения'
];

export {
  VALUE_FOR_ACTION,
  AppRoutes,
  ReqRoutes,
  NameSpace,
  BASE_URL,
  QueryStatus,
  genres,
  genresTitle,
};


