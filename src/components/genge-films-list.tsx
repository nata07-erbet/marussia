import React from 'react';
import { filmsByGenreJSON } from '../mocks/filmsByGenre';
import { getFromJsonToObj } from '../utils/utils';
import { FilmByGenre } from './film-by-genre';
import styled from 'styled-components';

const filmsByGenre = getFromJsonToObj(filmsByGenreJSON);

const GenreFilmsListEl = styled.ul`
    display:flex;
    gap: 40px;
    flex-wrap: wrap;
`;

function GenreFilmsList() {
  return (
    <GenreFilmsListEl> 
        {filmsByGenre.map((film) =>(
            <FilmByGenre filmByGenre={film} />
        ))}
    </GenreFilmsListEl>
  );
}

export { GenreFilmsList };
