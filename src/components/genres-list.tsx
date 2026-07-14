import React from 'react';
import styled from 'styled-components';
import { Genre } from './genre';
import { useFetchMoviesGenreQuery } from '../services/movie-api';


const GenresListEl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 1280px;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

function GenresList() {
  const { data: genres, isSuccess } = useFetchMoviesGenreQuery();


  return (
    <GenresListEl className='genres-list list-reset'>
      {isSuccess && genres.map((genre) => (
        <Genre
          genreImgUrl={`./assets/${genre}.png`}
          genreTitle={genre}
          genre={genre}
        />
      ))}
    </GenresListEl>
  );
}

export { GenresList };
