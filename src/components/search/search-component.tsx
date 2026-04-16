import React from 'react';
import styled from 'styled-components';
import { IMovie } from '../../types/types';


const Item = styled.li`
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 6px;
  padding: 20px 8px;
  width: 543px;
  height: 92px;
`;

const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 16px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const About = styled.div`
  display: flex;
  gap: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #fff;
`;

const Rating = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 2px 8px;
  width: 47px;
  height: 20px;
  background: #308e21;
`;
const RatingValue = styled.span`
  margin-left: 10px;
  font-weight: 700;
  font-size: 12px;
  line-height: 133%;
  color: #fff;
`;

const Svg = styled.svg`
  position: absolute;
  left: 6px;
`;

type SearchComponentProps = {
  film: IMovie;
  onClickToFilm: (id: IMovie['id']) => void;
};

function SearchComponent({ film, onClickToFilm }: SearchComponentProps) {
  const handleClickToFilm = (id: IMovie['id']) => {
    onClickToFilm(id);
  };
  
  return (
    <Item className='search-item' onClick={() => handleClickToFilm(film.id)}>
      <ItemWrapper className='search-item__wrapper'>
        <img
          className='search-item__img'
          src={film.backdropUrl}
          width='42px'
          height='50px'
        />
        <Content className='search-item__content'>
          <About className='search-item__content-about about'>
            <Rating className='about__rating'>
              <Svg
                width='10'
                height='10'
                viewBox='0 0 10 10'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clip-path='url(#clip0_178445_1650)'>
                  <path
                    d='M5.00041 7.60831L2.06148 9.2534L2.71786 5.94994L0.245117 3.66323L3.58972 3.26667L5.00041 0.208313L6.41108 3.26667L9.75566 3.66323L7.28295 5.94994L7.93933 9.2534L5.00041 7.60831Z'
                    fill='white'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_178445_1650'>
                    <rect
                      width='10'
                      height='10'
                      fill='white'
                    />
                  </clipPath>
                </defs>
              </Svg>
              <RatingValue>
                {Math.ceil(film.tmdbRating * 100) / 100}
              </RatingValue>
            </Rating>
            <div className='about__year'>
              {film.relaseYear || film.releaseYear}
            </div>
            <div className='about__genre'>{film.genres[0]}</div>
            <div className='about__timing'>{film.runtime}</div>
          </About>
          <Title className='search-item__content-title'>{film.title}</Title>
        </Content>
      </ItemWrapper>
    </Item>
  );
}

export { SearchComponent };
