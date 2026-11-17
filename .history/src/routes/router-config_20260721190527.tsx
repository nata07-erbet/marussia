import React from "react";
import { AppRoutes } from "../const/const";
import { MainPage } from "../pages/main-page";
import { Genres } from "../pages/genres-page";
import { GenreFilmsPage } from "../pages/genre-films-page";
import { FilmPage } from "../pages/film-page";
import { UserPage } from "../pages/user-page";

const routerConfig = [
  {
    path: AppRoutes.Main,
    element: <MainPage />,
  },
  {
    path: 'genres/',
    element: <Genres />,
  },
  {
    path: 'genres/:genre',
    element: <GenreFilmsPage />,
  },
  {
    path: 'genres/:genre/film/:filmId',
    element: <FilmPage />,
  },
  {
    path: AppRoutes.Auth,
    element: <UserPage />,
  },
];

export { routerConfig };
