import React from 'react';
import { Link } from 'react-router-dom';
import { IMovie } from '../types/types';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

type FilmByGenreProps = {
  filmByGenre: IMovie;
  hrefFilmPage: string
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


function FilmByGenre({ filmByGenre, hrefFilmPage  }: FilmByGenreProps) {
  const { posterUrl, id } = filmByGenre;

  return (
    <FilmByGenreEl>
      <Link to={hrefFilmPage}>
        <Poster src={posterUrl} />
      </Link>
    </FilmByGenreEl>
  );
}

export { FilmByGenre };
