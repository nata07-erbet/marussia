import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchList } from './search-list';
import { moviesJSON } from '../../mocks/movies';
import { getFromJsonToMovies } from '../../utils/utils';

const SearchWrapper = styled.div`
  position: relative;
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

const films = getFromJsonToMovies(moviesJSON);

//пусть поиск отображается от 3-х символов

function Search() {
  const [str, setStr] = useState('');

  const handleClickInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setStr(evt.target.value);
  };

  const sortedFilmsByInput = films.filter((film) =>
    film.title.toLocaleLowerCase().includes(str.toLocaleLowerCase())
  );

  return (
    <SearchWrapper>
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
            value={str}
            onChange={handleClickInput}
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
      <SearchList
        sortedFilms={sortedFilmsByInput}
        str={str}
      />
    </SearchWrapper>
  );
}

export { Search };
