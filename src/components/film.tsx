import React from "react";
import styled from 'styled-components';
import { IMovie } from '../types/types'

const TopItemItem = styled.li`
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  width: 224px;
  height: 336px;
  box-shadow: 0 0 80px 0 rgba(255, 255, 255, 0.33); 
`;

const TopItemImg = styled.img`
  width: 224px;
  height: 336px;
`;

type  FilmProps = {
  film: IMovie
};

function Film ({film}: FilmProps) {
  const { posterUrl } = film;

    return (
        <TopItemItem className='top-10__item card'>
            <TopItemImg
            className='card__img'
            src={posterUrl}
            />
      </TopItemItem>
    )
}

export { Film }