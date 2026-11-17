import React, { useState } from 'react';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { SamplePage, SamplePageProps } from './sample-page';
import { FilmsList } from '../components/films-list';
import styled from 'styled-components';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { getRandomItem, runToHoursAndMin } from '../utils/utils';
import { IMovie, IFavorite } from '../types/types';
import { Trailer } from '../components/trailer/trailer';
import { useFetchMoviesRandomQuery } from '../services/movie-api';
import { useNavigate } from 'react-router-dom';


// const YouTubeUrl = 'https://www.youtube.com/embed/jepwfBJVNIA?si=emhhf6gR2oqT52eI';
// const trailerUrl = `${YouTubeUrl}?autoplay=1&mute=1`

const PageMain = styled.main`
  position: relative
  display: block;
  height: 100%;
`;

const FilmWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 32px;
  padding-right: 160px;
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
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 16px;
  padding: 4px 12px;
  width: 70px;
  height: 32px;
  background: #308e21;
`;

const RatingValue = styled.span`
  margin-left: 15px;
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
  background: ${(props) => (props.$film ? '#393b3c' : '#67a5eb')};
  width: ${(props) => (props.$film ? '183px' : '171px')};

  border-radius: 28px;
  border: 0;
  height: 56px;
  font-family: 'Play', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #fff;
`;

const ButtonIcon = styled.button`
  position: relative;
  border: 0;
  border-radius: 28px;
  padding: 16px 22px;
  width: 68px;
  height: 56px;
  background: #333;
`;

const Icon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 34%;
`;

const Star = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 9px;
`;

const SectionTop = styled.section`
  padding-top: 60px;
`;

const TitleTop = styled.h2`
  margin: 0;
  font-weight: 700;
  font-size: 40px;
  line-height: 120%;
  color: #fff;
`;

const FilmsWrapper = styled.div`
  margin-top: 64px;
`;

type MainPageProps = SamplePageProps & {};

function MainPage({ ...props }: MainPageProps) {
  const navigate = useNavigate();
  
  const [movie, setMovie] = useState<IMovie | null>(null);
  const [isShowTailer, setIsShowTailer] = useState(false);
  const {
    data: dataMoviesRandomQuery,
    error,
    status,
    isSuccess,
    refetch
  } = useFetchMoviesRandomQuery();

  const [
    postFavorites,
    { data: favoritesId, isSuccess: favoritesIdIsSuccess }
  ] = usePostFavoritesMutation();


  const handleClickToFilmPage = () => {
    if (isSuccess) {
      const href = `/genres/${dataMoviesRandomQuery.genres[0]}/film/${dataMoviesRandomQuery.id}`;
      navigate(href);
    }
  };
  const handleRestartPage = () => {
    refetch();
  };
  

  const handleOpenTrailer = () => {
    setIsShowTailer(true);
  };

  const handleCloseTrailer = () => {
    setIsShowTailer(false);
  };

  const handleAddToFavorites = (data: IFavorite) => {
    if (loginIsSuccess) {
      if (!isFavorite) {
        postFavorites('2');
        setIsFavorite(true);
      } else {
        setIsFavorite(false);
        // handleDropFavorite(data);
      }
    } else {
      handleClickAuth();
    }
  };

export { MainPage };
