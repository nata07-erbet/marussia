import React from 'react';
import { Film } from './film';
import styled from 'styled-components';
import { moviesJSON } from '../mocks/movies';
import { getFromJsonToMovies } from '../utils/utils';
import { useNavigate } from 'react-router';


const FilmsListEl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;

  width: 1280px;
`;


function FilmsList() {
  const navigate = useNavigate();
  
  const films = getFromJsonToMovies(moviesJSON);

  return (
    <FilmsListEl className='top-10__list list-reset'>
      {films.map((film) => (
        <Film
          key={film.id}
          film={film}
          count={films.indexOf(film) + 1} 
          onClickCardFilm={() => {
            navigate(`/film/${film.id}`);
          }}       
        />
      ))}
    </FilmsListEl>
  );
}

export { FilmsList };
