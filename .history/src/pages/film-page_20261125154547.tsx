import  { useState } from 'react';
import { useNavigate } from 'react-router';
import { PropsWithChildren } from 'react';
import { SamplePage } from './sample-page';
import { useParams } from 'react-router';
import styled from 'styled-components';
import { buildNewURL } from '../utils/utils';
import { MovieContent }
import { Trailer } from '../components/trailer/trailer';
import { useFetchMovieByIdQuery } from '../services/movie-api';
import { skipToken } from '@reduxjs/toolkit/query';

type FilmPageProps = PropsWithChildren<{}>;

const FilmWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-top: 80px;
  padding-bottom: 120px;
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
  const navigate = useNavigate();
  const { filmId } = useParams();

  const [isShowTailer, setIsShowTailer] = useState(false);

  const movieId = parseInt(filmId!, 10);

  const { data: movie, isSuccess: movieSuccess} = useFetchMovieByIdQuery(movieId ?? skipToken);

  const handleOpenTrailer = () => {
    setIsShowTailer(true);
  };

  const handleCloseTrailer = () => {
    setIsShowTailer(false);
  };

  return (
    <SamplePage {...props}>
      {movie && (
        <>
          <section className='film'>
            <Trailer
              isActive={isShowTailer}
              url={buildNewURL(movie.trailerUrl)}
              posterUrl={movie.posterUrl}
              title={movie.title}
              onClose={handleCloseTrailer}
            />
            <FilmWrapper className='film__wrapper'>

             //

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
