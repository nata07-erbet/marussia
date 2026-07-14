import React, { useState } from 'react';
import { SamplePage } from './sample-page';
import type { SamplePageProps } from './sample-page';
import styled from 'styled-components';
import { GenresList } from '../components/genres-list';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { AppRoutes } from '../const/const';
import { AuthPopUp } from '../components/pop-up/auth-pop-up';
import { RegisterPopUp } from '../components/pop-up/register-pop-up';
import { SuccessPopUp } from '../components/pop-up/success-pop-up';
import { useNavigate } from 'react-router';
import {
  usePostLoginMutation,
  usePostRegistrationDataMutation
} from '../services/auth-api';

const Wrapper = styled.section`
  
`;
const Title = styled.h1`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 48px;
  line-height: 117%;
  color: #fff;
`;

const FilmsWrapper = styled.div`
  margin-top: 64px;
`;

type GenresProps = SamplePageProps & {};

function Genres({ ...props }: GenresProps) {
  const navigate = useNavigate();

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
        isAuth={loginIsSuccess}
        onClickAuth={handleClickAuth}
      />
      <Wrapper className='top-10'>
        <Title>Жанры фильмов</Title>
        <FilmsWrapper className='top-10__wrapper'>
          <GenresList/>
        </FilmsWrapper>
      </Wrapper>
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

export { Genres };
