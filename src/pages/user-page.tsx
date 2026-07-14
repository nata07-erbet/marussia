import React, { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { useNavigate } from 'react-router';
import { useGetProfileQuery, useGetLogoutQuery } from '../services/auth-api';
import { useGetFavoritesQuery } from '../services/favorites-api';
import { GenreFilmsList } from '../components/genre-films-list';
import { SamplePage, SamplePageProps } from './sample-page';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Account } from '../components/account';
import { AppRoutes } from '../const/const';
import { ITab } from '../types/types';

type UserPageProps = SamplePageProps & {};

const TitleOfGenre = styled.h2`
  position: relative;
  font-weight: 700;
  font-size: 48px;
  line-height: 117%;
  color: #fff;
`;

const WrapperTabs = styled.div`
  display: flex;
  gap: 64px;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const WrapperButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 64px;
`;

const IconFavorite = styled.svg`{
  position: absolute
}`;

const IconUser = styled.svg`{
  position: absolute
}`;

const Tab = styled.button`
  font-weight: 400;
  font-size: 24px;
  line-height: 133%;
  color: #fff;
  background-color: transparent;
  border: none;
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

function UserPage({ ...props }: UserPageProps) {
  const [activeTab, setActiveTab] = useState<ITab>('favorites');

  const [isLogin, setIsLogin] = useState(true);

  const { data: userData } = useGetProfileQuery();

  const { data: favoritesFilms, isSuccess: isLoadFavoritesFilms } =
    useGetFavoritesQuery();

  const { isSuccess } = useGetLogoutQuery();

  const navigate = useNavigate();

  const tabFavoriteClass = classNames({
    'tab-favorite': true,
    active: activeTab
  });

  const handleClickTab = () => {
    setActiveTab((prev) => prev === 'favorites' ? 'account' : 'favorites')
  };

  const handleClickAuth = () => {};

  const handleExitUser = () => {
    if (isSuccess) {
      setIsLogin(false);
      navigate(AppRoutes.Main);
    }
  };

  return (
    <SamplePage {...props}>
      <Header
        isAuth={isLogin}
        onClickAuth={handleClickAuth}
      />
      <section className='genre-films'>
        <TitleOfGenre className='genre-films__title'>Мой аккаунт</TitleOfGenre>
        <WrapperTabs>
          <IconWrapper
            className={classNames('tab-favorite', {
              active: activeTab === 'favorites'
            })}
          >
            <IconFavorite
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z'
                fill='white'
              />
            </IconFavorite>
            <Tab onClick={handleClickTab}>Избранные фильмы</Tab>
          </IconWrapper>
          <IconWrapper className='tab-user'>
            <IconUser
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z'
                fill='white'
              />
            </IconUser>
            <Tab  onClick={(tab) => handleClickTab}>Настройка аккаунта</Tab>
          </IconWrapper>
        </WrapperTabs>
        <div
          className={classNames('favorites', {
            'visually-hidden': activeTab === 'account'
          })}
        >
          {isLoadFavoritesFilms && <GenreFilmsList films={favoritesFilms} />}
        </div>

        <div
          className={classNames('account', {
            'visually-hidden': activeTab === 'favorites'
          })}
        >
          <Account
            userName={userData && userData.name}
            userMail={userData && userData.email}
            onHandleExitUser={handleExitUser}
          />
        </div>

        <WrapperButton>
          <Button
            className='genre-films'
            type='button'
          >
            <TextButton>Показать ещё</TextButton>
          </Button>
        </WrapperButton>
      </section>
      <Footer />
    </SamplePage>
  );
}

export { UserPage };
