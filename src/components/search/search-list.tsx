import React from 'react';
import { IMovie } from '../../types/types';
import { SearchComponent } from './search-component';
import styled from 'styled-components';
import classNames from 'classnames';
import { useNavigate } from 'react-router';

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
  str: string;
};

function SearchList({ sortedFilms, str }: SearchListProps) {
  const navigate = useNavigate();

  const isListActive = str && str.length >= 3 ? true : false;

  const classIsVisually = classNames({
    'search-list': true,
    'list-reset': true,
    'visually-hidden': !isListActive
  });


  return (
    <SearchContainer className={classIsVisually}>
      {sortedFilms.map((film) => (
        <SearchComponent
          film={film}
          key={film.id}
          onClickToFilm={(id) => navigate(`/genres/${film.genres[0]&&film.genres[1]}/film/${film.id}`)}
        />
      ))}
    </SearchContainer>
  );
}

export { SearchList };
