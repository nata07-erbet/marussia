import React from 'react';
import { IMovie } from '../types/types';
import { SearchComponent } from './search-component';
import styled from 'styled-components';

const SearchContainer = styled.ul`
  position: absolute;
  top: 114%;
  left: 94px;
  width: 100%;
  z-index: 9999;
  border-radius: 8px;
  padding: 8px;
  width: 559px;
  background: #393b3c;
`;

type SearchListProps = {
  sortedFilms: IMovie[];
};

function SearchList({ sortedFilms }: SearchListProps) {
  return (
    <SearchContainer className='search-list list-reset visually-hidden'>
      {sortedFilms.map((film) => (
        <SearchComponent film={film}/>
      ))}
    </SearchContainer>
  );
}

export { SearchList };
