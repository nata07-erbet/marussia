import React from 'react';
import { Link } from 'react-router-dom';
import { IMoviesByGenre } from '../types/types';
import styled from 'styled-components';

type FilmByGenreProps = {
  filmByGenre: IMoviesByGenre;
};

const FilmByGenreEl = styled.li`
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    width: 224px;
    height: 336px;
    box-shadow: 0 0 80px 0 rgba(255, 255, 255, 0.33);

`;

const Poster = styled.img`
    width: 224px;
    height: 336px;
`;


function FilmByGenre({ filmByGenre }: FilmByGenreProps) {
  const { posterUrl, id } = filmByGenre;

  const hrefFilmPage = `/film/${id}`;

  return (
    <FilmByGenreEl>
      <Link to={hrefFilmPage}>
        <Poster src={posterUrl} />
      </Link>
    </FilmByGenreEl>
  );
}

export { FilmByGenre };
