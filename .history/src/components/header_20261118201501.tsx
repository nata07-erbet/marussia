import { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router';
import { AppRoutes, NavMap } from '../const/const';
import { Search } from './search/search';
import classNames from 'classnames';
import { useGetProfileQuery } from '../services/auth-api';
import {
  usePostLoginMutation,
  usePostRegistrationDataMutation
} from '../services/auth-api';
import { AuthPopUp } from '../components/pop-up/auth-pop-up';
import { RegisterPopUp } from '../components/pop-up/register-pop-up';
import { SuccessPopUp } from '../components/pop-up/success-pop-up';
import { IFavorite } from '../types/types';


const HeaderComp = styled.header`
  height: 96px;
  padding: 24px 0px;
  backdrop-filter: blur(20px);
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const List = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
`;

const Logo = styled.a`
  width: 143px;
  height: 31px;
`;

const LinkNav = styled.a`
  text-decoration: none;
  font-family: 'Play', sans-serif, 'Open Sans', sans-serif;
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  color: #fff;
`;


function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const { data: dataProfile, isSuccess: getProfileSuccess } = useGetProfileQuery();

  const [postData, { isSuccess: dataRegistrationSuccess }] =
    usePostRegistrationDataMutation();

  
  const [
    postLogin,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess
    }
  ] = usePostLoginMutation();

  const [isShowPopUpAuth, setIsShowPopUpAuth] = useState(false);
  const [isShowPopUpRegister, setIsShowPopUpRegister] = useState(false);
  const [isShowSuccessPopUp, setIsShowSuccessPopUp] = useState(false);


  const handleClosePopUpRegister = () => {
    setIsShowPopUpRegister(false);
  };

  const handleClickAuth = () => {
    if (loginIsSuccess) {
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

  const handleClosePopUpAuth = () => {
    setIsShowPopUpAuth(false);
  };

  const handleRegisterSubmit = () => {
    if (dataRegistrationSuccess) {
      setIsShowPopUpRegister(false);
      setIsShowSuccessPopUp(true);
    } else {
      return;
    }
  };
 
  const classNavUser = classNames({
    'nav-list__item-link': true,
    active: getProfileSuccess
  });

  return (
    <>
      <HeaderComp className='page-header'>
        <div className='page-header__ wrapper wrapper'>
          <HeaderContainer className='page-header__container'>
            <Logo
              className='page-header__logo'
              href={AppRoutes.Main}
            >
              <img src='/assets/marussia-white.png' />
            </Logo>
            <nav className='page-header__nav header-navigation'>
              <List className='header-navigation__list nav-list list-reset'>
                {NavMap.map((nav) => {
                  const classNavItem = classNames({
                    'nav-list__item-link': true,
                    active:
                      location.pathname === nav.to ||
                      location.pathname.startsWith(`${nav.to}/`)
                  });
                  return (
                    <li
                      className='nav-list__item'
                      key={nav.name}
                    >
                      <LinkNav
                        className={classNavItem}
                        href={nav.to}
                      >
                        {nav.name}
                      </LinkNav>
                    </li>
                  );
                })}
              </List>
            </nav>
            <Search />
            <LinkNav
              className={classNavUser}
              onClick={handleClickAuth}
            >
              {!getProfileSuccess ? 'Войти' : `${dataProfile?.name}`}
            </LinkNav>
          </HeaderContainer>
        </div>
      </HeaderComp>
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
    </>
  );
}


export { Header };
