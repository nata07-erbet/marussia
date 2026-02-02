import React from 'react';
import { SamplePage } from './sample-page';
import type { SamplePageProps } from './sample-page';
import styled from 'styled-components';
import { GenresList } from '../components/genres-list';

const Wrapper = styled.section`
  
`;
const Title = styled.h1`
  font-family: var(--font-family);
  font-weight: 700;
  font-size: 48px;
  line-height: 117%;
  color: #fff;
`;

const FilmsWrapper = styled.div`
  margin-top: 64px;
`;

type GenresProps = SamplePageProps & {};

function Genres({ ...props }: GenresProps) {
  return (
    <SamplePage {...props}>
      <Wrapper className='top-10'>
        <Title>Жанры фильмов</Title>
        <FilmsWrapper className='top-10__wrapper'>
          <GenresList/>
        </FilmsWrapper>
      </Wrapper>
    </SamplePage>
  );
}

export { Genres };
