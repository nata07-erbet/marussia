import { useEffect, useState } from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { FilmsList } from '../components/films-list';
import { getRandomItem, runToHoursAndMin } from '../utils/utils';
import { Trailer } from '../components/trailer/trailer';
import { useFetchMoviesRandomQuery } from '../services/movie-api';
import { useFavoriteToggle } from '../hooks/useFavoriteToggle';
import { IProfile } from '../types/types';
import { useTrailerShow } from '../hooks/useTrailerShow';

// const YouTubeUrl = 'https://www.youtube.com/embed/jepwfBJVNIA?si=emhhf6gR2oqT52eI';
// const trailerUrl = `${YouTubeUrl}?autoplay=1&mute=1`

const PageMain = styled.main`
  position: relative
  display: block;
  height: 100%;
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

function MainPage() {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isShowTailer, setIsShowTailer] = useState(false);

  const { data } = useOutletContext<{ data: IProfile }>();

  const { handleAddToFavorites } = useFavoriteToggle({
    isAuthenticated: true, //!!data
    onClickFavorite: () => setIsFavorite(true),
    onClickAuth: () => console.log('Show pop-up-auth')
  });

  const { handleOpenTrailer, handleCloseTrailer } = useTrailerShow({
    onShowTailer: () => setIsShowTailer(true),
    onCloseTailer: () => setIsShowTailer(false)
  });

  const {
    data: dataMoviesRandomQuery,
    error,
    status,
    isSuccess,
    refetch
  } = useFetchMoviesRandomQuery();

  const movieId = dataMoviesRandomQuery && dataMoviesRandomQuery.id;
  console.log(movieId);

  const handleClickToFilmPage = () => {
    if (isSuccess) {
      const href = `/genres/${dataMoviesRandomQuery.genres[0]}/film/${dataMoviesRandomQuery.id}`;
      navigate(href);
    }
  };

  const handleRestartPage = () => {
    refetch();
  };

  return (
    <>
      {status === QueryStatus.pending && <div>Loading</div>}
      {status === QueryStatus.rejected && (
        <div>
          {error && 'status' in error ? `Error: ${error.status}` : 'Wrong'}
        </div>
      )}
      {status === QueryStatus.fulfilled && dataMoviesRandomQuery && (
        <PageMain className='page-main'>
          <h1 className='page-main__title visually-hidden'>Главная страница</h1>
          <div className='page-main__wrapper wrapper'>
            <Trailer
              isActive={isShowTailer}
              url={`${dataMoviesRandomQuery.trailerUrl}autoplay=1&mute=1`}
              posterUrl={dataMoviesRandomQuery.posterUrl}
              title={dataMoviesRandomQuery.title}
              onClose={handleCloseTrailer}
            />
           
            <SectionTop className='top-10'>
              <TitleTop>Топ 10 фильмов</TitleTop>
              <FilmsWrapper className='top-10__wrapper'>
                <FilmsList />
              </FilmsWrapper>
            </SectionTop>

          </div>
        </PageMain>
      )}
    </>
  );
}

export { MainPage };
