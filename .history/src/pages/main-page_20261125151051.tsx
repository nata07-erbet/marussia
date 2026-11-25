import styled from 'styled-components';
import { QueryStatus } from '@reduxjs/toolkit/query';
import { FilmRandom } from '../components/film-random';
import { FilmsList } from '../components/films-list';
import { useFetchMoviesRandomQuery } from '../services/movie-api';

// const YouTubeUrl = 'https://www.youtube.com/embed/jepwfBJVNIA?si=emhhf6gR2oqT52eI';
// const trailerUrl = `${YouTubeUrl}?autoplay=1&mute=1`

const PageMain = styled.main`
  position: relative
  display: block;
  height: 100%;
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
  const {
    data: dataMoviesRandomQuery,
    isLoading,
    error,
    refetch
  } = useFetchMoviesRandomQuery();

  const movieId = dataMoviesRandomQuery && dataMoviesRandomQuery.id;

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
            <FilmRandom
              movieRandom={dataMoviesRandomQuery}
              onClickRefetch={refetch}
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
