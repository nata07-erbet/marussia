import React, { useState } from 'react';
import { SamplePage, SamplePageProps } from './sample-page';
import { GenreFilmsList } from '../components/genre-films-list';
import styled from 'styled-components';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { useNavigate, useParams } from 'react-router';
import { AppRoutes } from '../const/const';
import { AuthPopUp } from '../components/pop-up/auth-pop-up';
import { RegisterPopUp } from '../components/pop-up/register-pop-up';
import { SuccessPopUp } from '../components/pop-up/success-pop-up';
import {
  usePostLoginMutation,
  usePostRegistrationDataMutation
} from '../services/auth-api';
import { useFetchMoviesByGenreQuery } from '../services/movie-api';


type GenreFilmsPageProps = SamplePageProps & {};

const TitleOfGenre = styled.h2`
  position: relative;
  font-weight: 700;
  font-size: 48px;
  line-height: 117%;
  color: #fff;
  margin-left: 30px;
`;

const IconTitle = styled.svg`
  position: absolute;
  top: 22%;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 64px;
`;

const Button = styled.button`
  border-radius: 28px;
  border: 0;
  width: 218px;
  height: 56px;
  background: #67a5eb;
`;

const TextButton = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 133%;
  color: #fff;
`;


function GenreFilmsPage({ ...props }: GenreFilmsPageProps) {
  const params = useParams();
  const { genre } = params;

  const navigate = useNavigate();

 const { data, isSuccess } = useFetchMoviesByGenreQuery(genre);

  const [isShowPopUpAuth, setIsShowPopUpAuth] = useState(false);
  const [isShowPopUpRegister, setIsShowPopUpRegister] = useState(false);
  const [isShowSuccessPopUp, setIsShowSuccessPopUp] = useState(false);

  const [
    postLogin,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess
    }
  ] = usePostLoginMutation();

  const [
    postData,
    { isSuccess: dataRegistrationSuccess }
  ] = usePostRegistrationDataMutation();
  
  const handleRegisterSubmit = () => {
    if (dataRegistrationSuccess) {
      setIsShowPopUpRegister(false);
      setIsShowSuccessPopUp(true);
    } else {
      return;
    }
  };

  const handleClosePopUpAuth = () => {
    setIsShowPopUpAuth(false);
  };

  const handleClosePopUpRegister = () => {
    setIsShowPopUpRegister(false);
  };

  const handleClickAuth = () => {
    if(loginIsSuccess) {
      navigate(AppRoutes.Auth);
    } else {
      setIsShowPopUpAuth(true);
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
  };

  const handleClickEnter = () => {
    setIsShowSuccessPopUp(false);
    setIsShowPopUpAuth(true);
  };


  return (
    <SamplePage {...props}>
      <Header
        isAuth={false}
        onClickAuth={handleClickAuth}
      />
      <section className='genre-films'>
        <IconTitle
          width='13'
          height='22'
          viewBox='0 0 13 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M4.714 10.6066L12.9637 18.8561L10.6067 21.2131L0 10.6066L10.6067 0L12.9637 2.35702L4.714 10.6066Z'
            fill='white'
          />
        </IconTitle>
        <TitleOfGenre className='genre-films__title'>
          {genre}
        </TitleOfGenre>
        <GenreFilmsList films={data} />
        <WrapperButton>
          <Button
            className='genre-films'
            type='button'
          >
            <TextButton>Показать ещё</TextButton>
          </Button>
        </WrapperButton>
      </section>
      <AuthPopUp
        isActive={isShowPopUpAuth}
        onClose={handleClosePopUpAuth}
        onSubmit={handleAuthSubmit}
        onClickRegistration={handleClickRegistration}
        postLogin={postLogin}
      />
      <RegisterPopUp
        isActive={isShowPopUpRegister}
        onClose={handleClosePopUpRegister}
        onClickAuth={handleClickAuthReg}
        onSubmit={handleRegisterSubmit}
        postData={(data) => postData(data)}
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

export { GenreFilmsPage };
