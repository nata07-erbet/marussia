import React from 'react';
import  { Film } from './film';

const films = [
    {
      'id': 2,
      'title': 'Ariel',
      'originalTitle': 'Ariel',
      'language': 'fi',
      'relaseYear': 1988,
      'releaseDate': '1988-10-21',
      'genres': [
        'drama',
        'comedy',
        'romance',
        'crime'
      ],
      'plot': 'After the coal mine he works at closes and his father commits suicide, a Finnish man leaves for the city to make a living but there, he is framed and imprisoned for various crimes.',
      'runtime': 73,
      'budget': null,
      'revenue': null,
      'homepage': '',
      'status': 'released',
      'posterUrl': 'https://cinemaguide.skillbox.cc/images/2/ojDg0PGvs6R9xYFodRct2kdI6wC.jpg',
      'backdropUrl': 'https://cinemaguide.skillbox.cc/images/2/hQ4pYsIbP22TMXOUdSfC2mjWrO0.jpg',
      'trailerUrl': 'https://youtube.com/watch?v=LPkNFRemZrM',
      'trailerYoutubeId': 'LPkNFRemZrM',
      'tmdbRating': 7.09,
      'searchL': 'ariel. aki kaurismäki. aki kaurismaki',
      'keywords': [],
      'countriesOfOrigin': [],
      'languages': [],
      'cast': [],
      'director': 'Aki Kaurismäki',
      'production': null,
      'awardsSummary': null
    },
    {
      'id': 3,
      'title': 'Shadows in Paradise',
      'originalTitle': 'Varjoja paratiisissa',
      'language': 'fi',
      'releaseYear': 1986,
      'releaseDate': '1986-10-17',
      'genres': [
        'drama',
        'comedy',
        'romance'
      ],
      'plot': 'Nikander, a rubbish collector and would-be entrepreneur, finds his plans for success dashed when his business associate dies. One evening, he meets Ilona, a down-on-her-luck cashier, in a local supermarket. Falteringly, a bond begins to develop between them.',
      'runtime': 74,
      'budget': null,
      'revenue': null,
      'homepage': '',
      'status': 'released',
      'posterUrl': 'https://cinemaguide.skillbox.cc/images/3/nj01hspawPof0mJmlgfjuLyJuRN.jpg',
      'backdropUrl': 'https://cinemaguide.skillbox.cc/images/3/l94l89eMmFKh7na2a1u5q67VgNx.jpg',
      'trailerUrl': 'https://youtube.com/watch?v=ghuSkyWcmqg',
      'trailerYouTubeId': 'ghuSkyWcmqg',
      'tmdbRating': 7.292,
      'searchL': 'shadows in paradise. varjoja paratiisissa. aki kaurismäki. aki kaurismaki',
      'keywords': [],
      'countriesOfOrigin': [],
      'languages': [],
      'cast': [],
      'director': 'Aki Kaurismäki',
      'production': null,
      'awardsSummary': null
    },
    {
      'id': 5,
      'title': 'Four Rooms',
      'originalTitle': 'Four Rooms',
      'language': 'en',
      'relaseYear': 1995,
      'releaseDate': '1995-12-09',
      'genres': [
        'comedy'
      ],
      'plot': 'Its Ted the Bellhops first night on the job...and the hotel',
      'runtime': 98,
      'budget': '4000000',
      'revenue': '4257354',
      'homepage': 'https://www.miramax.com/movie/four-rooms/',
      'status': 'released',
      'posterUrl': 'https://cinemaguide.skillbox.cc/images/5/75aHn1NOYXh4M7L5shoeQ6NGykP.jpg',
      'backdropUrl': 'https://cinemaguide.skillbox.cc/images/5/f2t4JbUvQIjUF5FstG1zZFAp02N.jpg',
      'trailerUrl': 'https://youtube.com/watch?v=S_Pd2pGkq54',
      'trailerYouTubeId': 'S_Pd2pGkq54',
      'tmdbRating': 5.821,
      'searchL': 'four rooms. allison anders. alexandre rockwell. robert rodriguez',
      'keywords': [],
      'countriesOfOrigin': [],
      'languages': [],
      'cast': [],
      'director': 'Allison Anders, Alexandre Rockwell, Robert Rodriguez, Quentin Tarantino',
      'production': 'Miramax Films',
      'awardsSummary': '1 win & 1 nomination.'
    },
];

function FilmsList() {
  return (
    <ul className='top-10__list list-reset'>
      {films.map((film)=> (
      <Film film={film} />
      ))}
    </ul>
  );
}

export { FilmsList };
