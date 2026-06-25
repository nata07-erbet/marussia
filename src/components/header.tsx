import React, { useState } from 'react';
import styled from 'styled-components';
import {  useLocation } from 'react-router';
import { AppRoutes, NavMap } from '../const/const';
import { Search } from './search/search';
import classNames from 'classnames';
import { useGetProfileQuery } from '../services/auth-api';


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
  isAuth: boolean | undefined;
  onClickAuth: () => void;
};

function Header({ isAuth, onClickAuth}: HeaderProps) {
  const location = useLocation();
  const classNavUser = classNames({
    'nav-list__item-link': true,
    active: isAuth
  });

    const { data: dataProfile } = useGetProfileQuery();

  return (
    <>
      <HeaderComp className='page-header'>
        <div className='page-header__ wrapper wrapper'>
          <HeaderContainer className='page-header__container'>
            <Logo className='page-header__logo' href={AppRoutes.Main}>
              <img src='/assets/marussia-white.png' />
            </Logo>
            <nav className='page-header__nav header-navigation'>
              <List className='header-navigation__list nav-list list-reset'>
                {NavMap.map((nav) => {
                  const classNavItem = classNames({
                    'nav-list__item-link': true,
                    active:
                      (location.pathname === nav.to || 
                      location.pathname.startsWith(`${nav.to}/`)) 
                  });
                  return (
                    <li className='nav-list__item' key={nav.name}>
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
              onClick={onClickAuth}
            >
              {!isAuth ? 'Войти' : `${dataProfile?.name}`}
            </LinkNav>
          </HeaderContainer>
        </div>
      </HeaderComp>
    </>
  );
}

export { Header };
