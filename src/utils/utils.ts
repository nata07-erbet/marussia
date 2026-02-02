import { IMoviesByGenre } from '../types/types';

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

const getRandomItem = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getGenresUrl = (arr: IMoviesByGenre[]): string[] => {
  return arr.filter((film) => film.backdropUrl).map((film) => film.backdropUrl);
};

export { translate, getFromJsonToObj, getRandomItem, getGenresUrl };
