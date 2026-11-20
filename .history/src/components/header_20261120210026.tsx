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
import { IProfile } from '../types/types';
import { useAuthModal } from '../hooks/useAuthModal';
import { useRegistrationModal } from '../hooks/useRegistrationModal'


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

type HeaderProps = {
  profileData: IProfile | undefined;
};

function Header({ profileData }: HeaderProps) {
  const location = useLocation();

  const [isShowPopUpAuth, setIsShowPopUpAuth] = useState(false);
  const [isShowPopUpRegister, setIsShowPopUpRegister] = useState(false);
  const [ isShowSuccessPopUp, setIsShowSuccessPopUp ] = useState(false);
  const classNavUser = classNames({
    'nav-list__item-link': true,
    active: profileData,
  });

const { postLogin,
  handleClickAuth,
  handleClosePopUpAuth,
  handleAuthSubmit,
  handleClickRegistration } = useAuthModal({ onClickRegistration: () => {
    setIsShowPopUpRegister(true); 
  }, onClickAuthSign: () => {
    setIsShowPopUpAuth(true);
  }
});

  const { 
    handleClosePopUpRegister,
    postData,
    handleClickAuthPass,
    handleRegisterSubmit,
  } = useRegistrationModal({ onClickAuthReg: () => {
    setIsShowPopUpRegister(false)
  }, onSubmitSuccess: () => {
    setIsShowSuccessPopUp(t)
  }});

  const {} = useSuccessModal();

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
               {profileData ? `${profileData}` : 'Войти'}
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
        onClickAuthPass={handleClickAuthPass}
        onSubmit={handleRegisterSubmit}
        postData={(data) => postData(data)}
      />
       <SuccessPopUp
        isActive={isShowSuccessPopUp}
        onClose={handleClosePopUpSuccess}
        onClickEnter={handleClickEnterSuccess}
      /> 
    </>
  );
}

export { Header };
