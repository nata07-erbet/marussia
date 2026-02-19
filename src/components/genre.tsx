import React from 'react';
import styled from 'styled-components';
import { NavLink, generatePath, useNavigate } from 'react-router-dom';
import { AppRoutes } from '../const/const';

type GenreProps = {
  genreImgUrl: string;
  genreTitle: string;
  genre: string;
  onClickGenre: (genreCheck: string) => void;
};

const GenreBlock = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  width: 290px;
  height: 304px;

  box-shadow: 0 0 80px 0 rgba(255, 255, 255, 0.33);
  background: #0a0b0b;
`;

const GenreImg = styled.img`
  display: block;
  width: 290px;
  height: 220px;
  background-color: green;
`;
const GenreTitleEl = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  text-align: center;
  color: #fff;
`;

function Genre({ genreImgUrl, genreTitle, genre }: GenreProps) {
  const navigate = useNavigate();

  const handleClickGenre = (genre: string) => {
    const path = genre
      ? generatePath(`${AppRoutes.Genres}/:genre`, {
          genre: genre
        })
      : AppRoutes.Genres;

    navigate(path);
  };

  return (
    <GenreBlock className='genre'>
      <a
        href="#"
        onClick={() => handleClickGenre(genre)}
      >
        <GenreImg
          className='genre__name'
          src={genreImgUrl}
        />
        <div className='genre__name__title'>
          <GenreTitleEl>{genreTitle}</GenreTitleEl>
        </div>
      </a>
    </GenreBlock>
  );
}

export { Genre };
