import React from 'react';
import { createBrowserRouter } from 'react-router';
import { AppRoutes } from '../const/const';
import { MainPage } from '../pages/main-page';
import { Genres } from '../pages/genres-page';
import { GenreFilmsPage } from '../pages/genre-films-page';
import { MoviePage } from '../pages/movie-page';
import { UserPage } from '../pages/user-page';

const routerConfig =  [
    {
        path: AppRoutes.Main,
        element: <MainPage />
    },
    {
        path: AppRoutes.Genres,
        element: <Genres />
    },
    {
        path: AppRoutes.Genre,
        element: <GenreFilmsPage />
    }, 
    {
        path: AppRoutes.Film,
        element: <MoviePage />
    },
    {
        path: AppRoutes.Auth,
        element: <UserPage />
    }
];

export { routerConfig };