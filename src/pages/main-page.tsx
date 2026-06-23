import React, { useState } from 'react';
import { SamplePage, SamplePageProps } from './sample-page';
import { FilmsList } from '../components/films-list';
import styled from 'styled-components';
import { Header } from '../components/header';
import { AuthPopUp } from '../components/pop-up/auth-pop-up';
import { RegisterPopUp } from '../components/pop-up/register-pop-up';
import { SuccessPopUp } from '../components/pop-up/success-pop-up';
import { Footer } from '../components/footer'
import {
  getFromJsonToMovies,
  getRandomMovie,
  getRandomItem,
  runToHoursAndMin,
  getFromJsonToUser
} from '../utils/utils';
import { IMovie , IFavorite } from '../types/types';
import { moviesJSON } from '../mocks/movies';
import { useNavigate } from 'react-router';
import { Trailer } from '../components/trailer/trailer';
import { userJSON } from '../mocks/user';
import { BASE_URL, ReqRoutes } from '../const/const';
import axios, { AxiosError} from 'axios';

import { useGetLoginQuery } from '../services/auth-api';


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
  const { data, error, isLoading } = useGetLoginQuery();

  console.log(data);
  
  const user = getFromJsonToUser(userJSON);

  const [movie, setMovie] = useState<IMovie | null>(null);
  const navigate = useNavigate();

  const moviesMock = getFromJsonToMovies(moviesJSON);
  const movieRandomMock = getRandomMovie(moviesMock);

  const [isFavorite, setIsFavorite] = useState(false);
  const [isShowPopUpAuth, setIsShowPopUpAuth] = useState(false);
  const [isShowPopUpRegister, setIsShowPopUpRegister] = useState(false);
  const [isShowSuccessPopUp, setIsShowSuccessPopUp] = useState(false);
  const [isShowTailer, setIsShowTailer] = useState(false);

  const [isAuth, setIsAuth] = useState(false);

  const handleRestartPage = () => {
    // запрос случайного фильма по API
    setMovie(movieRandomMock);
  };

  const handleClickToFilmPage = () => {
    const href = `/genres/${movieRandomMock.genres[0]}/film/${movieRandomMock.id}`;
    navigate(href);
  };

  const handleClosePopUpAuth = () => {
    setIsShowPopUpAuth(false);
  };

  const handleClosePopUpRegister = () => {
    setIsShowPopUpRegister(false);
  };

  const handleClickAuth = () => {
    !isAuth && setIsShowPopUpAuth(true);
  };

  const handlePostFavorites = async(data: IFavorite) => {
    try {
      const result = await axios.post(
        `${BASE_URL}${ReqRoutes.FAVORITES}`,
         data, {
          withCredentials: true
         });
      if(result.status === 200) {
        setIsFavorite(true);
      }
    } catch (error)
     {
      const axiosError = error as AxiosError;
      if(axiosError.response?.status === 400 || axiosError.response?.status === 401) {
        setIsShowPopUpAuth(true);
      };
      throw error;
    } 
  };

  const handleDropFavorite = async(data: IFavorite) => {
    try{
      const result = await axios.get(`${BASE_URL}${ReqRoutes.FAVORITES}/{data}`);
      if(result.status = 200) {
        alert('фильм удален')
      }
    } catch(error) {
        console.log('Ошибка');
    }
  
  };

  const handleClickAuthReg = () => {
    setIsShowPopUpRegister(false);
    setIsShowPopUpAuth(true);
  };

  const handleClickRegistration = () => {
    setIsShowPopUpRegister(true);
    setIsShowPopUpAuth(false);
  };

  const handleClosePopUpSuccess = () => {
    setIsShowSuccessPopUp(false);
  };

  const handleAuthSubmit = () => {
    setIsShowPopUpAuth(false);
    setIsAuth(true);
  };

  const handleClickEnter = () => {
    setIsShowSuccessPopUp(false);
    setIsShowPopUpAuth(true);
    
  };

  const handlePostDataAccount = () => {
    alert('post registration');
  };

  const handleOpenTrailer = () => {
    setIsShowTailer(true);
  };

  const handleCloseTrailer = () => {
    setIsShowTailer(false);
  };

  const handleAddToFavorites = (data: IFavorite) => {
    if (isAuth) {
      if(!isFavorite) {
        handlePostFavorites(data);
      } else {
        handleDropFavorite(data);
      }
     
    } else {
      handleClickAuth();
    }
  };

  const handleRegisterSubmit = () => {
    setIsShowPopUpRegister(false);
    setIsShowSuccessPopUp(true);
  };


  return (
    <SamplePage {...props}>
      <Header
        isAuth={isAuth}
        onClickAuth={handleClickAuth}
      />
      <PageMain className='page-main'>
        <h1 className='page-main__title visually-hidden'>Главная страница</h1>
        <div className='page-main__wrapper wrapper'>
          <Trailer
            isActive={isShowTailer}
            url={`${movieRandomMock.trailerUrl}autoplay=1&mute=1`}
            posterUrl={movieRandomMock.posterUrl}
            title={movieRandomMock.title}
            onClose={handleCloseTrailer}
          />
          <section className='film-random'>
            <FilmWrapper className='film-random__wrapper'>
              <FilmContent className='film-random__content'>
                <div className='film-random__params'>
                  <List className='film-random__list list list-reset'>
                    <Rating className='list__item'>
                      <Star
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
                      </Star>
                      <RatingValue className='list__item-value'>
                        {Math.ceil(movieRandomMock.tmdbRating * 100) / 100}
                      </RatingValue>
                    </Rating>

                    <li className='list__item'>{movieRandomMock.relaseYear}</li>
                    <li className='list__item'>
                      {getRandomItem(movieRandomMock.genres)}
                    </li>
                    <li className='list__item'>
                      {runToHoursAndMin(movieRandomMock.runtime)}
                    </li>
                  </List>
                </div>
                <Title className='film-random__title'>
                  {movieRandomMock.title}
                </Title>
                <Description className='film-random__description'>
                  {movieRandomMock.plot}
                </Description>
                <ButtonContainer className='film-random__button button-action'>
                  <Button
                    className='button-action__item button-action__item--modal-trailer'
                    onClick={handleOpenTrailer}
                  >
                    Трейлер
                  </Button>
                  <Button
                    $film
                    className='button-action__item button-action__item--about'
                    onClick={handleClickToFilmPage}
                  >
                    О фильме
                  </Button>
                  <ButtonIcon
                    className='button-action__item button-action__item--favorites'
                    onClick={() =>handleAddToFavorites(movieRandomMock.id.toString())}
                  >
                    <Icon
                      width='20'
                      height='19'
                      viewBox='0 0 20 19'
                      xmlns='http://www.w3.org/2000/svg'
                      fill={isFavorite ? '#B4A9FF' : 'none'}
                    >
                      <path
                        d='M14.5 0C17.5376 0 20 2.5 20 6C20 13 12.5 17 10 18.5C7.5 17 0 13 0 6C0 2.5 2.5 0 5.5 0C7.35997 0 9 1 10 2C11 1 12.64 0 14.5 0ZM10.9339 15.6038C11.8155 15.0485 12.61 14.4955 13.3549 13.9029C16.3337 11.533 18 8.9435 18 6C18 3.64076 16.463 2 14.5 2C13.4241 2 12.2593 2.56911 11.4142 3.41421L10 4.82843L8.5858 3.41421C7.74068 2.56911 6.5759 2 5.5 2C3.55906 2 2 3.6565 2 6C2 8.9435 3.66627 11.533 6.64514 13.9029C7.39 14.4955 8.1845 15.0485 9.0661 15.6038C9.3646 15.7919 9.6611 15.9729 10 16.1752C10.3389 15.9729 10.6354 15.7919 10.9339 15.6038Z'
                        fill={isFavorite ? '#B4A9FF' : 'none'}
                        stroke={isFavorite ? '#B4A9FF' : 'white'}
                        strokeWidth='1'
                      />
                    </Icon>
                  </ButtonIcon>
                  <ButtonIcon
                    className='button-action__item button-action__item--restart'
                    onClick={handleRestartPage}
                  >
                    <Icon
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 4C14.7486 4 17.1749 5.38626 18.6156 7.5H16V9.5H22V3.5H20V5.99936C18.1762 3.57166 15.2724 2 12 2C6.47715 2 2 6.47715 2 12H4C4 7.58172 7.58172 4 12 4ZM20 12C20 16.4183 16.4183 20 12 20C9.25144 20 6.82508 18.6137 5.38443 16.5H8V14.5H2V20.5H4V18.0006C5.82381 20.4283 8.72764 22 12 22C17.5228 22 22 17.5228 22 12H20Z'
                        fill='white'
                      />
                    </Icon>
                  </ButtonIcon>
                </ButtonContainer>
              </FilmContent>
              <div className='film-random__image random-picture'>
                <img
                  className='random-picture__img'
                  src={movieRandomMock.posterUrl}
                  width='552px'
                  height='680px'
                />
              </div>
            </FilmWrapper>
          </section>
          <SectionTop className='top-10'>
            <TitleTop>Топ 10 фильмов</TitleTop>
            <FilmsWrapper className='top-10__wrapper'>
              <FilmsList />
            </FilmsWrapper>
          </SectionTop>
        </div>
        
      </PageMain>
      <AuthPopUp
            isActive={isShowPopUpAuth}
            onClose={handleClosePopUpAuth}
            onSubmit={handleAuthSubmit}
            onClickRegistration={handleClickRegistration}
          />
          <RegisterPopUp
            isActive={isShowPopUpRegister}
            onClose={handleClosePopUpRegister}
            isError={true}
            onClickPostDataAccount={handlePostDataAccount}
            onClickAuth={handleClickAuthReg}
            onSubmit={handleRegisterSubmit}
          />
      <SuccessPopUp
          isActive={isShowSuccessPopUp}
          onClose={handleClosePopUpSuccess}
          onClickEnter={handleClickEnter}
        />
    <Footer />    
    </SamplePage>
  );
}

export { MainPage };

