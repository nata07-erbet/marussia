import React from 'react';
import styled from 'styled-components';

type GenreProps = {
  genreUrl: string;
  genreTitle: string;
};

const GenreBlock = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 24px;
  width: 290px;
  height: 304px;

  box-shadow: 0 0 80px 0 rgba(255, 255, 255, 0.33);
  background: #0a0b0b;
`;

const GenreImg = styled.img`
  display: block;
  width: 290px;
  height: 220px;
  background-color: green;
`;
const GenreTitleEl = styled.p`
    font-weight: 700;
    font-size: 24px;
    line-height: 133%;
    text-align: center;
    color: #fff;
`;

function Genre({ genreUrl, genreTitle }: GenreProps) {
  return (
    <GenreBlock className='genre'>
      <GenreImg
        className='genre__name'
        src={genreUrl}
      />
      <div className='genre__name__title'>
        <GenreTitleEl>{genreTitle}</GenreTitleEl>
      </div>
    </GenreBlock>
  );
}

export { Genre };
