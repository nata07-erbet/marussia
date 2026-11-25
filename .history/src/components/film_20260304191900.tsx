import React from 'react';
import styled from 'styled-components';
import { IMovie } from '../types/types';

const TopItemItem = styled.li`
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  width: 224px;
  height: 336px;
  box-shadow: 0 0 80px 0 rgba(255, 255, 255, 0.33);
`;

const TopItemImg = styled.img`
  width: 224px;
  height: 336px;
  border-radius: 16px;
`;

const TopItemImgIcon = styled.div`
  position: absolute;
  top: -15px;
  left: -15px;
  border-radius: 50px;
  padding: 8px 24px;
  width: 62px;
  height: 48px;
  background: #fff;
`;

const IconCount = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 133%;
  color: #6a5dc2;
`;
type FilmProps = {
  film: IMovie;
  count: number;
  onClickCardFilm: () => void;
};

function Film({ film, count, onClickCardFilm }: FilmProps) {
  const handleClickCardFilm = () => {
    onClickCardFilm();
  };

  return (
      <TopItemItem
        className='top-10__item card'
        onClick={handleClickCardFilm}
      >
        <TopItemImg
          className='card__img'
          src={film.posterUrl}
        />
        <TopItemImgIcon className='card__icon'>
          <IconCount className='card__count'>{count}</IconCount>
        </TopItemImgIcon>
      </TopItemItem>
  );
}

export { Film };
