import React, { useState } from 'react';
import { PropsWithChildren } from 'react';
import { SamplePage } from './sample-page';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { Header } from '../components/header';
import { moviesJSON } from '../mocks/movies';
import {
  getRandomItem,
  runToHoursAndMin,
  getFromJsonToMovies
} from '../utils/utils';
import { Trailer } from '../components/trailer/trailer';

type FilmPageProps = PropsWithChildren<{}>;

const FilmWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 80px;
  padding-bottom: 120px;
`;

const FilmContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 356px;
  margin-top: 74px;
  gap: 16px;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-content: center;
  align-items: center;
  gap: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 133%;
  color: rgba(255, 255, 255, 0.7);
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 48px;
  line-height: 117%;
  color: #fff;
  margin: 0;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
`;

const Rating = styled.li`
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 4px 12px;
  width: 70px;
  height: 32px;
  background: #308e21;
`;

const RatingValue = styled.span`
  margin-left: 5px;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #fff;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  gap: 16px;
  margin-top: 60px;
`;

const Button = styled.button<{ $film?: boolean }>`
  background: #67a5eb;
  width: 171px;
  border-radius: 28px;
  border: 0;
  height: 56px;
  font-family: 'Play', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #fff;
`;

const ButtonFavorites = styled.button`
  position: relative;
  border: 0;
  border-radius: 28px;
  padding: 22px 16px;
  width: 68px;
  height: 56px;
  background: #333;
`;

const Icon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 25px;
`;

const ImgWrapper = styled.div`
  width: 680px;
  height: 552px;
  overflow: hidden;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 20px 24px;
  max-width: 720px;
  margin: 0;
`;

const Label = styled.div`
  position: relative;
  color: rgba(255, 255, 255, 0.7);

  &::after {
    content: '';
    position: absolute;
    left: calc(100% + 12px);
    right: 0;
    top: 50%;
    height: 1px;

    background: repeating-linear-gradient(
      to right,
      rgba(255, 255, 255, 0.35) 0 4px,
      transparent 4px 8px
    );

    transform: translateY(-50%);
  }
`;

const Value = styled.div``;

function FilmPage(props: FilmPageProps) {
  const [isShowTailer, setIsShowTailer] = useState(false);
  const moviesMock = getFromJsonToMovies(moviesJSON);
  const { filmId } = useParams();

  const getMovie = () => {
    // запрос к рандомному фильму
    const moviesMockById = moviesMock.filter((movie) => movie.id);
    const movieMock = moviesMockById.find(
      (movie) => movie.id === Number(filmId)
    );
    return movieMock;
  };

  const movie = getMovie();

  const handleClickAuth = () => {
    //??
  };
  const handleCloseTrailer = () => {
    setIsShowTailer(false);
  };

  const handleOpenTrailer = () => {
    setIsShowTailer(true);
  };


  return (
    <SamplePage {...props}>
      <Header
        isUserPage={false}
        username={''}
        isActiveIndex={true}
        onClickAuth={handleClickAuth}
      />
      {movie && (
        <>
          <section className='film'>
            <Trailer
              isActive={isShowTailer}
              url={`${movie.trailerUrl}autoplay=1&mute=1`}
              posterUrl={movie.posterUrl}
              title={movie.title}
              onClose={handleCloseTrailer}
            />
            <FilmWrapper className='film__wrapper'>
              <FilmContent className='film__content'>
                <div className='film__params'>
                  <List className='film__list list list-reset'>
                    <Rating className='list__item'>
                      <svg
                        width='16'
                        height='15'
                        viewBox='0 0 16 15'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M7.60847 11.84L2.90617 14.4721L3.95639 9.1866L0 5.52787L5.35136 4.89337L7.60847 0L9.86554 4.89337L15.2169 5.52787L11.2605 9.1866L12.3107 14.4721L7.60847 11.84Z'
                          fill='white'
                        />
                      </svg>
                      <RatingValue className='list__item-value'>
                        {Number(movie.tmdbRating.toFixed(1))}
                      </RatingValue>
                    </Rating>

                    <li className='list__item'>{movie.relaseYear}</li>
                    <li className='list__item'>
                      {getRandomItem(movie.genres)}
                    </li>
                    <li className='list__item'>
                      {runToHoursAndMin(movie.runtime)}
                    </li>
                  </List>
                </div>
                <Title className='film-random__title'>{movie.title}</Title>
                <Description className='film-random__description'>
                  {movie.plot}
                </Description>
                <ButtonContainer className='film-random__button button-action'>
                  <Button className='button-action__item button-action__item--modal-trailer' onClick={handleOpenTrailer}>
                    Трейлер
                  </Button>
                  <ButtonFavorites className='button-action__item button-action__item--favorites'>
                    <Icon
                      width='20'
                      height='19'
                      viewBox='0 0 20 19'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.9339 15.6038C11.8155 15.0485 12.61 14.4955 13.3549 13.9029C16.3337 11.533 18 8.9435 18 6C18 3.64076 16.463 2 14.5 2C13.4241 2 12.2593 2.56911 11.4142 3.41421L10 4.82843L8.5858 3.41421C7.74068 2.56911 6.5759 2 5.5 2C3.55906 2 2 3.6565 2 6C2 8.9435 3.66627 11.533 6.64514 13.9029C7.39 14.4955 8.1845 15.0485 9.0661 15.6038C9.3646 15.7919 9.6611 15.9729 10 16.1752C10.3389 15.9729 10.6354 15.7919 10.9339 15.6038Z'
                        fill='white'
                      />
                    </Icon>
                  </ButtonFavorites>
                </ButtonContainer>
              </FilmContent>
              <div className='film-random__image random-picture'>
                <ImgWrapper>
                  <Img
                    className='random-picture__img'
                    src={movie.posterUrl}
                  />
                </ImgWrapper>
              </div>
            </FilmWrapper>
          </section>
          <section className='about'>
            <h2>О фильме</h2>
            <Wrapper className='wrapper'>
              <Label>Язык оригинала</Label>
              <Value>{movie.language}</Value>

              <Label>Бюджет</Label>
              <Value>{Number(movie.budget).toLocaleString()} руб.</Value>

              <Label>Выручка</Label>
              <Value>{Number(movie.revenue).toLocaleString()} руб.</Value>

              <Label>Режиссёр</Label>
              <Value>{movie.director}</Value>

              <Label>Продакшен</Label>
              <Value>{movie.production}</Value>

              <Label>Награды</Label>
              <Value>{movie.awardsSummary}</Value>
            </Wrapper>
          </section>
        </>
      )}
    </SamplePage>
  );
}

export { FilmPage };
