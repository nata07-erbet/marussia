import React, { useState } from 'react';
import { Film } from './film';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { BASE_URL, ReqRoutes } from '../const/const';
import { useEffect } from 'react';
import { IMovie } from '../types/types';

const FilmsListEl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 1280px;
`;

function FilmsList() {
  const navigate = useNavigate();


  const [ top10Films, setTop10Films ] = useState<IMovie[]>([]);
  useEffect(() => {
    const loadFilms = async() => {
      const data = await getFilms();
      setTop10Films(data);
    };
    loadFilms();
  }, []);

  const getFilms  = async() => {
    try {
      const result = await axios.get(`${BASE_URL}${ReqRoutes.TOP_10}`);
      if(result.status === 200) {
        return result.data
      }
    } catch (error) {
        throw error
    };
  };


  return (
    <FilmsListEl className='top-10__list list-reset'>
      {top10Films && top10Films
        .map((film) => (
        <Film
          key={film.id}
          film={film}
          count={top10Films.indexOf(film) + 1} 
          onClickCardFilm={() => {
            navigate(`/genres/${film.genres[0]&&film.genres[1]}/film/${film.id}`);
          }}       
        />
      ))}
    </FilmsListEl>
  );
}

export { FilmsList };
