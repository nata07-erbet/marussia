import { createAction } from '@reduxjs/toolkit';
import { NameSpace } from '../const/const';
import type  { 
    IFavorite, 
    IAuthInfo, 
    IMovie
} from '../types/types'


const login = createAction<IAuthInfo>(`${NameSpace.User}/login`); //async
const logout = createAction(`${NameSpace.User}/logout`); //async
const fetchProfile = createAction(`${NameSpace.User}/profile`) //async

const checkAuth = createAction<IAuthInfo>(`${NameSpace.Auth}/checkAuth`) //async

const fetchFavorites = createAction(`${NameSpace.Favorites}/fetchFavorites`); ////async;
const addFavorites = createAction<IFavorite[]>(`${NameSpace.Favorites}/addFavorites`); ///async;
const delFavoriteFilm = createAction<IFavorite>(`${NameSpace.Favorites}/delFavoriteFilm`) //async;

const fetchMovies = createAction(`${NameSpace.Movies}/fetchMovies`); //async
const fetchMoviesTop = createAction(`${NameSpace.Movies}/fetchMoviesTop`); //async

const fetchMovie = createAction<IMovie['id']>(`${NameSpace.Movie}/fetchMovie`); //async
const fetchMovieRandom = createAction(`${NameSpace.Movie}/fetchMovieRandom`); //async

const fetchGenre = createAction(`${NameSpace.Genres}/fetchGenre`);


