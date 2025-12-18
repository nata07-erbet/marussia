import React from 'react';
import styled from 'styled-components';
// import maryssiaImg from '.' //

const HeaderComp = styled.header`
  height: 96px;
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

const ButtonSearch = styled.button`
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
 

`;
const Label = styled.label`
    position: relative;
`;

const InputSearch = styled.input`
  border-radius: 8px;
  padding: 16px;
  width: 655px;
  height: 48px;
  background: #393b3c;
  border: 0px;
  padding: 12px;
  padding-left: 58px;

  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 133%;
    color: rgba(255, 255, 255, 0.5);
  }
`;
function Header() {
  return (
    <HeaderComp className='page-header'>
      <div className='page-header__ wrapper wrapper'>
        <HeaderContainer className='page-header__container'>
          <Logo className='page-header__logo'>
            <img src='/assets/marussia-white.png' />
          </Logo>
          <nav className='page-header__nav header-navigation'>
            <List className='header-navigation__list nav-list list-reset'>
              <li className='nav-list__item'>
                <LinkNav
                  className='nav-list__item-link'
                  href='#'
                >
                  Главная
                </LinkNav>
              </li>
              <li className='nav-list__item'>
                <LinkNav
                  className='nav-list__item-link'
                  href='#'
                >
                  Жанры
                </LinkNav>
              </li>
              <li className='nav-list__item'>
                <LinkNav
                  className='nav-list__item-link'
                  href='#'
                >
                  <form
                    className='nav-list__item-search search'
                    action='#'
                    method='POST'
                  >
                    <Label
                      className='search__label'
                      htmlFor='search-input-id'
                    >
                      <InputSearch
                        className='search__input'
                        type='text'
                        name='search-input-name'
                        id='search-input-id'
                        placeholder='Поиск'
                      />
                      <ButtonSearch
                        className='search__button'
                        type='submit'
                      >
                        <svg
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z'
                            fill='rgba(255, 255, 255, 0.5)'
                            fill-opacity='0.5'
                          />
                        </svg>
                      </ButtonSearch>
                    </Label>
                  </form>
                </LinkNav>
              </li>
            </List>
          </nav>
          <LinkNav
            className='nav-list__item-link'
            href='#'
          >
            Войти
          </LinkNav>
        </HeaderContainer>
      </div>
    </HeaderComp>
  );
}

export { Header };
