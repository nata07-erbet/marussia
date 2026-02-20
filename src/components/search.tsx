import React from 'react';
import styled from 'styled-components';
import { SearchList } from './search-list';

const SearchWrapper  = styled.div`
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

const films = [
  {
    id: 2,
    title: 'Ariel',
    originalTitle: 'Ariel',
    language: 'fi',
    relaseYear: 1988,
    releaseDate: '1988-10-21',
    genres: ['drama', 'comedy', 'romance', 'crime'],
    plot: 'After the coal mine he works at closes and his father commits suicide, a Finnish man leaves for the city to make a living but there, he is framed and imprisoned for various crimes.',
    runtime: 73,
    budget: null,
    revenue: null,
    homepage: '',
    status: 'released',
    posterUrl:
      'https://cinemaguide.skillbox.cc/images/2/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg',
    backdropUrl:
      'https://cinemaguide.skillbox.cc/images/2/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg',
    trailerUrl: 'https://youtube.com/watch?v=LPkNFRemZrM',
    trailerYoutubeId: 'LPkNFRemZrM',
    tmdbRating: 7.09,
    searchL: 'ariel. aki kaurismäki. aki kaurismaki',
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director: 'Aki Kaurismäki',
    production: null,
    awardsSummary: null
  },
  {
    id: 3,
    title: 'Shadows in Paradise',
    originalTitle: 'Varjoja paratiisissa',
    language: 'fi',
    releaseYear: 1986,
    releaseDate: '1986-10-17',
    genres: ['drama', 'comedy', 'romance'],
    plot: 'Nikander, a rubbish collector and would-be entrepreneur, finds his plans for success dashed when his business associate dies. One evening, he meets Ilona, a down-on-her-luck cashier, in a local supermarket. Falteringly, a bond begins to develop between them.',
    runtime: 74,
    budget: null,
    revenue: null,
    homepage: '',
    status: 'released',
    posterUrl:
      'https://cinemaguide.skillbox.cc/images/3/nj01hspawPof0mJmlgfjuLyJuRN.jpg',
    backdropUrl:
      'https://cinemaguide.skillbox.cc/images/3/l94l89eMmFKh7na2a1u5q67VgNx.jpg',
    trailerUrl: 'https://youtube.com/watch?v=ghuSkyWcmqg',
    trailerYouTubeId: 'ghuSkyWcmqg',
    tmdbRating: 7.292,
    searchL:
      'shadows in paradise. varjoja paratiisissa. aki kaurismäki. aki kaurismaki',
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director: 'Aki Kaurismäki',
    production: null,
    awardsSummary: null
  },
  {
    id: 5,
    title: 'Four Rooms',
    originalTitle: 'Four Rooms',
    language: 'en',
    relaseYear: 1995,
    releaseDate: '1995-12-09',
    genres: ['comedy'],
    plot: 'Its Ted the Bellhops first night on the job...and the hotel',
    runtime: 98,
    budget: '4000000',
    revenue: '4257354',
    homepage: 'https://www.miramax.com/movie/four-rooms/',
    status: 'released',
    posterUrl:
      'https://cinemaguide.skillbox.cc/images/5/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
    backdropUrl:
      'https://cinemaguide.skillbox.cc/images/5/f2t4JbUvQIjUF5FstG1zZFAp02N.jpg',
    trailerUrl: 'https://youtube.com/watch?v=S_Pd2pGkq54',
    trailerYouTubeId: 'S_Pd2pGkq54',
    tmdbRating: 5.821,
    searchL: 'four rooms. allison anders. alexandre rockwell. robert rodriguez',
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director:
      'Allison Anders, Alexandre Rockwell, Robert Rodriguez, Quentin Tarantino',
    production: 'Miramax Films',
    awardsSummary: '1 win & 1 nomination.'
  },
  {
    id: 2,
    title: 'Ariel',
    originalTitle: 'Ariel',
    language: 'fi',
    relaseYear: 1988,
    releaseDate: '1988-10-21',
    genres: ['drama', 'comedy', 'romance', 'crime'],
    plot: 'After the coal mine he works at closes and his father commits suicide, a Finnish man leaves for the city to make a living but there, he is framed and imprisoned for various crimes.',
    runtime: 73,
    budget: null,
    revenue: null,
    homepage: '',
    status: 'released',
    posterUrl:
      'https://cinemaguide.skillbox.cc/images/2/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg',
    backdropUrl:
      'https://cinemaguide.skillbox.cc/images/2/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg',
    trailerUrl: 'https://youtube.com/watch?v=LPkNFRemZrM',
    trailerYoutubeId: 'LPkNFRemZrM',
    tmdbRating: 7.09,
    searchL: 'ariel. aki kaurismäki. aki kaurismaki',
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director: 'Aki Kaurismäki',
    production: null,
    awardsSummary: null
  },
  {
    id: 3,
    title: 'Shadows in Paradise',
    originalTitle: 'Varjoja paratiisissa',
    language: 'fi',
    releaseYear: 1986,
    releaseDate: '1986-10-17',
    genres: ['drama', 'comedy', 'romance'],
    plot: 'Nikander, a rubbish collector and would-be entrepreneur, finds his plans for success dashed when his business associate dies. One evening, he meets Ilona, a down-on-her-luck cashier, in a local supermarket. Falteringly, a bond begins to develop between them.',
    runtime: 74,
    budget: null,
    revenue: null,
    homepage: '',
    status: 'released',
    posterUrl:
      'https://cinemaguide.skillbox.cc/images/3/nj01hspawPof0mJmlgfjuLyJuRN.jpg',
    backdropUrl:
      'https://cinemaguide.skillbox.cc/images/3/l94l89eMmFKh7na2a1u5q67VgNx.jpg',
    trailerUrl: 'https://youtube.com/watch?v=ghuSkyWcmqg',
    trailerYouTubeId: 'ghuSkyWcmqg',
    tmdbRating: 7.292,
    searchL:
      'shadows in paradise. varjoja paratiisissa. aki kaurismäki. aki kaurismaki',
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director: 'Aki Kaurismäki',
    production: null,
    awardsSummary: null
  },
  {
    id: 5,
    title: 'Four Rooms',
    originalTitle: 'Four Rooms',
    language: 'en',
    relaseYear: 1995,
    releaseDate: '1995-12-09',
    genres: ['comedy'],
    plot: 'Its Ted the Bellhops first night on the job...and the hotel',
    runtime: 98,
    budget: '4000000',
    revenue: '4257354',
    homepage: 'https://www.miramax.com/movie/four-rooms/',
    status: 'released',
    posterUrl:
      'https://cinemaguide.skillbox.cc/images/5/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
    backdropUrl:
      'https://cinemaguide.skillbox.cc/images/5/f2t4JbUvQIjUF5FstG1zZFAp02N.jpg',
    trailerUrl: 'https://youtube.com/watch?v=S_Pd2pGkq54',
    trailerYouTubeId: 'S_Pd2pGkq54',
    tmdbRating: 5.821,
    searchL: 'four rooms. allison anders. alexandre rockwell. robert rodriguez',
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director:
      'Allison Anders, Alexandre Rockwell, Robert Rodriguez, Quentin Tarantino',
    production: 'Miramax Films',
    awardsSummary: '1 win & 1 nomination.'
  },
  {
    id: 2,
    title: 'Ariel',
    originalTitle: 'Ariel',
    language: 'fi',
    relaseYear: 1988,
    releaseDate: '1988-10-21',
    genres: ['drama', 'comedy', 'romance', 'crime'],
    plot: 'After the coal mine he works at closes and his father commits suicide, a Finnish man leaves for the city to make a living but there, he is framed and imprisoned for various crimes.',
    runtime: 73,
    budget: null,
    revenue: null,
    homepage: '',
    status: 'released',
    posterUrl:
      'https://cinemaguide.skillbox.cc/images/2/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg',
    backdropUrl:
      'https://cinemaguide.skillbox.cc/images/2/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg',
    trailerUrl: 'https://youtube.com/watch?v=LPkNFRemZrM',
    trailerYoutubeId: 'LPkNFRemZrM',
    tmdbRating: 7.09,
    searchL: 'ariel. aki kaurismäki. aki kaurismaki',
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director: 'Aki Kaurismäki',
    production: null,
    awardsSummary: null
  },
  {
    id: 3,
    title: 'Shadows in Paradise',
    originalTitle: 'Varjoja paratiisissa',
    language: 'fi',
    releaseYear: 1986,
    releaseDate: '1986-10-17',
    genres: ['drama', 'comedy', 'romance'],
    plot: 'Nikander, a rubbish collector and would-be entrepreneur, finds his plans for success dashed when his business associate dies. One evening, he meets Ilona, a down-on-her-luck cashier, in a local supermarket. Falteringly, a bond begins to develop between them.',
    runtime: 74,
    budget: null,
    revenue: null,
    homepage: '',
    status: 'released',
    posterUrl:
      'https://cinemaguide.skillbox.cc/images/3/nj01hspawPof0mJmlgfjuLyJuRN.jpg',
    backdropUrl:
      'https://cinemaguide.skillbox.cc/images/3/l94l89eMmFKh7na2a1u5q67VgNx.jpg',
    trailerUrl: 'https://youtube.com/watch?v=ghuSkyWcmqg',
    trailerYouTubeId: 'ghuSkyWcmqg',
    tmdbRating: 7.292,
    searchL:
      'shadows in paradise. varjoja paratiisissa. aki kaurismäki. aki kaurismaki',
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director: 'Aki Kaurismäki',
    production: null,
    awardsSummary: null
  },
  {
    id: 5,
    title: 'Four Rooms',
    originalTitle: 'Four Rooms',
    language: 'en',
    relaseYear: 1995,
    releaseDate: '1995-12-09',
    genres: ['comedy'],
    plot: 'Its Ted the Bellhops first night on the job...and the hotel',
    runtime: 98,
    budget: '4000000',
    revenue: '4257354',
    homepage: 'https://www.miramax.com/movie/four-rooms/',
    status: 'released',
    posterUrl:
      'https://cinemaguide.skillbox.cc/images/5/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
    backdropUrl:
      'https://cinemaguide.skillbox.cc/images/5/f2t4JbUvQIjUF5FstG1zZFAp02N.jpg',
    trailerUrl: 'https://youtube.com/watch?v=S_Pd2pGkq54',
    trailerYouTubeId: 'S_Pd2pGkq54',
    tmdbRating: 5.821,
    searchL: 'four rooms. allison anders. alexandre rockwell. robert rodriguez',
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director:
      'Allison Anders, Alexandre Rockwell, Robert Rodriguez, Quentin Tarantino',
    production: 'Miramax Films',
    awardsSummary: '1 win & 1 nomination.'
  },
  {
    id: 5,
    title: 'Four Rooms',
    originalTitle: 'Four Rooms',
    language: 'en',
    relaseYear: 1995,
    releaseDate: '1995-12-09',
    genres: ['comedy'],
    plot: 'Its Ted the Bellhops first night on the job...and the hotel',
    runtime: 98,
    budget: '4000000',
    revenue: '4257354',
    homepage: 'https://www.miramax.com/movie/four-rooms/',
    status: 'released',
    posterUrl:
      'https://cinemaguide.skillbox.cc/images/5/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
    backdropUrl:
      'https://cinemaguide.skillbox.cc/images/5/f2t4JbUvQIjUF5FstG1zZFAp02N.jpg',
    trailerUrl: 'https://youtube.com/watch?v=S_Pd2pGkq54',
    trailerYouTubeId: 'S_Pd2pGkq54',
    tmdbRating: 5.821,
    searchL: 'four rooms. allison anders. alexandre rockwell. robert rodriguez',
    keywords: [],
    countriesOfOrigin: [],
    languages: [],
    cast: [],
    director:
      'Allison Anders, Alexandre Rockwell, Robert Rodriguez, Quentin Tarantino',
    production: 'Miramax Films',
    awardsSummary: '1 win & 1 nomination.'
  }
];

function Search() {
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
      <SearchList sortedFilms={films.slice(5)}/>
    </SearchWrapper>
  );
}

export { Search };
