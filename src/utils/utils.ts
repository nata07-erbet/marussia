import { IMoviesByGenre, IMovie, IUser } from '../types/types';

const translate = (genre: string) => {
  switch (genre) {
    case 'history':
      return 'История';
    case 'horror':
      return 'Ужасы';
    case 'scifi':
      return 'Научная фантастика';
    case 'stand-up':
      return 'Стендап';
    case 'fantasy':
      return 'Фэнтези';
    case 'drama':
      return 'Драма';
    case 'mystery':
      return 'Детектив';
    case 'family':
      return 'Семейный';
    case 'comedy':
      return 'Комедия';
    case 'romance':
      return 'Романтика';
    case 'music':
      return 'Музыка';
    case 'crime':
      return 'Криминал';
    case 'tv-movie':
      return 'Телефильм';
    case 'documentary':
      return 'Документальный';
    case 'action':
      return 'Боевик';
    case 'thriller':
      return 'Триллер';
    case 'western':
      return 'Вестерн';
    case 'animation':
      return 'Анимация';
    case 'war':
      return 'Война';
    case 'adventure':
      return 'Приключения';
    default:
      return 'Неизвестный жанр';
  }
};

const getFromJsonToObj = (dataJSON: string): IMoviesByGenre[] => {
  const moviesByGenre = JSON.parse(dataJSON);

  return moviesByGenre;
};

const getFromJsonToMovies = (dataJSON: string): IMovie[] => {
  const movies = JSON.parse(dataJSON);

  return movies;
};

const getFromJsonToUser = (dataJSON: string): IUser => {
  const user = JSON.parse(dataJSON);

  return user;
};

const getRandomItem = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomMovie = (movies: IMovie[]) => {
  return movies[Math.floor(Math.random() * movies.length)];
};

const getGenresUrl = (arr: IMoviesByGenre[]): string[] => {
  return arr.filter((film) => film.backdropUrl).map((film) => film.backdropUrl);
};

const runToHoursAndMin = (runtime: number) => {
  const hours = Math.floor(runtime / 60);
  const min = runtime % 60;

   const result  = `${hours} ч ${min} мин `;
   return result;
};

const buildNewURL = (trailerUrl: string) => {
  //https://www.youtube.com/watch?v=VIDEO_ID `${movie.trailerUrl}autoplay=1&mute=1`
  // https://www.youtube.com/embed/VIDEO_ID
    const BASE_URL = 'https://www.youtube.com';
    const EMBED = 'embed';
    const newUrl = new URL (trailerUrl);
    const videoId = newUrl.searchParams.get('v');

    if (!videoId) return trailerUrl;

    const embedURL = new URL(`${BASE_URL}/${EMBED}/${videoId}`);
    embedURL.searchParams.set('autoplay', '1');
    embedURL.searchParams.set('mute', '1');

    return embedURL.toString();
  };

export {
  translate,
  getFromJsonToObj,
  getRandomItem,
  getGenresUrl,
  getRandomMovie,
  getFromJsonToMovies,
  runToHoursAndMin, 
  getFromJsonToUser,
  buildNewURL
};
