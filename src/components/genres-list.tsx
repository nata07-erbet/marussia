import React from 'react';
import styled from 'styled-components';
import { Genre } from './genre';
import { genres } from '../const/const';
import { translate } from '../utils/utils';
import {  href, useNavigate } from 'react-router';

import { filmsByGenreJSON } from '../mocks/filmsByGenre';
import { getFromJsonToObj, getGenresUrl, getRandomItem } from '../utils/utils';

const filmsByGenre = getFromJsonToObj(filmsByGenreJSON);
const genreImagesUrl = getGenresUrl(filmsByGenre);

const GenresListEl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  width: 1280px;
`;

function GenresList() {
  const navigate = useNavigate();

  const handleClickGenre = (genre: string) => {
    navigate(`/${genre}`);
  };

  return (
   <GenresListEl className='genres-list list-reset'>
    {genres.map((genre) => (
      <Genre 
        genreImgUrl={getRandomItem(genreImagesUrl)} 
        genreTitle={translate(genre)} 
        genre={genre}
        onClickGenre={handleClickGenre}
      />
    ))}
   </GenresListEl>
  );
}

export { GenresList };
