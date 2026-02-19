import React from 'react';
import styled from 'styled-components';
import { Genre } from './genre';
import { genres, AppRoutes } from '../const/const';
import { translate } from '../utils/utils';

import { filmsByGenreJSON } from '../mocks/filmsByGenre';
import { getFromJsonToObj, getGenresUrl, getRandomItem } from '../utils/utils';

const filmsByGenre = getFromJsonToObj(filmsByGenreJSON);
const genreImagesUrl = getGenresUrl(filmsByGenre);

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
  return (
    <GenresListEl className='genres-list list-reset'>
      {genres.map((genre) => (
        <Genre
          genreImgUrl={getRandomItem(genreImagesUrl)}
          genreTitle={translate(genre)}
          genre={genre}
        />
      ))}
    </GenresListEl>
  );
}

export { GenresList };
