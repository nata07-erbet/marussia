import React from 'react';
import { Film } from './film';
import styled from 'styled-components';
import { Genre } from './genre';

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

const translate = (genre: string) => {
  switch (genre) {
    case 'history': return 'История';
    case 'horror': return 'Ужасы';
    case 'scifi': return 'Научная фантастика';
    case 'stand-up': return 'Стендап';
    case 'fantasy': return 'Фэнтези';
    case 'drama': return 'Драма';
    case 'mystery': return 'Детектив';
    case 'family': return 'Семейный';
    case 'comedy': return 'Комедия';
    case 'romance': return 'Романтика';
    case 'music': return 'Музыка';
    case 'crime': return 'Криминал';
    case 'tv-movie': return 'Телефильм';
    case 'documentary': return 'Документальный';
    case 'action': return 'Боевик';
    case 'thriller': return 'Триллер';
    case 'western': return 'Вестерн';
    case 'animation': return 'Анимация';
    case 'war': return 'Война';
    case 'adventure': return 'Приключения';
    default: return 'Неизвестный жанр';
  }
};

const GenresListEl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 1280px;
`;

function GenresList() {
  return (
   <GenresListEl className='genres-list list-reset'>
    {genres.map((genre) => (
      <Genre genreUrl={''} genreTitle={translate(genre)}      
      />
    ))}
   </GenresListEl>
  );
}

export { GenresList };
