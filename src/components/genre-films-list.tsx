import React from 'react';
import { FilmByGenre } from './film-by-genre';
import styled from 'styled-components';
import { IMovie } from '../types/types';

const GenreFilmsListEl = styled.ul`
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  padding-left: 0;
`;
type GenreFilmsListProps = {
  films: IMovie[] | undefined;
};
function GenreFilmsList({ films }: GenreFilmsListProps) {
  return (
    <GenreFilmsListEl>
      {films &&
        films.map((film) => (
          <FilmByGenre
            filmByGenre={film}
            hrefFilmPage={`film/${film.id}`}
            key={film.id}
          />
        ))}
    </GenreFilmsListEl>
  );
}

export { GenreFilmsList };
